import React from "react";
import TopCont from './topcont';
function Top({profileUrl}){
    return(
        <div className="top">
        <h3>Dashboard</h3>
        <TopCont profileUrl={profileUrl}></TopCont>
        </div>
    )
}
export default Top;