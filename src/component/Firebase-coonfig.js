// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD49KF1_LRw2_kQfea4PSJUTOjTKGqvOLM",
  authDomain: "fir-app-312d3.firebaseapp.com",
  projectId: "fir-app-312d3",
  storageBucket: "fir-app-312d3.appspot.com",
  messagingSenderId: "301585404222",
  appId: "1:301585404222:web:667de5c2ab7e79f5b89c6f",
  measurementId: "G-NSQ7EMBR8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
