import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const adminFirebaseConfig = {
  apiKey: "AIzaSyDo1ijshvfsU2Vu_zXw7NZbvMZ1BK-R6fI",
  authDomain: "admin-panel-e11cd.firebaseapp.com",
  projectId: "admin-panel-e11cd",
  storageBucket: "admin-panel-e11cd.appspot.com",
  messagingSenderId: "994191246604",
  appId: "1:994191246604:web:e1c74ddf05c362edfa3529",
  measurementId: "G-Z2F71NK0MN",
};

const portfolioFirebaseConfig = {
  apiKey: "AIzaSyCZgntfAmYpCMnTUeXlmxhwTo4TtbFM7B0",
  authDomain: "portfolio-4a3be.firebaseapp.com",
  projectId: "portfolio-4a3be",
  storageBucket: "portfolio-4a3be.appspot.com",
  messagingSenderId: "799307377789",
  appId: "1:799307377789:web:8883c7cce5c3f4bcc11514",
  measurementId: "G-30871RBCQZ",
};

let adminApp;
let portfolioApp;

try {
  adminApp = getApp("adminApp");
} catch {
  adminApp = initializeApp(adminFirebaseConfig, "adminApp");
}

try {
  portfolioApp = getApp("portfolioApp");
} catch {
  portfolioApp = initializeApp(portfolioFirebaseConfig, "portfolioApp");
}

const adminDb = getFirestore(adminApp);
const adminAuth = getAuth(adminApp);

const portfolioDb = getFirestore(portfolioApp);
const portfolioAuth = getAuth(portfolioApp);

export { adminDb, adminAuth, portfolioDb, portfolioAuth };
