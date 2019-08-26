import Dialog, { dialogTimeout } from '../Dialog/Dialog';
import { createContainer } from '../../utils/reactUtils';
import Manager from '../../utils/manager';

const toastManager = new Manager();
const render = createContainer(Dialog);

/**
 * 轻提示 默认一秒后消失
 * 
 * toast(
 *   text: string, 
 *   [timeout: number], 
 *   callback: function 
 * )
 * 
 * - `text` 提示内容
 * - `timeout` 超时, 默认1000ms
 * - `callback` 回调回调函数
 * @visibleName Toast 轻提示
 */
const toast = (text, timeout, callback) => {
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
  });
}

/**
 * @component
 */
export default toast;
