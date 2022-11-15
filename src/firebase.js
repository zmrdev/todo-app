import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIk0RsYzaa0riqzE6S8k6LS4yZgJGJL_U",
  authDomain: "todo-app-zmr.firebaseapp.com",
  projectId: "todo-app-zmr",
  storageBucket: "todo-app-zmr.appspot.com",
  messagingSenderId: "191899822778",
  appId: "1:191899822778:web:325238af606371b6dd7083",
  measurementId: "G-7LCY0FZ7FF"
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
export { db, auth }