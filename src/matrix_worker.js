import { OPERATIONS } from "./constants/matrix.constans";
import { MatrixProcessor } from "./matrix-classes/matrix-processor.class";

onmessage = (message) => {
  const { operation, operands } = message.data;
  const matrixProcessor = new MatrixProcessor();
  let result;
  switch (operation) {
    case OPERATIONS.SUM:
      result = matrixProcessor.sum(operands);
      break;
    case OPERATIONS.MULTIPLY:
      result = matrixProcessor.multiply(operands);
      break;
    case OPERATIONS.MULTIPLY_BY:
      result = matrixProcessor.multiplyBy(operands);
      break;
    case OPERATIONS.SUBTRACT:
      result = matrixProcessor.subtract(operands);
      break;
    default:
      throw new Error('No such operation');
  }
  postMessage(result);
}
