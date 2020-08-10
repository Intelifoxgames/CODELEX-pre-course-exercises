export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"] // Game board.

 

  getCells(): XO[] {
    return this.cells; // Draws cells.
  }

  getTurn(): XO {
    const countX = this.cells.filter(it => it === "X").length
    const countO = this.cells.filter(it => it === "O").length
    return countX === countO ? "X" : "O"; // Gets current turn, "X" or "O".
  }

  getWinner(): XO {
   if(this.areCellsEqual(0, 1, 2)) {
      return this.cells[0]
  
    // If cell from index 0 to 2 is with the same char... 
    // ...return char of cell[0].
    }

    if(this.areCellsEqual(3, 4, 5)) {
      return this.cells[3]
    }
  
    if(this.areCellsEqual(6, 7, 8)) {
      return this.cells[6]
    }

    if(this.areCellsEqual(0, 3, 6)) {
      return this.cells[0]
    }
    
    if(this.areCellsEqual(1, 4, 7)) {
      return this.cells[1]
    }
    
    if(this.areCellsEqual(2, 5, 8)) {
      return this.cells[2]
    }
    
    if(this.areCellsEqual(0, 4, 8)) {
      return this.cells[0]
    }
    
    if(this.areCellsEqual(2, 4, 6)) {
      return this.cells[2]
    }
    return "-"   // If conditions are not met, there is no winner.
  }

  private areCellsEqual(x: number, y: number, z: number) {
    return this.cells[x] !== "-" && this.cells[y] && this.cells[y] === this.cells[z]
  }

  isTie(): boolean {
    // If thre are no fields with "-"
    // And no winner
    // 9 cliks, no winner
    return false
  }
    
  onClick(i: number): void { // When user clicks on the field...
    if(this.cells[i] !== "-") {
      return
    }
    this.cells[i] = this.getTurn()
  }

  restart(): void {
    this.cells.fill("-", 0, 9) // On "Play Again" fills cells with "-".
    
  }
}
