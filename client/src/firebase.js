// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogapp-90b4c.firebaseapp.com",
  projectId: "blogapp-90b4c",
  storageBucket: "blogapp-90b4c.firebasestorage.app",
  messagingSenderId: "550630167228",
  appId: "1:550630167228:web:9788d75069b34b240a76b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
