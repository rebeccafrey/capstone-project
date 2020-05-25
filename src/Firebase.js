import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlQ2BP_RERbl-yDnRS2OtyqOPjwubG_4g",
  authDomain: "seelenleben.firebaseapp.com",
  databaseURL: "https://seelenleben.firebaseio.com",
  projectId: "seelenleben",
  storageBucket: "seelenleben.appspot.com",
  messagingSenderId: "259287707780",
  appId: "1:259287707780:web:9ffa683f781929724552d1",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
