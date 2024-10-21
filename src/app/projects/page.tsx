'use client';

import { useEffect, useState } from "react";
import { getAllProjects, Project } from '@/lib/firebase/firebaseOperations';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  
  
 // The empty array ensures useEffect runs only once on mount

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getAllProjects();
      setProjects(data); // Set the state with the fetched projects
    };

    fetchProjects(); // Call the function to fetch projects
  }, []);


  return (
    <>Projects page
    <pre>{JSON.stringify(projects, null, 4)}</pre></>
  );
}