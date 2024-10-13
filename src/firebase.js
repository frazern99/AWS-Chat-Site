import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: 
    authDomain: "chat-27b79.firebaseapp.com",
    projectId: "chat-27b79",
    storageBucket: "chat-27b79.appspot.com",
    messagingSenderId: "390029485171",
    appId: "1:390029485171:web:c2d1e8908522c6341ab606"
  }).auth();
