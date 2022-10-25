import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"; 
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithGooglePopup = () => {
        return signInWithPopup(auth, googleProvider)
    } 

    const addNameImg = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photourl,
        })
    }   

    const signInWithGoogle = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }   


    const logOut = () => {
        return signOut(auth)
    }

    const signInWithGithubPopup = () => {
        return signInWithPopup(auth, githubProvider)
    }

    onAuthStateChanged(auth, CurrentUser => {
        // if (user) {
        //   // User is signed in, see docs for a list of available properties
        //   // https://firebase.google.com/docs/reference/js/firebase.User
        //   const uid = user.uid;
        //   // ...
        // } else {
        //   // User is signed out
        //   // ...
        // }
        setUser(CurrentUser)
      });

    const authInfo = {user, createUser, signInWithGooglePopup, addNameImg, signInWithGoogle, signInWithGithubPopup, logOut};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;