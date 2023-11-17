// Leaderboard.js
import "./Leaderboard.css"
import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from local storage
    const storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Sort the leaderboard entries by level
    const sortedLeaderboard = storedLeaderboard.sort((a, b) => a.level - b.level);

    // Update state with the sorted leaderboard
    setLeaderboard(sortedLeaderboard);
  }, []);

  return (
    <div className="table_container">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Steps</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry) => (
            <tr key={entry.level}>
              <td>{entry.level}</td>
              <td>{entry.steps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
