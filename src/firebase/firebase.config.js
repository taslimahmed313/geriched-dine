// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlnmAcj94DjYm_n1vfnTr9INohhUtydQo",
  authDomain: "gericht-dine.firebaseapp.com",
  projectId: "gericht-dine",
  storageBucket: "gericht-dine.appspot.com",
  messagingSenderId: "188304311839",
  appId: "1:188304311839:web:0e887828f5dcd3946f772a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;