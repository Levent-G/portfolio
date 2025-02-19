import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCZgntfAmYpCMnTUeXlmxhwTo4TtbFM7B0",
    authDomain: "portfolio-4a3be.firebaseapp.com",
    projectId: "portfolio-4a3be",
    storageBucket: "portfolio-4a3be.appspot.com",
    messagingSenderId: "799307377789",
    appId: "1:799307377789:web:8883c7cce5c3f4bcc11514",
    measurementId: "G-30871RBCQZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
