// firebase.ts (конфігурація Firebase)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // змінили з масиву на рядок
  client?: string;
}

export const getProjects = async (): Promise<Project[]> => {
  const projectsCollection = collection(db, "projects");
  const projectSnapshot = await getDocs(projectsCollection);
  const projects = await Promise.all(
    projectSnapshot.docs.map(async (doc) => {
      const data = doc.data();
      const imagePath: string = data.imageUrl || ""; // переконайся, що поле "image" є в Firestore
      
      let imageUrl = "";
      if (imagePath) {
        try {
          const storageRef = ref(storage, imagePath);
          imageUrl = await getDownloadURL(storageRef);
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      }
      
      return {
        id: doc.id,
        title: data.title || "Untitled Project",
        description: data.description || "",
        imageUrl,
        client: data.client || undefined
      };
    })
  );
  return projects;
};
