import React from "react";
import logo from '../Images/logo.png';


function LeftSide(){
    return(
        <div className="leftSide">
            <img className="logo" src={logo} alt="Logo"></img>
        </div>
    )
}
export default LeftSide;