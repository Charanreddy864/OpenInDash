import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart,LinearScale,CategoryScale,BarElement} from 'chart.js';
Chart.register(
    LinearScale,CategoryScale,BarElement
    )

const labels=['Week1','Week2','Week3','Week4'];
const getRandomNumber = () => Math.floor(Math.random() * (400 + 1)) + 100;
const array1 = Array.from({ length: 5 }, () => getRandomNumber(100, 500));
const array2 = Array.from({ length: 5 }, () => getRandomNumber(100, 500));
const data={
    labels,
    datasets:[
        {
            label:'User',
            data:array1,
            backgroundColor:'#55efc4',
            borderSkipped:false,
            borderRadius:10,
            borderColor: "rgb(0,0,0,0)",
            barPercentage:0.8,
            categoryPercentage:0.4,


        },
        {
            label:'Guest',
            data:array2,
            backgroundColor:'#ff7675',
            borderSkipped:false,
            borderRadius:10,
            borderColor: "rgb(0,0,0,0)",
            barPercentage:0.8,
            categoryPercentage:0.4,






        }
    ]
}
const options={
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
    },
    responsive: true,
    maintainAspectRatio: false,
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