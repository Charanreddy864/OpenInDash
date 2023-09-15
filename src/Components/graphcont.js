import React from 'react';
import BarGraph from './bargraph';

function GraphCont(){
    return(
        <div className='graphcont'>
        <h4>Activities</h4>
        <p className='dates'>May-June 2021</p>
        <div className="legend">
            <div className='guest'></div>
            <p>Guest</p>
            <div className='user'></div>
            <p>User</p>
        </div>
        <BarGraph></BarGraph>
        </div>
    )
}
export default GraphCont;