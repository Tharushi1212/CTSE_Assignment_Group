import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDi65ULTTwVEFc8htEpe91elWTCVhqWhSs",
    authDomain: "ctse-assignment-7b79c.firebaseapp.com",
    projectId: "ctse-assignment-7b79c",
    storageBucket: "ctse-assignment-7b79c.appspot.com",
    messagingSenderId: "371346846039",
    appId: "1:371346846039:web:7177efa09c509747814e12",
    measurementId: "G-24LJHR6CM5"
  };
  
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export { firebase };
const auth = firebase.auth();
export { auth };