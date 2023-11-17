import React from 'react'
import "./App.css"
import { Link } from "react-router-dom";

function GamePlay() {
  return (
    <div className="HEADING">
        <h1>Please choose your Game Mode</h1>
        <div className="game-menu">
            <Link to="/gameL1" ><button className='menu'>Standard Mode</button></Link>
            <Link to="/Challenge" ><button className='menu'>Challenge Mode</button></Link>
        </div>


    </div> 
  )
}

export default GamePlay