import GlowingLine from "@/components/decorations/GlowingLine";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { Project } from "@/types/project";
import ProjectModal from "./ProjectModal";

const sortProjects = (projects: Project[]) => {
  const termOrder = { Fall: 3, Summer: 2, Spring: 1 };

  return [...projects].sort((a, b) => {
    // First compare years
    if (a.semester.year !== b.semester.year) {
      return b.semester.year - a.semester.year; // Descending order
    }

    // If years are equal, compare terms
    const termComparison =
      termOrder[b.semester.term] - termOrder[a.semester.term];
    if (termComparison !== 0) {
      return termComparison;
    }

    // If terms are equal, compare dates
    return b.buildDate.toMillis() - a.buildDate.toMillis();
  });
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    // When selectedProject changes (modal opens/closes)
    if (selectedProject) {
      // Prevent scrolling on the main page when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = "";
    }

    // Cleanup function to ensure scrolling is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Applied noise background for consistency */}

      {/* Hero Section with Title */}
      <div className="relative flex min-h-[40vh] items-center justify-center">
        {/* Decorative Lines */}
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

        {/* Title Content */}
        <div className="z-10 text-center">
          <h1 className="my-4 mt-32 text-5xl font-bold text-white">
            Our Projects
          </h1>
          <p className="text-lg text-gray-300">
            Discover our latest custom PC builds
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="border-blue-500 h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortProjects(projects).map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-950 p-4 shadow-white-glow transition-transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={project.Image}
                    alt={project.Title}
                    className="h-full w-full object-cover transition-transform"
                  />
                </div>

                {/* Project Info */}
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.Title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-gray-300">
                    {project.semester.term + " " + project.semester.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
