import { SPLIT_SYMBOLS } from "../constants/matrix.constans";
import { MatrixFactory } from "./matrix-factory.class";
import { Matrix } from "./matrix.class";

export class MatrixFormatter {
  static matrixToString(matrix) {
    if (!matrix) {
      throw new Error('Cant be undefined');
    }

    if (!matrix instanceof Matrix ) {
      throw new Error('Must be instance of Matrix');
    }

    const cols = matrix.getColCount();
    const rows = matrix.getRowCount();
    let colStrs = [];

    for (let row = 0; row < rows; row++) {
      let strRow = [];
      for (let col = 0; col < cols; col++) {
        strRow.push(matrix.getElement(row, col));
      }
      colStrs.push(strRow.join(SPLIT_SYMBOLS.COLUMNS));
    }
    
    return colStrs.join(SPLIT_SYMBOLS.ROWS);
  }

  static stringToMatrix(str) {
    if (!str) {
      throw new Error('Cant be empty');
    }

    const newMatrix = str.split(SPLIT_SYMBOLS.ROWS);

    for (let row = 0; row < newMatrix.length; row++) {
      const rowStr = newMatrix[row]
      newMatrix[row] = rowStr.split(SPLIT_SYMBOLS.COLUMNS).map((el) => +el);
    }

    return MatrixFactory.createMatrix(newMatrix);
  }
}
