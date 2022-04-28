import React from 'react';
import {Bar} from 'react-chartjs-2';


const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {label: 'No. of travel bookings',
    data: [10,13,9.8,10,11,9,8,11,10,11,12,9],
    backgroundColor:"#1F78B4"
    },
    {
      label: 'No. of requested claims',
      data: [5,7,3,3,7,9,8,11,9,10,11,12],
      backgroundColor:"#73E9CC"
    }
],

};
const options = {
  responsive:true,
  legend: {
    display: false
},
  tooltips: {
    backgroundColor:"#fff",
    titleFontColor:"#000000",
    bodyFontColor:"#000000"
  },
  scales: {
    xAxes: [{
        gridLines: {
          drawOnChartArea: false
        },
        ticks: {
          beginAtZero: true,
      }
    }],
    yAxes: [{
        gridLines: {
          drawOnChartArea: false
        },
        display:false,   
    }]
}
}

export default () => ({
  displayName: 'No of Booking',
  render() {
    return (
      <div>
        <Bar
          data={data}
          width={850}
          height={334}       
          options={options}
        />
      </div>
    );
  }
});