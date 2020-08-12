/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {
  constructor(private matrix: string) {
    this.matrix = matrix;
    // Assigns constructor's property to this instance of the class.
  }

  // !!! Input - string, output - number !!!

  get rows() {
    return this.matrix
      .split('\n') 
      // Splits the all matrix tests at the "\n" (according to test).
      // Return in new aray without "\n".
      
      .map(row => row.split(' ')
      // Splits again each string in array by space.
      .map(str => parseInt(str))) 
      // Then turn each string into a number.
  }

  get columns() {
    return this.rows[0] 
    // Get first elements of a row...
    
    .map((j, i) => this.rows.map(row => row[i])) 
    // Map each column with a row, moving from left to right.
  }
}

export { Matrix };
