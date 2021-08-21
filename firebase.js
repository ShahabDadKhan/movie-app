import firebase from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCwFByFYB1uXpCf-kosiIpHH1atO_jdgDU",
  authDomain: "movie-app-5e490.firebaseapp.com",
  projectId: "movie-app-5e490",
  storageBucket: "movie-app-5e490.appspot.com",
  messagingSenderId: "638488702101",
  appId: "1:638488702101:web:e68d1a15369f6d2e9bff9c",
  measurementId: "G-G09WJ6H1ZS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
