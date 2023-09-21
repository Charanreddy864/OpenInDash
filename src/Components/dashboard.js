import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './menu';
import Content from './dashboard-content';

function Dashboard({setPopped,profileAdded,profileIns,profileUrl}){
    const [menuPopped,setMenuPopped]=useState(false);
    return(
        <div className="dashboard">
        <Menu menuPopped={menuPopped}></Menu>
        <Content setPopped={setPopped} profileAdded={profileAdded} profileIns={profileIns} profileUrl={profileUrl} setMenuPopped={setMenuPopped} menuPopped={menuPopped}></Content>
        </div>
    );
}
export default Dashboard;