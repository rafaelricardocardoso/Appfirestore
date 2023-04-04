import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCdg5l6ZG7HhIHDd_k0nOJ3x2I0HxvwS5M",
  authDomain: "firestorefausto.firebaseapp.com",
  projectId: "firestorefausto",
  storageBucket: "firestorefausto.appspot.com",
  messagingSenderId: "79519142339",
  appId: "1:79519142339:web:8c16a7e9e7fae2f53aad76",
  measurementId: "G-8QBHQ34JL9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)