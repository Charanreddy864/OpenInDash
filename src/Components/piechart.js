import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import{
    Chart,
    ArcElement,
    Tooltip
} from 'chart.js';

Chart.register(
    ArcElement,Tooltip
)

function PieChart(){
    const data={
        labels:['Basic Tees','Custom Short Pants','Super Hoodies'],
        datasets:[{
            data:[55,31,14],
            backgroundColor:['#55efc4','#feca57','#ff7675'],
            borderColor:['#55efc4','#feca57','#ff7675'],
            cutout:90,
            borderWidth:10
        }]
        
    }
    const options={
        plugins:{
            legend:{
                position:"right",
                usePointStyle:true,
                pointStyle:"circle"
            }
        }
    }

    
    return(
        <div className='piechart'>
              <Doughnut
              data={data}
              options={options} 
              ></Doughnut>
        </div>
    )
}
export default PieChart;