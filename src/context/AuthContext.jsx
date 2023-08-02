import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup  } from "firebase/auth";
import { auth, provider } from "../firebase/config";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        email: null
    })


    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .catch(e => console.log(e))
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .catch(e => console.log(e))
    }
    
    const logout = () => {
        signOut(auth)
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user)=> {
            if(user) {
                setUser({
                    logged: true, 
                    email: user.email
                })
            } else {
                setUser({
                    logged: false,
                    email: null
                })
            }
        })
    }, [])

    return(
        <AuthContext.Provider value={{googleLogin, user, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}