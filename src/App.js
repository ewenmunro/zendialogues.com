import React from "react";
import "./App.css";

// firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

import { useAuthState } from "react-firebase-hooks/auth";

// components
import "./components/styles.css";
import Footer from "./components/Footer";
import ChatRoom from "./components/ChatRoom";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STOREAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="Header">
        <h1 className="Title">Zen Dialogues</h1>
        <SignOut />
        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </header>
      <Footer />
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="Sign-In-Btn" onClick={signInWithGoogle}>
        Sign In
      </button>
      <p className="Home-Text">Sign in and ask The Buddha anything!</p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="Sign-Out-Btn" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default App;
