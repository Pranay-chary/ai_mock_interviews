import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2WtaOmr-2crHCZgo5X3EPXa7mjPaHUIc",
  authDomain: "prepwise-404af.firebaseapp.com",
  projectId: "prepwise-404af",
  storageBucket: "prepwise-404af.firebasestorage.app",
  messagingSenderId: "235474508121",
  appId: "1:235474508121:web:25ffc6fa87ce046e845448",
  measurementId: "G-ZH1HNB216P"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
const db = getFirestore(app);