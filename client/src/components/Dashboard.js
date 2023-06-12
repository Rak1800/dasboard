import React from 'react'
import "./Dashboard.css"
import {BiUserCircle} from "react-icons/bi"


function Dashboard() {
  

  return (
    <div className='dash'>
      <h1>DASHBOARD
      <div className='user'>
       <button>
       <BiUserCircle />
        </button> 
        </div></h1>
        
    </div>
  )
}

export default Dashboard

// const timestamp = Date.now();
 
// // timestamp in milliseconds
// console.log(timestamp);
 
// // timestamp in seconds
// console.log(Math.floor(timestamp/10000000));