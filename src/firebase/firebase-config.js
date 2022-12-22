import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCTD2srVKg6vqXUF_2VqKu5F2yEKHmXxlk",
  authDomain: "react-firebase-autosave.firebaseapp.com",
  projectId: "react-firebase-autosave",
  storageBucket: "react-firebase-autosave.appspot.com",
  messagingSenderId: "575064129636",
  appId: "1:575064129636:web:8bf18831ffb576bde55f71"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

export default database;