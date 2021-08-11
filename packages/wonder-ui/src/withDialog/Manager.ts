type Fn = (...args: any[]) => any;

export default class Manager {
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
      setTimeout(() => this.run(fn), 0);
    }
  };

  run = (fn: Fn) => {
    if (this.addQueue(fn)) return true;
    this.modalLock = true;
    fn(this.modalStackClearQueue);
  };

  reset = () => {
    this.modalLock = false;
    this.modalStack = [];
  };
}
