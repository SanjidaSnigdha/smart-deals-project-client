// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw1UOtTJmodjmoEiO2hlJbBdfmfI3eUFk",
  authDomain: "smart-deals-project-47854.firebaseapp.com",
  projectId: "smart-deals-project-47854",
  storageBucket: "smart-deals-project-47854.firebasestorage.app",
  messagingSenderId: "313826768891",
  appId: "1:313826768891:web:4fb5d13e182197d700bd5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
