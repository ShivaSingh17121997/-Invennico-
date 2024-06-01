// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from 'firebase/auth'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRC6thcT4LAw_iU7qRpS2_7sckDfI7emI",
    authDomain: "invicco-auth.firebaseapp.com",
    projectId: "invicco-auth",
    storageBucket: "invicco-auth.appspot.com",
    messagingSenderId: "666428383061",
    appId: "1:666428383061:web:edf4c94b7253455cc119dc",
    measurementId: "G-9WZNNYG0JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)