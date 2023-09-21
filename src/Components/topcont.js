import React from "react";
 function TopCont({profileUrl,menuPopped,setMenuPopped}){
    const profilePicUrl=`data:image/jpeg;base64,${profileUrl}`;
    return(
        <div className="topcont">
        <div className="search">
        <p>Search...</p>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <span className="material-icons">notifications</span>
        {profileUrl?<img className='dp' src={profileUrl}/> :
        <span className="material-icons">person</span>
        }
        <div className='navbaricon' onClick={()=>setMenuPopped(!menuPopped)}><i class={`${menuPopped? 'fa-solid fa-xmark':'fa-solid fa-bars'}`}></i></div>
        </div>
    )
 }

 export default TopCont;