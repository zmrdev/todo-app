import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDIk0RsYzaa0riqzE6S8k6LS4yZgJGJL_U",
  authDomain: "todo-app-zmr.firebaseapp.com",
  projectId: "todo-app-zmr",
  storageBucket: "todo-app-zmr.appspot.com",
  messagingSenderId: "191899822778",
  appId: "1:191899822778:web:325238af606371b6dd7083",
  measurementId: "G-7LCY0FZ7FF"
})

const db = firebaseApp.firestore()

export default db