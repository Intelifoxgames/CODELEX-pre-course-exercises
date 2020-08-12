/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, 
 * one of the highest selling and addictive games of all time, 
 * and a classic of the arcade era. Your task is to write methods that return the highest score from the list, 
 * the last added score and the three highest scores.
 */

class HighScores {
  scores: number[]
  constructor(scores: number[]) {
    this.scores = scores
    // Asign the the construtor parameters to this instance of class.
  }

  get latest() {
    return this.scores[this.scores.length - 1] 
    // Returns the latest score from array 
    // (-1 because .length returns a number higher by one).
  }

  get personalBest() {
    return Math.max(...this.scores) 
    // Spread the score array.
    // Returns highest number from whole array elements.
  }

  get personalTopThree() {
    return this.scores.sort((a,b) => b - a).slice(0, 3) 
    // Sort numbers from largest to smallest.
    // Then returns from the array in the new array first three numbers.
  }
}

export { HighScores };
