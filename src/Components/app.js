import { useState } from 'react';
import React from "react";
import Dashboard from './dashboard.js';
import LoginPage from './loginpage.js';
import PopProfile from './profilepop.js';

function App(){
    const [popped,setPopped] = useState(false);
    const [signed,setSigned] = useState(false);
    const [profileAdded,setProfileAdded]=useState(false);
    const [profileIns,setProfileIns]=useState(['','','','','']);
    const [profileUrl,setProfileUrl]=useState('');


    return(
        <div className='app'>
        {signed?<Dashboard setPopped={setPopped} profileAdded={profileAdded} profileIns={profileIns} profileUrl={profileUrl}/>:<LoginPage setSigned={setSigned} setProfileUrl={setProfileUrl}/>}
        <PopProfile popped={popped} setPopped={setPopped} setProfileAdded={setProfileAdded} profileIns={profileIns} setProfileIns={setProfileIns}/>
        </div>
    )

}
export default App;