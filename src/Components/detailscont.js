import React from 'react';
import Detail from './details';
import Data from '../data.json';

function Details(){
    return(
        <div className="detailscont">
        <Detail data={Data[0]}></Detail>
        <Detail data={Data[1]}></Detail>
        <Detail data={Data[2]}></Detail>
        <Detail data={Data[3]}></Detail>
        </div>
    )
}
export default Details;