import React, { useState } from 'react';
import BasicDetails from './basicDetails';
import SocialDetails from './socialdetails';

function PopProfile({popped,setPopped,setProfileAdded,profileIns,setProfileIns}){

    const [basicDetails,setInDetails] = useState(true);
    function handleNext(){
        setInDetails(false);
    }
    function handleDone(){
        setPopped(false);
        setProfileAdded(true);
    }
    return(
        <div className={`${popped? 'popscreen':''}`}>
        <div className= {`profiledetails ${popped? 'popped':''}`}>
        <div className='first'>
        <h3>Add Profile</h3>
        <i class="fa-solid fa-xmark" onClick={()=>setPopped(false)}></i>
        </div>
        <div className='second'>
            <h5>Basic</h5>
            <h5>Social</h5>
        </div>
        <div className='bars'>
            <div className={`basicbar ${basicDetails? 'barActive':''}`}></div>
            <div className={`socialbar ${basicDetails? '':'barActive'}`}></div>
        </div>
        <div className='detailsIn'>
           {basicDetails? <BasicDetails profileIns={profileIns} setProfileIns={setProfileIns}/>:<SocialDetails profileIns={profileIns} setProfileIns={setProfileIns}/>}
        </div>
        {basicDetails?
        <div className='last'>
            <div className='next btn' onClick={handleNext}>Next</div>
        </div>
        :
        <div className='last'>
            <div className='back btn' onClick={()=>setInDetails(true)}>Back</div>
            <div className='done btn' onClick={handleDone}>Done</div>

        </div>
        }
        </div>
        </div>
    )
}

export default PopProfile;