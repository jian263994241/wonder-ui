

export default class DialogManager {

  modalStack = [];

  modalLock = false;

  addQueue = (fn)=> {
    if(this.modalLock){
      this.modalStack.push(fn);
      return true;
    }
  }

  modalStackClearQueue = ()=>{
    this.modalLock = false;
    if (this.modalStack.length) {
      const fn = this.modalStack.shift();
      setTimeout(() => this.run(fn), 0);
    }
  }

  run = (fn)=>{
    if( this.addQueue( fn ) )return true;
    this.modalLock = true;
    fn(this.modalStackClearQueue);
  }
}