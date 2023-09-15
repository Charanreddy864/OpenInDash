import React,{useState} from "react";
import LeftSide from "./leftside";
import RightSide from "./rightside";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from "./dashboard";
import github from '../Images/github.png';
import twitter from '../Images/twitter.png';
import linkedin from '../Images/linkedin.png';
import discord from '../Images/discord.png';
function LoginPage({setSigned,setProfileUrl}){
    const [value,setValue]=useState(null)
    return(
        <div className="loginpage">
            <LeftSide></LeftSide>
            <div className="media">
            <div className="github">
            <img src={github} alt="Github"></img>
            </div>
            <div className="twitter">
            <img src={twitter} alt="Twitter"></img>
            </div>
            <div className="linkedin">
            <img src={linkedin} alt="LinkedIn"></img>
            </div>
            <div className="discord">
            <img src={discord} alt="Discord"></img>
            </div>
            </div>
            <RightSide value={value} setValue={setValue} setSigned={setSigned} setProfileUrl={setProfileUrl}></RightSide>
            {routeSwitch(value)}
        </div>
    )
    function routeSwitch(value){
        <Router>
          { (value!==null)? "" :<Route exact path={Dashboard} component={Dashboard} />}  
        </Router>
    }
}

export default LoginPage;