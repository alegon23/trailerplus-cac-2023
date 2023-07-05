import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../core/config/firebase.config";

export const signInWithEmail = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signUpWithEmail = async (email, password) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
  return user;
};

export const signOut = async () => {
  await auth.signOut();
};
