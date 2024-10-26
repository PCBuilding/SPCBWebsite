import { db } from '@/lib/firebase/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export interface Project {
  id: string; //ID of the project NOT A COLUMN IN THE DATABASE
  Youtube: string;
  Description: string;
  Parts: {
    RAM: string;
    Cooling: string;
    Case: string;
    Motherboard: string;
    PSU: string;
    GPU: string;
    Storage: string;
    CPU: string;
  };
  Title: string;
  Photos: string;
  Image: string;
  Builders: string[]; // An array of builder names or identifiers
}


// READ Operation
export const getAllProjects = async () => {
  const querySnapshot = await getDocs(collection(db, "Projects"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Project[];
};

// CREATE Operation
export const addProject = async (projectData: Project) => {
  await addDoc(collection(db, "Projects"), projectData);
};

//ADD entry to the users database
async function addData() {
  try {
    const docRef = await addDoc(collection(db, "Projects"), {
      name: "Claudio Sciotto",
      email: "claudio@example.com",
      age: 22
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// // UPDATE Operation
// export const updateProject = async (id, updatedData) => {
//   const projectDoc = doc(db, "Projects", id);
//   await updateDoc(projectDoc, updatedData);
// };

// // DELETE Operation
// export const deleteProject = async (id) => {
//   const projectDoc = doc(db, "Projects", id);
//   await deleteDoc(projectDoc);
// };
