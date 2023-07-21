import React from "react";
import {createContext, useState, useEffect} from "react"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase-config"

export const UserContext = createContext()
export function UserContextProvider(props){

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }


    const[currentUser, setCurrentUser] = useState()
    const[loadingData, setLoadingData] = useState(true)
    console.log("MAJ", currentUser)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)  =>{
            setCurrentUser(currentUser)
            setLoadingData(false)
        }) 

        return unsubscribe;
    }, [])


    // -------------la partie modal---------------
    const [modalState, setModalState] = useState({
        SignUpModal : false,
        SignInModal : false
    })

    const toggleModal = modal =>{
        if(modal === 'signIn'){
            setModalState({
                SignUpModal : false,
                SignInModal : true
                })
        }

        if(modal === 'signUp'){
            setModalState({
                SignUpModal : true,
                SignInModal : false
                })
        }

        if(modal === 'close'){
            setModalState({
                SignUpModal : false,
                SignInModal : false
                })
        }
    }

    return(
        <UserContext.Provider value={{modalState, toggleModal, signUp, currentUser, signIn}}>
             {!loadingData && props.children}
        </UserContext.Provider>
    )
}