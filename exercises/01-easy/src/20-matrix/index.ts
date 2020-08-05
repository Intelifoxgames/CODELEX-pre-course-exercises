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
  }

  get rows() {
    return this.matrix
      .split('\n') // Splits the matrix at the "\n".
      .map(r => r.split(' ').map(v => parseInt(v))) // Then splits each char and then parse to a number.
  }

  get columns() {
    return this.rows[0] // First elements of a row
    .map((j,i) => this.rows.map(r => r[i])) // Map each row with an index.
  }
}

export { Matrix };
