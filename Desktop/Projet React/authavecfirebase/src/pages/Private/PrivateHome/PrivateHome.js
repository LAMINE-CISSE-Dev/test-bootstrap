import React from 'react';
import chat from "./chat.gif"

function PrivateHome(props) {
    return (
        <div className='container p-5'>
            <h1 className='display-3 text-light mb-4'>Home Sweet Private Home</h1>
            <img src={chat} />
        </div>
    );
}

export default PrivateHome;