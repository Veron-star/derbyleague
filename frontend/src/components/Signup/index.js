import React from 'react';
import useForm from "./useForm";
import validate from "./validationInfo";
import "./Form.css";


const SignUp = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(validate, submitForm);
    return (
        <div className="form-content-right">
            <form className="form" onClick={handleSubmit} noValidate>
                <h1>Create An Account</h1>
                <div className="form-inputs">
                    <label className="form-label">USERNAME</label>
                        <input id="username" type="text" name="usename" className="form-input" placeholder="Enter your usename" value={values.username} onChange={handleChange}/>
                        {errors.username && <p>{errors.username}</p>}    
                </div>
                <div className="form-inputs">
                    <label className="form-label">EMAIL</label>
                        <input id="email" type="email" name="email" className="form-input" placeholder="Enter your email" value={values.email} onChange={handleChange}/>
                        {errors.email && <p>{errors.email}</p>}       
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">PASSWORD</label>
                        <input id="password" type="password" name="password" className="form-input" placeholder="Enter your password" value={values.password} onChange={handleChange}/>
                        {errors.password && <p>{errors.password}</p>}       
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">CONFIRM PASSWORD</label>
                        <input id="password2" type="password2" name="password2" className="form-input" placeholder="Confirm your password" value={values.password2} onChange={handleChange}/>
                        {errors.password2 && <p>{errors.password2}</p>}       
                </div>
                <button className="form-input-btn" type="submit">SUBMIT</button>
                <span className="form-input-login">Already have an account? Login <a href="signin">here</a></span>
            </form>
        </div>
    )
}

export default SignUp;
