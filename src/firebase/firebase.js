// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQpKwWuQHGQgjyPb8E-SHB1Yu2o__tCQs",
  authDomain: "sbespoke-48c4a.firebaseapp.com",
  databaseURL: "https://sbespoke-48c4a-default-rtdb.firebaseio.com",
  projectId: "sbespoke-48c4a",
  storageBucket: "sbespoke-48c4a.appspot.com",
  messagingSenderId: "661607206161",
  appId: "1:661607206161:web:832abed51c18e0a74f10b0",
  measurementId: "G-LM8RQEPPHF",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebaseConfig, app as default };
