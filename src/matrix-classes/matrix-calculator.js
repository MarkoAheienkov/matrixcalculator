import { MatrixFactory } from "./matrix-factory.class";
import { Matrix } from "./matrix.class";

export class MatrixCalculator {
  static sum(matrix1, matrix2) {
    if (!matrix1 instanceof Matrix) {
      throw new Error('Not instance of Matrix');
    }

    if (!matrix2 instanceof Matrix) {
      throw new Error('Not instance of Matrix');
    }
    
    const cols1 = matrix1.getColCount();
    const rows1 = matrix1.getRowCount();

    const cols2 = matrix2.getColCount();
    const rows2 = matrix2.getRowCount();

    if (cols1 !== cols2 || rows1 !== rows2) {
      throw new Error('Columns and rows must be align');
    }

    const newMatrix = [];

    for (let row = 0; row < rows1; row++) {
      newMatrix.push([]);
      for (let col = 0; col < cols1; col++) {
        newMatrix[row][col] = matrix1.getElement(row, col) + matrix2.getElement(row, col);
      }
    }

    return MatrixFactory.createMatrix(newMatrix)
  }

  static multiplyByNumber(matrix, number) {
    if (!matrix instanceof Matrix) {
      throw new Error('Not instance of Matrix');
    }

    if (isNaN(number)) {
      throw new Error('Need to provide a number');
    }

    const newMatrix = [];
    const cols = matrix.getColCount();
    const rows = matrix.getRowCount();

    for (let row = 0; row < rows; row++) {
      newMatrix.push([]);
      for (let col = 0; col < cols; col++) {
        newMatrix[row][col] = matrix.getElement(row, col) * number;
      }
    }

    return MatrixFactory.createMatrix(newMatrix);
  }

  static subtract(matrix1, matrix2) {
    if (!matrix1 instanceof Matrix) {
      throw new Error('Not instance of Matrix');
    }

    if (!matrix2 instanceof Matrix) {
      throw new Error('Not instance of Matrix');
    }
    
    const cols1 = matrix1.getColCount();
    const rows1 = matrix1.getRowCount();

    const cols2 = matrix2.getColCount();
    const rows2 = matrix2.getRowCount();

    if (cols1 !== cols2 || rows1 !== rows2) {
      throw new Error('Columns and rows must be align');
    }

    const newMatrix = [];

    for (let row = 0; row < rows1; row++) {
      newMatrix.push([]);
      for (let col = 0; col <  cols2; col++) {
        newMatrix[row][col] = matrix1.getElement(row, col) - matrix2.getElement(row, col);
      }
    }

    return MatrixFactory.createMatrix(newMatrix);
  }

  static multiply(matrix1, matrix2) {
    if (!matrix1 instanceof Matrix) {
      throw new Error('Not instance of Matrix');
    }

    if (!matrix2 instanceof Matrix) {
      throw new Error('Not instance of Matrix');
    }
    
    const cols1 = matrix1.getColCount();
    const rows1 = matrix1.getRowCount();

    const cols2 = matrix2.getColCount();
    const rows2 = matrix2.getRowCount();

    if (cols1 !== rows2) {
      throw new Error('Columns and rows must be align');
    }

    const newMatrix = [];

    for (let row = 0; row < rows1; row++) {
      newMatrix.push([]);
      for (let col = 0; col < cols2; col++) {
        let element = 0;
        for (let i = 0; i < rows2; i++) {
          element += matrix1.getElement(row, i)*matrix2.getElement(i, col);
        }
        newMatrix[row][col] = element;
      }
    }

    return MatrixFactory.createMatrix(newMatrix);
  }
}
