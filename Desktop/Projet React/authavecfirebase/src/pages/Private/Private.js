import React, {useContext} from 'react';
import { UserContext } from '../../context/UseContext';
import {Outlet, useLocation, Navigate} from "react-router-dom"

function Private(props) {
    const {currentUser} = useContext(UserContext)
    console.log("PRIVATE", currentUser)
    
    if(!currentUser){
        return <Navigate to="/" />
    }
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default Private;