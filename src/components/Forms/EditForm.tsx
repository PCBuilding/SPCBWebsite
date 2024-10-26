import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc  } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { Search, Trash2 } from 'lucide-react';
import { Project, ProjectFormData, Parts } from '@/types/project';
import AddForm from './AddForm';


export default function EditForm() {
    const [projects, setProjects] = useState<Project[]>([]); // Store all projects
    const [searchQuery, setSearchQuery] = useState<string>(''); // Store search input
    const [selectedProject, setSelectedProject] = useState<Project | null>(null); //current selected project for editing
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Control modal visibility
    const [loading, setLoading] = useState<boolean>(true); // Loading state for initial data fetch
    const [error, setError] = useState<string | null>(null); // Error handling
    const [isDeleting, setIsDeleting] = useState(false); // Loading state for delete operation
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false); // Control delete confirmation modal
    const [projectToDelete, setProjectToDelete] = useState<Project | null>(null); // Store project to delete

    useEffect(() => {
        fetchProjects();
    }, []);


    // Function to fetch all projects from Firestore
    const fetchProjects = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Projects"));
            const projectsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Project[];

            console.log('Projects:', projectsData);
            setProjects(projectsData);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch projects');
            setLoading(false);
            console.error('Error fetching projects:', err);
        }
    };

    // Filter projects based on search query
    const filteredProjects = projects.filter(project => {
        return project.Title.toLowerCase().includes(searchQuery.toLowerCase());
    })

    // Handler for clicking edit button
    const handleEditClick = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    //handler for updating a project
    const handleUpdate = async (updatedData: ProjectFormData) => {
        if (!selectedProject) return;
        
        try {
          const projectRef = doc(db, "Projects", selectedProject.id);
          
          // Convert ProjectFormData to a plain object that Firestore can handle
          const firestoreData = {
            Youtube: updatedData.Youtube,
            Description: updatedData.Description,
            Title: updatedData.Title,
            Photos: updatedData.Photos,
            Image: updatedData.Image,
            Builders: updatedData.Builders,
            Parts: {
              RAM: updatedData.Parts.RAM,
              Cooling: updatedData.Parts.Cooling,
              Case: updatedData.Parts.Case,
              Motherboard: updatedData.Parts.Motherboard,
              PSU: updatedData.Parts.PSU,
              GPU: updatedData.Parts.GPU,
              Storage: updatedData.Parts.Storage,
              CPU: updatedData.Parts.CPU
            }
          };
    
          await updateDoc(projectRef, firestoreData);
    
          // Update local state
          setProjects(prevProjects => 
            prevProjects.map(project => 
              project.id === selectedProject.id 
                ? { ...project, ...updatedData }
                : project
            )
          );
    
          setIsModalOpen(false);
          setSelectedProject(null);
        //   alert('Project updated successfully');
        } catch(err) {
          console.error('Error updating project:', err);
          setError('Failed to update project');
        }
      };

    const handleDeleteClick = (project: Project) => {
        setProjectToDelete(project);
        setShowDeleteConfirm(true);
    }

    const handleDeleteConfirm = async () => {
        if (!projectToDelete) return;

        setIsDeleting(true);
        try{
            await deleteDoc(doc(db, "Projects", projectToDelete.id));

            setProjects(prevProjects => prevProjects.filter(project => project.id !== projectToDelete.id));

            setShowDeleteConfirm(false);
            setProjectToDelete(null);
            //alert('Project deleted successfully');
        } catch (err) {
            console.error("Error deleting project:", err);
            setError('Failed to delete project');
        } finally {
            setIsDeleting(false);
        }
    }

    // Render loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // Render error state
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="p-4">
                {/* Search input */}
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text"
                        placeholder='Search projects...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 p-2 border rounded w-full"
                    />
                </div>

                {/* Projects List */}
                <div className="space-y-4">
                    {projects
                        .filter(project => project.Title.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((project) => (
                            <div key={project.id} className="border p-4 rounded flex justify-between items-center">
                                <h3 className="font-bold">{project.Title}</h3>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEditClick(project)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteClick(project)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors flex items-center gap-2"
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
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-4 rounded max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                            <h2 className="text-xl font-bold mb-4">Edit Project</h2>
                            <AddForm
                                initialData={selectedProject}
                                onSubmit={handleUpdate}
                                isEditing={true}
                            />
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Delete Confirmation Modal */}
                {showDeleteConfirm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg max-w-md w-full">
                            <h3 className="text-xl font-bold mb-4">Confirm Delete</h3>
                            <p className="mb-6">
                                Are you sure you want to delete "{projectToDelete?.Title}"? 
                                This action cannot be undone.
                            </p>
                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={() => setShowDeleteConfirm(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                                    disabled={isDeleting}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDeleteConfirm}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center gap-2"
                                    disabled={isDeleting}
                                >
                                    {isDeleting ? (
                                        'Deleting...'
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
        </>
    );
}