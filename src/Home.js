import React from 'react'
import "./App.css"
import { Link} from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="selection-menu">
        <Link to="/GamePlay" ><button className='menu'>New Game</button></Link>
        <Link to="/lvlsel" ><button className='menu'>Level</button></Link>
        <button className='menu'><Link to="/Leaderboard" >Leaderboard</Link></button>
      </div>
    </div>
  );
}

export default Home
