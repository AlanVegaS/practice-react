// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVMZlwB2jaBja9K3vPhKsYx_LFciH6LXU",
  authDomain: "journal-app-6edd4.firebaseapp.com",
  projectId: "journal-app-6edd4",
  storageBucket: "journal-app-6edd4.appspot.com",
  messagingSenderId: "660807652149",
  appId: "1:660807652149:web:bbbbda889d4da0da42727c",
  measurementId: "G-VVF76S34CF"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FireBaseApp);
export const FireBaseAuth = getAuth(FireBaseApp)
export const FireBaseDB = getFirestore(FireBaseApp)
