import React, { useEffect, useState } from "react";
import google from '../Images/google.png';
import apple from '../Images/apple.png';
import Login from "./login";
import { auth, provider } from './config.js';
import { signInWithPopup } from 'firebase/auth';

function RightSide({ value, setValue, setSigned,setProfileUrl}) {
    const googleSI = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                const user=data.user;
                const userEmail =user.email;
                const userPhotoURL = user.photoURL;
                setProfileUrl(userPhotoURL); 
                localStorage.setItem('email', userEmail);
                setSigned(true);
            });
    };

    useEffect(() => {
        setValue(localStorage.getItem("email"));
        const storedPhotoURL = localStorage.getItem("photoURL");
    }, []);

    return (
        <div className="rightside">
            {console.log(value)}
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
            <div className="gaIn">
                <div className="google" onClick={googleSI}>
                    <img src={google} alt="Google Logo"/>
                    <p>Sign in with Google</p>
                </div>
                <div className="apple">
                    <img src={apple} alt="Apple Logo" />
                    <p>Sign in with Apple</p>
                </div>
            </div>
            <Login setSigned={setSigned}></Login>
            <div className="register"><span>Don't have an account?</span><span className="reg">Register</span></div>
        </div>
    );
}

export default RightSide;
