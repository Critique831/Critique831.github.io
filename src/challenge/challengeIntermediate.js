import React from 'react';

function ChallengeCompletePopup({ onRestart, onHome, steps }) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Congratulations!!!</h2>
        <h3>You had finished in {steps} steps</h3>
        <button className="inter" onClick={onRestart}>Restart</button>
        <button className="inter" onClick={onHome}>Go Home</button>
      </div>
    </div>
  );
}

export default ChallengeCompletePopup;