import React from "react";

function Detail({data}){
    return(
        <div className="detail">
           <div className="iconCont" style={{backgroundColor:data.color}}><i class={data.icon}></i></div>
           <div className="valuescont">
            <div className="amount">
                 <p>{data.name}</p>
                 <h3>{data.value}</h3>
            </div>
            <div className="percent">
                <p>{data.percent}</p>
            </div>
           </div>
        </div>
    )
}
export default Detail;