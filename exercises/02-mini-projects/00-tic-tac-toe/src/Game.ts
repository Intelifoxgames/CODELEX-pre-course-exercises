export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"] // Game board.
  turn: XO = "X" // First turn in new Game draws "X"

  getCells(): XO[] {
    return this.cells; // 
  }

  getTurn(): XO {
    return this.turn; // Gets current turn, "X" or "O".
  }

  getWinner(): XO {
    if(this.areCellsEqual(0, 1, 2)) return this.cells[0]; 
    // If cell from index 0 to 2 is with the same char... 
    // ...return char of cell[0].
    
    if(this.areCellsEqual(3, 4, 5)) return this.cells[3];
  
    if(this.areCellsEqual(6, 7, 8)) return this.cells[6]; 

    if(this.areCellsEqual(0, 3, 6)) return this.cells[0]; 
    
    if(this.areCellsEqual(1, 4, 7)) return this.cells[1]; 
    
    if(this.areCellsEqual(2, 5, 8)) return this.cells[2]; 
    
    if(this.areCellsEqual(0, 4, 8)) return this.cells[0]; 
    
    if(this.areCellsEqual(2, 4, 6)) return this.cells[2]; 

    return "-"   
  }

  private areCellsEqual(x: number, y: number, z: number) {
    return this.cells[x] === this.cells[y] && this.cells[y] === this.cells[z]
  }

  isTie(): boolean {
    return false;
  }

  onClick(i: number): void { // When user clicks on the field...
    

    if(this.cells[i] === "-" && this.getWinner() === "-") { // If the cell is empty and the game has no winner ...

      this.cells[i] = this.getTurn() // In "this.cells[i]" the current value of "this.turn" is drawn.
    
      if(this.turn === "X") { // If current value of "this.turn" is "X"...
        this.turn = "O" // ...method changes it to "O", and sends it to "getTurn()".
      } else {
        this.turn = "X" // If the value is other ("O"), "this.turn" value changes back to "X".
      }

    }
    

  }

  restart(): void {
    this.cells.fill("-", 0, 9) // On "Play Again" fills cells with "-".
    this.turn = "X"
  }
}
