
import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ( {

    apiKey: "",
  
    authDomain: "messonger-a3789.firebaseapp.com",
  
    projectId: "messonger-a3789",
  
    storageBucket: "messonger-a3789.appspot.com",
  
    messagingSenderId: "55464332720",
  
    appId: "1:55464332720:web:cf962b223b5749defa1a75"
  
  }).auth();