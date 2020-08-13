import React, { useState } from 'react'
import "./Register.css"
import {Link, useHistory} from "react-router-dom"
import { auth } from './firebase';

function Register() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("")
    const register = e =>{
        e.preventDefault();
        if(password===repassword){
            auth.createUserWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/');
            })
            .catch(e=>alert(e.message))
        }else{
            alert("Your password Does not Match!! try again")
        }
        
    }
    return (
        <div className="register">
            <Link to="/">
                <img className="register-logo"
                src="https://www.kindpng.com/picc/b/1/11909.png"/>
            </Link>
            <div className="register-container">
                <div className="register-container-form">
                    <h1>Create Account</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="email"/>
                        <h5>Password</h5>
                        <input value={password} onChange={e=>setPassword(e.target.value)}type="password"/>
                        <div class="register-alert-content">Passwords must be at least 6 characters.</div>
                        <h5>Re-enter Password</h5>
                        <input value={repassword} onChange={e=>setRepassword(e.target.value)}type="password"/>
                        <button type="submit" onClick={register}>Create you Amazon account</button>
                    </form>
                    <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>
                    <div className="register-login">
                    <p>Already have an account?</p><Link className="register-link" to="/login">Sign In</Link>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Register
