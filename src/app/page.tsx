'use client';
import Image from "next/image";

// pages/index.js

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase/firebase';  // Import your Firebase instance
import { collection, getDocs, addDoc, QuerySnapshot, DocumentData } from 'firebase/firestore'; // Import Firestore functions

async function addData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "Claudio Sciotto",
      email: "claudio@example.com",
      age: 22
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getAllData() {
  const querySnapshot = await getDocs(collection(db, "Projects"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
}

export default function Home() {
  const [data, setData] = useState<DocumentData[]>([]);

  
  getAllData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(await getDocs(collection(db, "projects")));
        const querySnapshot: QuerySnapshot = await getDocs(collection(db, "Projects"));
        const docsData = querySnapshot.docs.map(doc => doc.data()); // Cast each doc to FirebaseData type
        setData(docsData);
      } catch (error) {
        console.error("Error fetching Firebase data: ", error);
      }
    };

    fetchData();
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center pb-6">The Society of PC Building</h1>
        <p className="text-2xl text-center">Coming Soon!</p>
      </div>
      <div>
        <h1>Firebase Data:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </main>
  );
}
