import React from "react";
import Top from './top';
import Details from "./detailscont";
import GraphCont from './graphcont';
import BottomCont from "./bottomcont";
function DashboardContent({setPopped,profileAdded,profileIns,profileUrl,setMenuPopped,menuPopped}){
    return(
        <div className="dashCont">
            <Top profileUrl={profileUrl} setMenuPopped={setMenuPopped} menuPopped ={menuPopped}></Top>
            <Details></Details>
            <GraphCont></GraphCont>
            <BottomCont setPopped={setPopped} profileAdded={profileAdded} profileIns={profileIns}></BottomCont>
        </div>
    )
}
export default DashboardContent;