import React, {useContext, useRef, useState} from 'react';
import { UserContext } from '../context/UseContext';
import { useNavigate } from 'react-router-dom';

function SignInModal(props) {

    const { modalState, toggleModal, signIn} =useContext(UserContext);

    const navigate = useNavigate();

    const [validation, setValidation] = useState("")
    const inputs = useRef ([])
    const addInpt = el =>{
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el);
        }
    }
    
    const formRef = useRef()
    const handleForm = async (e) =>{
        e.preventDefault()
        console.log( inputs.current[0].value,
            inputs.current[1].value)
        try{
           const cred = await signIn(
            inputs.current[0].value,
            inputs.current[1].value
           )

        //   a tester
        //    formRef.current.reset();
           setValidation("");
        //    console.log(cred)
        toggleModal("close")
        navigate("/private/private-home")  
        }catch{
           setValidation("wopsy, email and/or password incorrect")
        }
    }

    const closeModal = () =>{
        setValidation()
        toggleModal("close")
    }

    return (
        <>
        { modalState.SignInModal && ( 
          <div className='position-fixed top-0 vw-100 vh100'> 
            <div className="w-100 h-100 bg-opacity-75" onClick={() =>toggleModal("close")}>
                </div>
                <div className="position-absolute top-50 start-50 translate-middle" style={{minWidth: "400px"}}>

                </div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="model-title"> Sign In</h5>
                            <button className='btn-close' onClick={() =>toggleModal("close")}></button>
                        </div>
                        <div className='modal-body'>
                            <form ref={formRef } onSubmit={handleForm} className='sign-up-form'>
                                <div className='mb-3'>
                                    <label htmlFor="signInEmail" className='form-label'>Email Adress</label>
                                    <input type="email" name="email" ref={addInpt} className='form-control' id="signInEmail" required/>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="signInPassword" className='form-label'>Password</label>
                                    <input type="password" name="password" ref={addInpt} className='form-control' id="signInPassword" required/>
                                    <p className='text-danger mt-1'>{validation}</p>
                                </div>

                                 <button className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
          </div>
          )}
        </>
    );
}

export default SignInModal;