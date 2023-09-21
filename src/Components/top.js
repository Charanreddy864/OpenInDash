import React from "react";
import TopCont from './topcont';
function Top({profileUrl,setMenuPopped,menuPopped}){
    return(
        <div className="top">
        <h3>Dashboard</h3>
        <TopCont profileUrl={profileUrl} setMenuPopped={setMenuPopped} menuPopped={menuPopped}></TopCont>
        </div>
    )
}
export default Top;