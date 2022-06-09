import { MatrixFormatter } from "./matrix-formatter";
import { MatrixCalculator } from './matrix-calculator';

export class MatrixProcessor {
  sum(operands) {
    const matrix1 = MatrixFormatter.stringToMatrix(operands[0]);
    const matrix2 = MatrixFormatter.stringToMatrix(operands[1]);
    const result = MatrixCalculator.sum(matrix1, matrix2);
    return MatrixFormatter.matrixToString(result);
  }

  subtract(operands) {
    const matrix1 = MatrixFormatter.stringToMatrix(operands[0]);
    const matrix2 = MatrixFormatter.stringToMatrix(operands[1]);
    const result = MatrixCalculator.subtract(matrix1, matrix2);
    return MatrixFormatter.matrixToString(result);
  }

  multiply(operands) {
    const matrix1 = MatrixFormatter.stringToMatrix(operands[0]);
    const matrix2 = MatrixFormatter.stringToMatrix(operands[1]);
    const result = MatrixCalculator.multiply(matrix1, matrix2);
    return MatrixFormatter.matrixToString(result);
  }

  multiplyBy(operands) {
    const matrix = MatrixFormatter.stringToMatrix(operands[0]);
    const number = +operands[1];
    const result = MatrixCalculator.multiplyByNumber(matrix, number);
    return MatrixFormatter.matrixToString(result);
  }
}
