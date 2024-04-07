import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_MOH770FdvF2u4lFhyS3lhMZgClYhI7c",
    authDomain: "patientinsurancemanagement.firebaseapp.com",
    projectId: "patientinsurancemanagement",
    storageBucket: "patientinsurancemanagement.appspot.com",
    messagingSenderId: "394971398506",
    appId: "1:394971398506:web:8b87c08931fd1633e96513",
    measurementId: "G-9CSB2NTZF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };

export default app;