import React from "react";
import  Options from './options';
import Help from './help';

function menu({menuPopped}){
    return(
        <div className={`${menuPopped? 'menu showmenu':'menu'}`}>
            <h1>Board.</h1>
            <div className="menu-content">
            <Options></Options>
            <Help></Help>
            </div>
            
        </div>
    )
}

export default menu;