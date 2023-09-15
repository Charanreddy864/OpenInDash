import React from "react";
 function TopCont({profileUrl}){
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
        </div>
    )
 }

 export default TopCont;