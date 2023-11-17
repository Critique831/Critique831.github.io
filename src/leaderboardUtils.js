// leaderboardUtils.js

export function updateLeaderboard(level, steps) {
    // Get current leaderboard data from local storage
    const storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
  
    // Find the existing entry for the current level
    const existingEntryIndex = storedLeaderboard.findIndex((entry) => entry.level === level);
  
    // If an existing entry is found and the new steps are shorter, update the entry
    if (existingEntryIndex !== -1 && steps < storedLeaderboard[existingEntryIndex].steps) {
      const updatedLeaderboard = [...storedLeaderboard]; // Create a copy of the current leaderboard
  
      // Update the steps for the existing entry
      updatedLeaderboard[existingEntryIndex] = { level, steps };
  
      // Save the updated leaderboard to local storage
      localStorage.setItem('leaderboard', JSON.stringify(updatedLeaderboard));
    }
    // If no existing entry or the new steps are shorter, add a new entry
    else if (existingEntryIndex === -1) {
      const updatedLeaderboard = [
        ...storedLeaderboard.filter((entry) => entry.level !== level), // Remove existing entries for the current level
        { level, steps }, // Add the new entry
      ];
  
      // Save the updated leaderboard to local storage
      localStorage.setItem('leaderboard', JSON.stringify(updatedLeaderboard));
    }
  }
  