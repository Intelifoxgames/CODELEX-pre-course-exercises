export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"] 
  // Game board.
  
 

  getCells(): XO[] {
    return this.cells; 
    // Draws cells from the "cells" instance of Game class.
  }

  getTurn(): XO {
    // const countMinus = this.cells.filter((it) => it === "-").length
    
    const countX = this.cells.filter((it) => it === "X").length
    // Count the amount of "X" in the cells.

    const countO = this.cells.filter((it) => it === "O").length
    // Count the amount of "O" in the cells.

     if(countX === countO) {
       return "X"
      // If "X" count is equal to "O" count, give turn to "X".

      } else {
        return "O"
        }
  }

  getWinner(): XO {

   if(this.areCellsEqual(0, 1, 2)) {
      return this.cells[0]
    // If cell from index 0 to 2 is with the same char... 
    // ...return char of cell[0] as a winner.
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
    return "-"   
    // If conditions are not met, there is no winner 
    // (technically the winner is "-").
  }

  private areCellsEqual(x: number, y: number, z: number) {
    return (this.cells[x] !== "-" && 
    this.cells[x] === this.cells[y] && 
    this.cells[y] === this.cells[z])
  }

  isTie(): boolean {
    if(this.cells
      .every((currentValue) => currentValue !== "-") && this.getWinner() === "-") {
      return true 
      // If there are no empty cells ("-") and there is no winner...
      // It's a tie! (true)
    }
    // 9 cliks, no winner
    return false
  }
    
  onClick(i: number): void { 
    // When user clicks on the field...

    if(this.cells[i] == "-" && this.getWinner() === "-") {
      this.cells[i] = this.getTurn()
      // If clicked cell is empty ("-") and there is no winner...
      // The cell if filled with the correct sign from getTurn().
    }
  }

  restart(): void {
    this.cells.fill("-", 0, 9) 
    // The button "Play Again" fills cells from 0 to 9 with "-".
  }
}
