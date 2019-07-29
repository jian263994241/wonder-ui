import Dialog, { dialogTimeout } from '../dialog/dialog';
import { createContainer } from '../../utils/reactUtils';
import Manager from '../../utils/manager';

const toastManager = new Manager();
const render = createContainer(Dialog);

export default function toast(text, timeout, callback){
  if(typeof timeout === 'function'){
    callback = timeout;
    timeout = null;
  }

  timeout = timeout || 1000;


  toastManager.run((clearQueue)=>{
    render('toast', { visible: true, toast: true, text })
    setTimeout(() => {
      render('toast', { visible: false });
      callback && callback();
      setTimeout(clearQueue, dialogTimeout);
    }, timeout);
  })

  
}