'use client';

import { useEffect, useState } from "react";
import { getAllProjects, Project } from '@/lib/firebase/firebaseOperations';
import  AddForm  from '@/components/admin/projects/AddForm';
import EditForm from '@/components/admin/projects/EditForm';

export default function Projects() {
  return (
    <>TESTING PAGE
    <AddForm/>
    <EditForm/>
    </>
  );
}