'use client';

import { useEffect, useState } from "react";
import { getAllProjects } from '@/lib/firebase/firebaseOperations';

export default function Projects() {

  let x;
  
  useEffect(() => {
    x = getAllProjects();
  }, []);  // The empty array ensures useEffect runs only once on mount

  return (
    <>Projects page
    <pre>{JSON.stringify(x, null, 2)}</pre></>
  );
}