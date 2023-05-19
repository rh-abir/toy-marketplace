import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

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
    logOut,
    upDateProfile,
    loading,
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthPorviders;
