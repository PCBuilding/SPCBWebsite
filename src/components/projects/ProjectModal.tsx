import { useState } from "react";
import { Project } from "@/types/project";
import { X } from "lucide-react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<
    "description" | "specs" | "builders"
  >("description");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
      <div className="shadow-white-glow relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-xl bg-[#080d14] text-white">
        {/* Noise background */}
        <div className="absolute inset-0 opacity-30" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white/80 backdrop-blur-md transition-all hover:bg-white/20 hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="flex h-[85vh] flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative h-full">
              <img
                src={project.Image}
                alt={project.Title}
                className="h-full w-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-[#080d14] md:block" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="relative flex w-full flex-col p-8 md:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight">
              {project.Title}
            </h2>
            <p className="mt-2 font-medium text-blue-400">
              {project.semester.term} {project.semester.year}
            </p>

            {/* Tabs */}
            <div className="mt-8 flex space-x-6">
              {(["description", "specs", "builders"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 transition-all ${
                    activeTab === tab
                      ? "border-b-2 border-blue-500 font-medium text-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="scrollbar-thin scrollbar-track-blue-900/20 scrollbar-thumb-blue-400/20 mt-6 flex-1 overflow-y-auto pr-4">
              {activeTab === "description" && (
                <p className="leading-relaxed text-gray-300">
                  {project.Description}
                </p>
              )}

              {activeTab === "specs" && (
                <div className="space-y-3">
                  {Object.entries(project.Parts).map(([part, value]) => (
                    <div
                      key={part}
                      className="flex items-center justify-between rounded-lg bg-white/5 p-3 backdrop-blur-sm"
                    >
                      <span className="font-medium text-gray-300">{part}</span>
                      <span className="text-white">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "builders" && (
                <div className="space-y-2">
                  {project.Builders.map((builder, index) => (
                    <div key={index} className="text-gray-300">
                      {builder}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Links */}
            <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
              <a
                href={project.Youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg bg-white/5 p-4 text-blue-400 transition-all hover:bg-white/10 hover:text-blue-300"
              >
                <span>Watch Build Stream</span>
                <span>→</span>
              </a>
              <a
                href={project.Photos}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg bg-white/5 p-4 text-blue-400 transition-all hover:bg-white/10 hover:text-blue-300"
              >
                <span>View Photo Album</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
