import { useState, useRef, useEffect } from "react";
import { Project } from "@/types/project";
import {
  X,
  MonitorPlay,
  Camera,
  Info,
  Cpu,
  Users,
  Calendar,
} from "lucide-react";
import { Timestamp } from "firebase/firestore";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<
    "description" | "specs" | "builders"
  >("description");

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const formatDate = (date: Timestamp) => {
    return new Date(
      date.toDate().getTime() - date.toDate().getTimezoneOffset() * 60000,
    ).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Define tab icons
  const tabIcons = {
    description: <Info size={18} />,
    specs: <Cpu size={18} />,
    builders: <Users size={18} />,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/85 p-4"
      onClick={() => onClose()}
    >
      <div
        ref={modalRef}
        className="relative my-4 h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a101c] to-[#080d14] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/30 p-2 text-white/90 hover:bg-black/50 hover:text-white"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="flex h-full flex-col md:flex-row">
          {/* Left side - Image with title overlay and buttons at bottom */}
          <div className="relative h-[250px] md:h-full md:w-2/5">
            <div className="relative h-full">
              <img
                src={project.Image}
                alt={project.Title}
                className="h-full w-full object-cover"
              />

              {/* Gradient overlays for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />

              {/* Title and info at the top */}
              <div className="absolute inset-x-0 top-0 p-4">
                <h2 className="text-xl font-bold tracking-tight text-white drop-shadow-md md:text-2xl">
                  {project.Title}
                </h2>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs md:text-sm">
                  <div className="text-blue-300 flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span className="font-medium">
                      {project.semester.term} {project.semester.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-gray-200">
                    <span>Built on {formatDate(project.buildDate)}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons at bottom */}
              <div className="absolute inset-x-0 bottom-0 flex gap-2 p-4">
                <a
                  href={project.Youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 flex items-center gap-2 rounded-lg bg-black/50 px-3 py-2 hover:bg-black/70"
                >
                  <MonitorPlay size={14} />
                  <span className="text-xs font-medium md:text-sm">
                    Watch Stream
                  </span>
                </a>
                <a
                  href={project.Photos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 flex items-center gap-2 rounded-lg bg-black/50 px-3 py-2 hover:bg-black/70"
                >
                  <Camera size={14} />
                  <span className="text-xs font-medium md:text-sm">
                    View Photos
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Only tabs and their content - NOW SCROLLABLE */}
          <div className="relative flex w-full flex-1 flex-col overflow-hidden md:w-3/5">
            {/* Tabs with fixed mobile layout - sticky */}
            <div className="sticky top-0 z-10 flex overflow-x-auto border-b border-white/10 bg-[#0a101c] pb-px">
              {(["description", "specs", "builders"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex min-w-max items-center gap-2 whitespace-nowrap px-3 py-3 sm:px-4 ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-400 border-b-2 font-medium"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tabIcons[tab]}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content with custom modern scrollbar - FULL HEIGHT SCROLLABLE CONTAINER */}
            <div
              className="custom-scrollbar flex-1 overflow-y-auto p-4"
              style={{
                // Custom scrollbar styles for Firefox and IE/Edge - see CSS for webkit (Chrome/Safari)
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(59, 130, 246, 0.2) transparent",
              }}
            >
              {activeTab === "description" && (
                <p className="leading-relaxed text-gray-300">
                  {project.Description}
                </p>
              )}

              {activeTab === "specs" && (
                <div className="space-y-3 pb-2">
                  {Object.entries(project.Parts).map(([part, value]) => (
                    <div
                      key={part}
                      className="hover:bg-white/8 rounded-lg bg-white/5"
                    >
                      <div className="border-b border-white/10 bg-white/5 px-4 py-2">
                        <span className="text-sm font-medium uppercase tracking-wider text-gray-400">
                          {part}
                        </span>
                      </div>
                      <div className="p-3">
                        <span className="text-white">{value || "TBA"}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "builders" && (
                <div className="space-y-3">
                  {project.Builders.map((builder, index) => (
                    <div
                      key={index}
                      className="hover:bg-white/8 rounded-lg bg-white/5 p-4 text-gray-300"
                    >
                      {builder}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
