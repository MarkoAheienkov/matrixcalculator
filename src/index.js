import './index.css';
import { OperationProcessor } from './operation-classes/operation.processor';

document.body.addEventListener('click', (event) => {
  const operation = event.target.dataset.operation;
  if (!operation) {
    return;
  }
  const operationProcessor = new OperationProcessor();
  try {
    operationProcessor.operate(operation);
  } catch (err) {
    console.log(err);
    alert('PROBLEM OCCURES DURING CALCULATION');
  }
});
