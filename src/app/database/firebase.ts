import { getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDP0TGXSYy0lJhiWw0KdcIMkysgaRu0SrI",
  authDomain: "broncohacks-cb341.firebaseapp.com",
  projectId: "broncohacks-cb341",
  storageBucket: "broncohacks-cb341.appspot.com",
  messagingSenderId: "799549162892",
  appId: "1:799549162892:web:ef804d0c6fbde3d1da42a9",
  measurementId: "G-0N1B34WE7X"
};



const initializeFirebase = () => {
    if (getApps().length === 0) {
        console.log("Firebase has been initialized");
        return initializeApp(firebaseConfig);
    }
    return getApps()[0];
}

const firebaseApp = initializeFirebase();
export const db = getFirestore(firebaseApp);


