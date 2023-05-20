import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthPorviders = ({ children }) => {


    const [user, setUser] = useState(null)

    const [loading, setLoding] = useState(true)



    const signUp = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const googlLogin = () => {
        return signInWithPopup(auth, googleProvider)

    }


    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    

    const logOut = () => {
        return signOut(auth)
    }

    const upDateProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoUrl
        })
    }


    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoding(false)
        })
        return () => {
            unsubscribe()
        }

    }, [])


  const authInfo = {
    user,
    signUp,
    LogIn,
    googlLogin,
    githubLogin, 
    logOut,
    upDateProfile,
    loading,
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthPorviders;
