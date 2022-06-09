import { MATRIX_WORKER } from "../constants/worker.constants";

export class MatrixWorker {
  static setupWorker(options, onMessage, onError) {
    const worker = new Worker(MATRIX_WORKER);

    worker.onmessage = (event) => {
      worker.terminate();
      onMessage(event.data);
    };

    worker.onerror = (event) => {
      worker.terminate();
      onError(event.message);
    };

    worker.postMessage(options);
  }
}

