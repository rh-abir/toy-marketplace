import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthPorviders = ({ children }) => {

    const [loading, setLoding] = useState(false)



    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const upDateProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoUrl
        })
    }

  const authInfo = {
    signUp,
    LogIn, 
    upDateProfile,
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthPorviders;
