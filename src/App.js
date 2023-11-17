import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import GamePlay from "./GamePlay";
import StandardGameL1 from "./standard/gameL1";
import StandardGameL2 from "./standard/gameL2";
import StandardGameL3 from "./standard/gameL3";
import StandardGameL4 from "./standard/gameL4";
import StandardGameL5 from "./standard/gameL5";
import ChallengeGame from "./challenge/challenge";
import Leaderboard from "./Leaderboard";
import Level from "./lvlsel";


function App() {
  return (
    <div className="background_container">
      <nav>
        <ul>
          <Link to="/" class="list">
            Home
          </Link>
          <Link to="/GamePlay" class="list">
            GamePlay
          </Link>
          <Link to="/lvlsel" class="list">
            Level
          </Link>
          <Link to="/Leaderboard" class="list">
            Leaderboard
          </Link>

        </ul>
      </nav>

      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GamePlay" element={<GamePlay />} />
        <Route path="/GameL1" element={<StandardGameL1/>} />
        <Route path="/GameL2" element={<StandardGameL2/>} />
        <Route path="/GameL3" element={<StandardGameL3/>} />
        <Route path="/GameL4" element={<StandardGameL4/>} />
        <Route path="/GameL5" element={<StandardGameL5/>} />
        <Route path="/Challenge" element={<ChallengeGame/>}/>
        <Route path="/Leaderboard" element={<Leaderboard/>} />
        <Route path="/lvlsel" element={<Level/>} />
        {/* <Route path="/" element={<Courses />} />
        <Route path="/" element={<Live />} />
        <Route path="/" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;