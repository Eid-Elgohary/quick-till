import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebase";

export async function loginUser(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function sendResetPasswordLink(email: string) {
  return await sendPasswordResetEmail(auth, email);
}

export async function logoutUser() {
  try {
    await signOut(auth);
    console.log("تم تسجيل الخروج بنجاح");
  } catch (error) {
    console.error("خطأ في تسجيل الخروج:", error.message);
    throw error;
  }
}
