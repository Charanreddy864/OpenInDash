import React from 'react';
function BasicDetails({profileIns,setProfileIns}){
    function handleInputChange(event, index){
            const newInput=[...profileIns];
            newInput[index]=event.target.textContent;
            setProfileIns(newInput);
            console.log(profileIns);
    }
    return(
        <div className='basicdetails'>
            <div className='detailinput nameIn'>
                <p>Enter Name*</p>
                <div className='inputbox' contentEditable={true} onInput={(event) => handleInputChange(event, 0)} style={{padding: '10px'}}></div>
            </div>
            <div className='detailinput emailIn'>
                <p>Enter Email*</p>
                <div className='inputbox' contentEditable={true} onInput={(event) => handleInputChange(event, 1)} style={{padding: '10px'}}></div>
            </div>
            <div className='detailinput phoneIn'>
                <p>Enter Phone*</p>
                <div className='inputbox' contentEditable={true} onInput={(event) => handleInputChange(event, 2)} style={{padding: '10px'}}></div>
            </div>
        </div>
    )
}
export default BasicDetails;