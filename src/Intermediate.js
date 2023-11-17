import React from 'react';

function LevelCompletePopup({ onProceed, onRestart, onHome }) {
  if(onProceed === null){
    return (
      <div className="popup-container">
        <div className="popup-content">
          <h2>Congratulations! You had finished all levels!</h2>
          <button className="inter" onClick={onRestart}>Restart Level</button>
          <button className="inter" onClick={onHome}>Go Home</button>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="popup-container">
        <div className="popup-content">
          <h2>Level Completed!</h2>
          <button className="inter" onClick={onProceed}>Proceed to Next Level</button>
          <button className="inter" onClick={onRestart}>Restart Level</button>
          <button className="inter" onClick={onHome}>Go Home</button>
        </div>
      </div>
    );
  }
}

export default LevelCompletePopup;
