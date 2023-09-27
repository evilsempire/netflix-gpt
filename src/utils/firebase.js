// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYmusrH1CMHVit7u4Ja1KGbkl8VyhSxbo",
  authDomain: "netflix-gpt-2dbcd.firebaseapp.com",
  projectId: "netflix-gpt-2dbcd",
  storageBucket: "netflix-gpt-2dbcd.appspot.com",
  messagingSenderId: "767444921872",
  appId: "1:767444921872:web:8df36eb696d1809b0ca495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();