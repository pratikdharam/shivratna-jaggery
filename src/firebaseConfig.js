// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiXD9Lt01lBKtIwBW-aJ9nPetg5-fpvgU",
  authDomain: "shivratana-jaggery.firebaseapp.com",
  projectId: "shivratana-jaggery",
  storageBucket: "shivratana-jaggery.appspot.com",
  messagingSenderId: "229280424514",
  appId: "1:229280424514:web:c5a965c578c9977a0483db",
  measurementId: "G-TRZ2CHVGGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    