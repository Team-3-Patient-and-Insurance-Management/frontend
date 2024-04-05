import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtKmW_8y8pCAweHW2RG_p5ClSqad_JrY0",
    authDomain: "pim-dev-985fa.firebaseapp.com",
    databaseURL: "https://pim-dev-985fa-default-rtdb.firebaseio.com",
    projectId: "pim-dev-985fa",
    storageBucket: "pim-dev-985fa.appspot.com",
    messagingSenderId: "647742175562",
    appId: "1:647742175562:web:b827d53301a33db18ba9b3",
    measurementId: "G-F3N1VTSY7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };

export default app;