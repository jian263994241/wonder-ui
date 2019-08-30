import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from '../Dialog/Dialog';
import DialogManager from '../Dialog/DialogManager';
import toggleVisible from '../Dialog/toggleVisible';
import { createChainedFunction } from  '../../utils/helpers';

const toastManager = new DialogManager();
const container = document.createElement('div');

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

  const toggleToast = toggleVisible((visible, clearQueue)=>{
    return ReactDOM.render(
      <Dialog
        visible={visible}
        text={text}
        afterClose={createChainedFunction(clearQueue, callback)}
        toast
      />,
      container
    )
  })

  toastManager.run(clearQueue=>{
    toggleToast(clearQueue);

    setTimeout(()=>{
      toggleToast(clearQueue);
    }, timeout);
  });
}

/**
 * @component
 */
export default toast;
