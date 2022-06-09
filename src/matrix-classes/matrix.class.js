export class Matrix {
  constructor(matrix, rowCount, colCount) {
    this.matrix = matrix;
    this.rowCount = rowCount;
    this.colCount = colCount;
  }

  getElement(row, col) {
    if (!this.matrix[row] || isNaN(this.matrix[row][col])) {
      throw new Error('No such element');
    }
    return this.matrix[row][col];
  }

  getColCount() {
    return this.colCount;
  }

  getRowCount() {
    return this.rowCount;
  }
}
