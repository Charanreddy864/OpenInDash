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
        <Content setPopped={setPopped} profileAdded={profileAdded} profileIns={profileIns} profileUrl={profileUrl}></Content>
        <div className='navbaricon' onClick={()=>setMenuPopped(!menuPopped)}><i class={`${menuPopped? 'fa-solid fa-xmark':'fa-solid fa-bars'}`}></i></div>
        </div>
    );
}
export default Dashboard;