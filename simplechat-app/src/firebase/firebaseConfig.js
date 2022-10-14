import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr27oMkCH3beCH-5DFSj2zPWzXMrAdYHk",
  authDomain: "simplechatreact-81805.firebaseapp.com",
  projectId: "simplechatreact-81805",
  storageBucket: "simplechatreact-81805.appspot.com",
  messagingSenderId: "209612991074",
  appId: "1:209612991074:web:a96fabef7eb515ea447f3b",
  measurementId: "G-0F9WCGS59R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ------------------------------------ Authentication Handlers ------------------------------------
// Google Auth
const provider = new GoogleAuthProvider();

const GoogleAuthHandler = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    })
}

// Sign out
const signOutHandler = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("Sign-out successful.");
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
}


export { db, auth, GoogleAuthHandler, signOutHandler };