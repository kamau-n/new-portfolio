import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUnwFzkqNrk8Ai9Z8lCRcv4sAw-uhg7Mk",
  authDomain: "ecomerce-site-d6b4a.firebaseapp.com",
  projectId: "ecomerce-site-d6b4a",
  storageBucket: "ecomerce-site-d6b4a.appspot.com",
  messagingSenderId: "540630851940",
  appId: "1:540630851940:web:e1e6464f5d0ee223531a71",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
