// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdodJzRjlcNfDfPTXOYtT4CuKv2HZ7QEA",
    authDomain: "blog-snipify.firebaseapp.com",
    projectId: "blog-snipify",
    storageBucket: "blog-snipify.appspot.com",
    messagingSenderId: "91565075868",
    appId: "1:91565075868:web:cde00875593b640bf4ec59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDB, auth, storage };
