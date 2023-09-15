import React from "react";

function SocialDetails({profileIns,setProfileIns}){
    function handleInputChange(event,index){
        const newInput=[...profileIns];
        newInput[index]=event.target.textContent;
        setProfileIns(newInput);
    }
    return(
            <div className='socialdetails'>
            <div className='detailinput insta' >
                <p>Instagram Link</p>
                <div className='inputbox' contentEditable={true} onInput={(event) => handleInputChange(event, 3)} style={{padding: '10px'}}></div>
            </div>
            <div className='detailinput youtube'>
                <p>YouTube Link</p>
                <div className='inputbox' contentEditable={true} onInput={(event) => handleInputChange(event, 4)} style={{padding: '10px'}}></div>
            </div>
        </div>
    )
}

export default SocialDetails;