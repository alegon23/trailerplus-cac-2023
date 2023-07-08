import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MSG,
  appId: import.meta.env.VITE_FIREBASE_APP,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);