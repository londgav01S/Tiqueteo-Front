// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCi_OM0YJk_QlTdPoUNARTj1n4kI9uC7QI",
    authDomain: "tiqueteo-5089a.firebaseapp.com",
    projectId: "tiqueteo-5089a",
    storageBucket: "tiqueteo-5089a.firebasestorage.app",
    messagingSenderId: "487529356438",
    appId: "1:487529356438:web:f27ca41193739f0212b6b7",
    measurementId: "G-ZC9RTCYFC2"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export {appFirebase, analytics}

