import React, {useContext, useRef, useState} from 'react';
import { UserContext } from '../context/UseContext';
import { useNavigate } from 'react-router-dom';

function SignUpModal(props) {

    const { modalState, toggleModal, signUp} =useContext(UserContext);

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
        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6 ){
            setValidation("6 charaters min")
            return;
        }

        else if(inputs.current[1].value !== inputs.current[2].value){
            setValidation("Password do not match")
            return;
        }
        try{
           const cred = await signUp(
            inputs.current[0].value,
            inputs.current[1].value
           )
           formRef.current.reset();
           setValidation("");
        //    console.log(cred)
        toggleModal("close")
        navigate("/private/private-home")  
        }catch (err){
           if(err.code === "auth/invalid-email"){
            setValidation("Email format invalid")
           }
           if(err.code === "auth/email-already-in-use"){
            setValidation("Email already used")
           }
           
        }
    }

    const closeModal = () =>{
        setValidation()
        toggleModal("close")
    }

    return (
        <>
        { modalState.SignUpModal && ( 
          <div className='position-fixed top-0 vw-100 vh100'> 
            <div className="w-100 h-100 bg-opacity-75" onClick={() =>toggleModal("close")}>
                </div>
                <div className="position-absolute top-50 start-50 translate-middle" style={{minWidth: "400px"}}>

                </div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="model-title"> Sign Up</h5>
                            <button className='btn-close' onClick={() =>toggleModal("close")}></button>
                        </div>
                        <div className='modal-body'>
                            <form ref={formRef } onSubmit={handleForm} className='sign-up-form'>
                                <div className='mb-3'>
                                    <label htmlFor="signUpEmail" className='form-label'>Email Adress</label>
                                    <input type="email" name="email" ref={addInpt} className='form-control' id="signUpEmail" required/>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="signUpPassword" className='form-label'>Password</label>
                                    <input type="password" name="password" ref={addInpt} className='form-control' id="signUpPassword" required/>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="signUpRPassword" className='form-label'>Repeat Password</label>
                                    <input type="password" name="Rpassword" ref={addInpt} className='form-control' id="signUpRPassword" required/>
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

export default SignUpModal;