import React, { useState } from 'react'
import "./LogIn.css"
import {Link, useHistory} from "react-router-dom"
import { auth } from './firebase';

function LogIn() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch(e=>alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login-logo"
                src="https://www.kindpng.com/picc/b/1/11909.png"/>
            </Link>
            <div className="login-container">
                <div className="login-container-form">
                    <h1>Sign In</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="email"/>
                        <h5>Password</h5>
                        <input value={password} onChange={e=>setPassword(e.target.value)}type="password"/>
                        <button type="submit" onClick={login}>Sign In</button>
                    </form>
                    <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>
                </div>
                <div className="login-container-newuser">
                    <h5>New to Amazon?</h5>
                    <Link to="/register" className="login-link">
                        <button className="login-container-newuser-button">Create you Amazon account</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LogIn
