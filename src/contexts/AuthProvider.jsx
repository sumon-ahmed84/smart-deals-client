import React, { useEffect, useState } from 'react';
import { AuthContexts } from './AuthContexts';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(true);
    const createUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const signInUser=(email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInwithGoogle=()=>{
        setloading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser=()=>{
        setloading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
            setuser(currentuser);
            setloading(false);
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authinfo={
        createUser,
        signInUser,
        signInwithGoogle,
        signOutUser
        ,
        user,
        loading,
    }
    return (
        <AuthContexts value={authinfo}>
            {children}
        </AuthContexts>
    );
};

export default AuthProvider;