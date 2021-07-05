import { isPromise } from './validate';

type Fn = (...args: any[]) => any;

export class StackManager {
  modalStack: Fn[];

  modalLock = false;

  constructor() {
    this.modalStack = [];
  }

  addQueue = (fn: Fn) => {
    if (this.modalLock) {
      this.modalStack.push(fn);
      return true;
    }
  };

  modalStackClearQueue = () => {
    this.modalLock = false;

    const fn = this.modalStack.shift();

    if (fn) {
      this.run(fn);
    }
  };

  run = (fn: Fn) => {
    if (this.addQueue(fn)) return true;
    this.modalLock = true;
    const called = fn(this.modalStackClearQueue);

    if (isPromise(called)) {
      return called.then((value) => {
        this.modalStackClearQueue();

        return value;
      });
    }
  };
}
