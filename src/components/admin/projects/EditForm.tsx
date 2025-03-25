import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { Search, Trash2 } from "lucide-react";
import { Project, ProjectFormData } from "@/types/project";
import AddForm from "./AddForm";
import { LuLoader2, LuX } from "react-icons/lu";

const DEFAULT_YOUTUBE = "https://www.youtube.com/@pcbuildinguf";
const DEFAULT_PHOTOS = "https://photos.app.goo.gl/Mua121F4n2MVZ9wn8";

export default function EditForm() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Projects"));
      const projectsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();

        // Ensure buildDate is a Timestamp
        let buildDate;
        if (data.buildDate instanceof Timestamp) {
          buildDate = data.buildDate;
        } else if (data.buildDate) {
          // If it's a different date format, convert to Timestamp
          buildDate = Timestamp.fromDate(new Date(data.buildDate));
        } else {
          // If no date exists, use current time
          buildDate = Timestamp.fromDate(new Date());
        }

        return {
          id: doc.id,
          ...data,
          buildDate,
          // Ensure default values for links
          Youtube: data.Youtube || DEFAULT_YOUTUBE,
          Photos: data.Photos || DEFAULT_PHOTOS,
        };
      }) as Project[];

      // Sort projects by date, most recent first
      const sortedProjects = projectsData.sort(
        (a, b) => b.buildDate.toMillis() - a.buildDate.toMillis(),
      );

      setProjects(sortedProjects);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch projects");
      setLoading(false);
      console.error("Error fetching projects:", err);
    }
  };

  const handleEditClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleUpdate = async (updatedData: ProjectFormData) => {
    if (!selectedProject) return;

    try {
      const projectRef = doc(db, "Projects", selectedProject.id);

      const firestoreData = {
        Youtube: updatedData.Youtube || DEFAULT_YOUTUBE,
        Description: updatedData.Description,
        Title: updatedData.Title,
        Photos: updatedData.Photos || DEFAULT_PHOTOS,
        Image: updatedData.Image,
        buildDate: updatedData.buildDate,
        Builders: updatedData.Builders,
        semester: {
          term: updatedData.semester.term,
          year: updatedData.semester.year,
        },
        Parts: {
          RAM: updatedData.Parts.RAM,
          Cooling: updatedData.Parts.Cooling,
          Case: updatedData.Parts.Case,
          Motherboard: updatedData.Parts.Motherboard,
          PSU: updatedData.Parts.PSU,
          GPU: updatedData.Parts.GPU,
          Storage: updatedData.Parts.Storage,
          CPU: updatedData.Parts.CPU,
        },
      };

      await updateDoc(projectRef, firestoreData);

      // Update local state and sort
      setProjects((prevProjects) => {
        const updatedProjects = prevProjects.map((proj) =>
          proj.id === selectedProject.id ? { ...proj, ...updatedData } : proj,
        );
        return updatedProjects.sort(
          (a, b) => b.buildDate.toMillis() - a.buildDate.toMillis(),
        );
      });

      setIsModalOpen(false);
      setSelectedProject(null);
    } catch (err) {
      console.error("Error updating project:", err);
      setError("Failed to update project");
    }
  };

  const handleDeleteClick = (project: Project) => {
    setProjectToDelete(project);
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    if (!projectToDelete) return;

    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, "Projects", projectToDelete.id));

      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== projectToDelete.id),
      );

      setShowDeleteConfirm(false);
      setProjectToDelete(null);
    } catch (err) {
      console.error("Error deleting project:", err);
      setError("Failed to delete project");
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-160px)] items-center justify-center">
        <span className="animate-spin text-5xl text-gray-800">
          <LuLoader2 />
        </span>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="mt-4">
      {/* Search input */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded border p-2 pl-11 text-sm sm:text-base"
        />
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {projects
          .filter((project) =>
            project.Title.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          .map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between rounded border p-4 text-sm sm:text-base"
            >
              <div>
                <h3 className="font-bold">{project.Title}</h3>
                <p className="text-sm text-gray-500">
                  Built on:{" "}
                  {project.buildDate &&
                    new Date(
                      project.buildDate.toDate().setHours(12),
                    ).toLocaleDateString()}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditClick(project)}
                  className="bg-blue-500 hover:bg-blue-600 rounded bg-gray-300 px-4 py-2 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(project)}
                  className="flex items-center gap-2 rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Edit Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-3">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded bg-white py-4">
            <div className="flex justify-between px-4">
              <p className="text-2xl font-medium">Edit Project</p>
              <button
                className="cursor-pointer text-3xl"
                onClick={() => setIsModalOpen(false)}
              >
                <LuX />
              </button>
            </div>
            <AddForm
              initialData={selectedProject}
              onSubmit={handleUpdate}
              isEditing={true}
            />
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h3 className="mb-4 text-xl font-bold">Confirm Delete</h3>
            <p className="mb-6">
              Are you sure you want to delete "{projectToDelete?.Title}"? This
              action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="rounded bg-gray-500 px-4 py-2 text-white transition-colors hover:bg-gray-600"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex items-center gap-2 rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
                disabled={isDeleting}
              >
                {isDeleting ? (
                  "Deleting..."
                ) : (
                  <>
                    <Trash2 size={18} />
                    Delete Project
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
