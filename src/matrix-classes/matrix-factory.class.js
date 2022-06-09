import { Matrix } from "./matrix.class";

const constructValidResult = (isValid, message) => {
  return {
    isValid,
    message,
  };
}

const areAllEqual = (array) => {
  return array.every((el) => {
    return el === array[0];
  });
}

export class MatrixFactory {
  static createMatrix(matrix) {
    const { isValid, message } = MatrixFactory._checkMatrix(matrix);

    if (!isValid) {
      throw new Error(message);
    }

    return MatrixFactory._createMatrix(matrix);
  }

  static _checkMatrix(matrix) {
    if (!matrix) {
      return constructValidResult(false, 'Matrix cant be null or undefined');
    }

    if (!matrix instanceof Array) {
      constructValidResult(false, 'Matrix must be an array');
    }

    if (!matrix[0]) {
      constructValidResult(false, 'Matrix cant be empty');
    }

    const columsCount = [];
    for (const row of matrix) {
      if (!row || !row instanceof Array) {
        return constructValidResult(false, 'Matrix rows must be an array');
      }
      columsCount.push(row.length);
    }

    if (!areAllEqual(columsCount)) {
      return constructValidResult(false, 'All rows must have same length');
    }

    return constructValidResult(true);
  }

  static _createMatrix(matrix) {
    const columCount = MatrixFactory._getColumnsCount(matrix);
    const rowCount = MatrixFactory._getRowsCount(matrix);
    return new Matrix(matrix, rowCount, columCount);
  }

  static _getColumnsCount(matrix) {

    return matrix[0].length;
  }

  static _getRowsCount(matrix) {
    return matrix.length;
  }
}
