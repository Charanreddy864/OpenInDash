import React from "react";
function Login({setSigned}){
    return(
        <div className="loginbox">
            <div className="mailT">Email Address</div>
            <div className="mail input" contentEditable={true} style={{padding: '10px'}}></div>
            <div className="passT">Password</div>
            <div className="password input" contentEditable={true} style={{padding: '10px'}}></div>
            <div className="forgot">Forgot Password?</div>
            <div className="signin" onClick={()=>setSigned(true)}><h4>Sign In</h4></div>

        </div>
    )
}
export default Login;