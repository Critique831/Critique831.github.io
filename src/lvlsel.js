//lvlsel.js

import React from 'react';
import { Link } from 'react-router-dom';
import './lvlsel.css';

const Level = () => {
  return (
    <div className="level-select-container">
      <h1>Select Game Level</h1>
      <div className="level-buttons">
            <Link to="/GameL1" ><button className='menu'>Standard Mode 1</button></Link>
            <Link to="/GameL2" ><button className='menu'>Standard Mode 2</button></Link>
            <Link to="/GameL3" ><button className='menu'>Standard Mode 3</button></Link>
            <Link to="/GameL4" ><button className='menu'>Standard Mode 4</button></Link>
            <Link to="/GameL5" ><button className='menu'>Standard Mode 5</button></Link>
      </div>
    </div>
  );
};

export default Level;
