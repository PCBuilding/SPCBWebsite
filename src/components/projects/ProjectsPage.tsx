"use client";


import GlowingLine from "@/components/decorations/GlowingLine";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { Project } from "@/types/project";
import ProjectModal from "./ProjectModal";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";




const sortProjects = (projects: Project[]) => {
  const termOrder = { Fall: 3, Summer: 2, Spring: 1 };


  return [...projects].sort((a, b) => {
    if (a.semester.year !== b.semester.year) {
      return b.semester.year - a.semester.year;
    }


    const termComparison =
      termOrder[b.semester.term] - termOrder[a.semester.term];
    if (termComparison !== 0) {
      return termComparison;
    }


    return b.buildDate.toMillis() - a.buildDate.toMillis();
  });
};


export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Projects"));
        const projectsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[];
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };


    fetchProjects();
  }, []);


  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }


    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);


  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Hero */}
      <div className="relative flex min-h-[40vh] items-center justify-center">
        <GlowingLine
          xPoints={["-1", "20"]}
          yPoints={["40", "40"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["-1", "18"]}
          yPoints={["45", "45"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["85", "101"]}
          yPoints={["95", "95"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["75", "101"]}
          yPoints={["100", "100"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />
        <GlowingLine
          xPoints={["80", "101"]}
          yPoints={["105", "105"]}
          color="#1E90FF"
          thickness={2}
          circleSize={6}
        />


        <div className="z-10 text-center">
          <h1 className="my-4 mt-32 text-4xl font-bold text-white">
            Latest Projects
          </h1>
          <p className="text-lg text-gray-300">
            Discover our latest custom PC builds
          </p>
        </div>
      </div>


      {/* Projects */}
      <div className="container mx-auto px-4 py-10">
        {loading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-sm p-4">
                {/* Image Skeleton */}
                <div className="aspect-video w-full rounded-sm bg-gray-900" />


                {/* Title Skeleton */}
                <div className="mt-4 h-6 w-3/4 rounded bg-gray-800" />


                {/* Date Skeleton */}
                <div className="mt-2 h-4 w-1/2 rounded bg-gray-800" />


                {/* Description Skeleton */}
                <div className="mt-3 space-y-2">
                  <div className="h-4 w-full rounded bg-gray-800" />
                  <div className="h-4 w-5/6 rounded bg-gray-800" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortProjects(projects).map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-sm p-4"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden rounded-sm bg-gray-900">
                  {!imageLoaded[project.id] && (
                    <div className="absolute inset-0 z-10 animate-pulse bg-gray-900" />
                  )}
                  <img
                    src={project.Image}
                    alt={project.Title}
                    onLoad={() =>
                      setImageLoaded((prev) => ({
                        ...prev,
                        [project.id]: true,
                      }))
                    }
                    className={`h-full w-full object-cover transition-transform group-hover:scale-105 ${
                      !imageLoaded[project.id] ? "opacity-0" : "opacity-100"
                    } transition-opacity`}
                  />
                </div>


                {/* Project Info */}
                <div className="mt-4">
                  <h3 className="flex items-center gap-1 text-xl font-bold text-white group-hover:underline">
                    {project.Title} <ArrowUpRight className="w-5" />
                  </h3>
                  <p className="mt-2 text-gray-400">
                    {project.semester.term + " " + project.semester.year}
                  </p>
                  <TruncatedText className="pt-2">
                    {project.Description}
                  </TruncatedText>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>


      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}


type Props = {
  children: string;
  lines?: number;
  className?: string;
};


const TruncatedText: React.FC<Props> = ({
  children,
  lines = 2,
  className = "",
}) => {
  const clampClass =
    {
      1: "line-clamp-1",
      2: "line-clamp-2",
      3: "line-clamp-3",
      4: "line-clamp-4",
      5: "line-clamp-5",
      6: "line-clamp-6",
    }[lines] || "line-clamp-2";


  return (
    <p
      className={`overflow-hidden text-ellipsis break-words text-gray-300 ${clampClass} ${className}`}
    >
      {children}
    </p>
  );
};





