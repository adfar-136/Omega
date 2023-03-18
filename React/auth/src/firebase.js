
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBAEs8GnrVgs0ENilq9y-hZwgDjsp0rrNc",
  authDomain: "omega-496fe.firebaseapp.com",
  projectId: "omega-496fe",
  storageBucket: "omega-496fe.appspot.com",
  messagingSenderId: "1062672931438",
  appId: "1:1062672931438:web:b48891e95fce4283f5e47f",
  measurementId: "G-HDHK5TJ24T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}
