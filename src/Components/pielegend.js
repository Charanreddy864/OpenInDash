import React from "react";

function PieLegend(){
    return(
        <div className="pieLegend">
        <div className="tees">
            <div className="dot"></div>
            <h5>Basic Tees</h5>
            <p>55%</p>
        </div>
        <div className="pants">
            <div className="dot"></div>
            <h5>Custom Short Pants</h5>
            <p>31%</p>
        </div>
        <div className="hoodies">
            <div className="dot"></div>
            <h5>Super Hoodies</h5>
            <p>14%</p>
        </div>
        </div>
    )
}
export default PieLegend;