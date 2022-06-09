import { FIELDS_ID } from "../constants/field.constants";
import { OPERATIONS } from "../constants/matrix.constans";
import { MatrixWorker } from "../worker-classes/matrix_worker.class";

export class OperationProcessor {
  _costructOptions(operation, ...operands) {
    return {
      operation,
      operands: [...operands],
    };
  }

  _onMessage(operation) {
    return (message) => {
      const resultField = document.getElementById(FIELDS_ID[operation].result);
      resultField.value = message;
    };
  }

  _onError(message) {
    console.log(message);
  }

  operate(operation) {
    if (!FIELDS_ID[operation]) {
      throw new Error('No such operation');
    }
    console.log(operation);
    const field1 = document.getElementById(FIELDS_ID[operation].field_1).value;
    const field2 = document.getElementById(FIELDS_ID[operation].field_2).value;
    const options = this._costructOptions(operation, field1, field2);
    MatrixWorker.setupWorker(options, this._onMessage(operation), this._onError);
  }
}
