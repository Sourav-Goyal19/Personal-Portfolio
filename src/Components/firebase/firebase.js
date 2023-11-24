// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXjc6FsYLaSPLww9xMxibgh8-4IAWBKLY",
    authDomain: "portfolio-31c05.firebaseapp.com",
    projectId: "portfolio-31c05",
    storageBucket: "portfolio-31c05.appspot.com",
    messagingSenderId: "522393930425",
    appId: "1:522393930425:web:fa978a900f378760316968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };