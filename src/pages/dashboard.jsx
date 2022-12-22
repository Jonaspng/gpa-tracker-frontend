import React, {useState, useEffect}from "react";
import { Line } from 'react-chartjs-2';
import Navbar2 from "../components/navbar2.jsx";

function Dashboard(){

  const [label,setLabel]=useState();
  const [GPA,setGPA]=useState();

  useEffect(() => {
    fetch("https://gpa-tracker-backend.up.railway.app/api/label",{ withCredentials: true,credentials: 'include'})
      .then((res) => res.json())
      .then((label) => {
        setLabel(label.Label);
      })
  }, []);

  useEffect(() => {
    fetch("https://gpa-tracker-backend.up.railway.app/api/gpa",{ withCredentials: true,credentials: 'include'})
      .then((res) => res.json())
      .then((GPA) => {
        setGPA(GPA.GPA);
      })
  }, []);

  var data = {
      labels: label,
      datasets: [
          {
            label: 'My GPA',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderColor: 'rgb(75, 192,0)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: GPA
          }
        ]
      };
    
    return(
        <div className="dashboard">
            <Navbar2
              brand="/"
              item1="Home"
              link1="/"
              item2="Profile"
              link2="/profile"
            />
            <div className="line-chart">
              <Line data={data}/>
            </div>
        </div>
       
    );
}


export default Dashboard;