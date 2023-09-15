import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart,LinearScale,CategoryScale,BarElement} from 'chart.js';
Chart.register(
    LinearScale,CategoryScale,BarElement
    )

const labels=['Week1','Week2','Week3','Week4'];
const data={
    labels,
    datasets:[
        {
            label:'User',
            data:[500,430,350,400],
            backgroundColor:'#55efc4',
            borderSkipped:false,
            borderRadius:3,

        },
        {
            label:'Guest',
            data:[470,400,390,350],
            backgroundColor:'#ff7675',
            borderSkipped:false,
            borderRadius:3,

        }
    ]
}
const options={
    scales:{
        x:{
            grid:{
                display:false,
            },
            barPercentage: 0.6, 
            categoryPercentage: 0.8
        }
    }
}

function BarGraph(){

    return(
        <div className='graph'>
        <Bar
        data={data}
        options={options}
        />
        </div>
    )
}
export default BarGraph;