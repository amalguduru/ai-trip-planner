// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.AIzaSyDzrE_bR8PxjpdjfFIKcckNWQqkbEvOyeY,
  authDomain: "ai-travel-planner-c1639.firebaseapp.com",
  projectId: "ai-travel-planner-c1639",
  storageBucket: "ai-travel-planner-c1639.firebasestorage.app",
  messagingSenderId: "781996043462",
  appId: "1:781996043462:web:b7b64ea7596724841abbc7",
  measurementId: "G-YBHJYVZ04W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
