import React, {useContext} from 'react';
import { UserContext } from '../context/UseContext';
import { Link } from "react-router-dom"
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';


function Navbar() {

    const {toggleModal} = useContext(UserContext)
    const navigate = useNavigate()

    const logOut = async () =>{
        try{
          await signOut(auth)
          navigate('/')
        }catch{
          alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
        }
    }

    return (
            <nav className="navbar navbar-light bg-light px-4">
                 <Link to="/" className='navbar-brand'>AuthJS</Link>
                 <div>
                    <button className="btn btn-primary" onClick={() => toggleModal("signUp")}>Sign Up</button>
                    <button className="btn btn-primary ms-2" onClick={() => toggleModal("signIn")}>Sign in</button>
                    <button className="btn btn-danger ms-2" onClick={logOut}>Log Out</button>
                 </div>
            </nav>
    );
}

export default Navbar;