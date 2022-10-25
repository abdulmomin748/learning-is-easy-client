import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"; 
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithGooglePopup = () => {
        return signInWithPopup(auth, provider)
    } 

    const addNameImg = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photourl,
        })
    }   

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }   


    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {user, createUser, signInWithGooglePopup, addNameImg, signIn, logOut};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;