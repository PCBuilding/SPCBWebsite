import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { Search } from 'lucide-react';
import { Project, ProjectFormData, Parts } from '@/types/project';
import AddForm from './AddForm';


export default function EditForm() {
    const [projects, setProjects] = useState<Project[]>([]); // Store all projects
    const [searchQuery, setSearchQuery] = useState<string>(''); // Store search input
    const [selectedProject, setSelectedProject] = useState<Project | null>(null); //current selected project for editing
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Control modal visibility
    const [loading, setLoading] = useState<boolean>(true); // Loading state for initial data fetch
    const [error, setError] = useState<string | null>(null); // Error handling

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
            // Update the project in Firestore
            const projectRef = doc(db, "Projects", selectedProject.id);
            
            // Convert the ProjectFormData to a plain object
            const FormData = {
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

            await updateDoc(projectRef, FormData);

            // Update local state to reflect changes
            setProjects(prevProjects => 
                prevProjects.map(project => 
                    project.id === selectedProject.id 
                        ? { ...project, ...updatedData }
                        : project
                )
            );

            setIsModalOpen(false);
            setSelectedProject(null);
            alert('Project updated successfully');

        } catch(err){
            console.error('Error updating project:', err);
            setError('Failed to update project');
        }
    };

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
        <div className = "p-4">
            {/* Search input */}
            <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                    type="text"
                    placeholder='Search projects...'
                    value = {searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 p-2 border rounded w-full"
                />
            </div>

            {/* Projects List */}
            <div className="space-y-4">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="border p-4 rounded">
                        <h3 className="font-bold">{project.Title}</h3>
                        <button
                            onClick={() => handleEditClick(project)}
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Edit
                        </button>
                    </div>
                ))}
            </div>

            {/* Edit Modal */}
            {isModalOpen && selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Edit Project</h2>
                {/* Add your form fields here */}
                <AddForm />
                <div className="flex justify-end mt-4">
                    <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                    >
                    Cancel
                    </button>
                    <button
                    onClick={() => {
                        if (selectedProject) {
                        handleUpdate(selectedProject);
                        }
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                    Save
                    </button>
                </div>
                </div>
            </div>
            )}
        </div>
        </>
    )

}