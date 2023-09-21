import React from 'react';
import PieChart from './piechart';
import AddProfile from './addprofile';
import PieLegend from './pielegend';
function BottomCont({setPopped,profileAdded,profileIns}){
    return(
        <div className='bottomcont'>
            <div className='piecont'>
              <h4>Top Products</h4>
              <p>May-June 2021</p>       
              <PieChart></PieChart>
              <PieLegend></PieLegend>        
            </div>
            <AddProfile setPopped={setPopped} profileAdded={profileAdded} profileIns={profileIns}></AddProfile>
            
            
        </div>
    )
}
export default BottomCont;