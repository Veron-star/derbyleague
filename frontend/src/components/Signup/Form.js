import React, { useState } from 'react';
import SignUp from "./index";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
            <div className='form-content-left'>
                <img className='form-img' src='images/signup.svg' alt='mail' />
        </div>
        {!isSubmitted ? (<SignUp submitForm={submitForm} />) : (<FormSuccess />)}
      </div>
    </>
    )
}

export default Form;
