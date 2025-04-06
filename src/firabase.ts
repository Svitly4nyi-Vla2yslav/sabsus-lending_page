import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);


export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string[]; // Тепер масив
  client?: string;
}

export interface CaseStudy {
  title: string;
  content: string;
  imageUrl?: string;
}

// ✅ Масова обробка зображень
const fetchImageURLs = async (paths: string[] = []): Promise<string[]> => {
  return await Promise.all(
    paths.map(async (path) => {
      try {
        const correctedPath = path.startsWith("gs://")
          ? path.replace("gs://sabsusweb.appspot.com/", "")
          : path;
        const imageRef = ref(storage, correctedPath);
        const url = await getDownloadURL(imageRef);
        return url;
      } catch (error) {
        console.error("Error fetching image:", path, error);
        return "";
      }
    })
  );
};

// ✅ Отримуємо проєкти
export const getProjects = async (): Promise<Project[]> => {
  try {
    const projectsCollection = collection(db, "projects");
    const projectSnapshot = await getDocs(projectsCollection);

    if (projectSnapshot.empty) {
      console.warn("Firestore collection is empty!");
      return [];
    }

    const projects = await Promise.all(
      projectSnapshot.docs.map(async (doc) => {
        const data = doc.data();
        const imageUrls = await fetchImageURLs(data.imageUrl || []);
        return {
          id: doc.id,
          title: data.title || "Untitled Project",
          description: data.description || "",
          imageUrl: imageUrls.filter(Boolean),
          client: data.client || undefined,
        };
      })
    );

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

// ✅ Отримуємо кейс-стаді
export const getCaseStudy = async (): Promise<CaseStudy | null> => {
  try {
    const docRef = doc(db, "caseStudies", "caseStudies");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      // console.warn("Case study not found!");
      return null;
    }

    const data = docSnap.data();
    const url = data.imageUrl
      ? await fetchImageURLs([data.imageUrl])
      : [];

    return {
      title: data.title || "",
      content: data.content || "",
      imageUrl: url[0],
    };
  } catch (error) {
    console.error("Error fetching case study:", error);
    return null;
  }
};
