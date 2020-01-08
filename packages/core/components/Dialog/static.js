import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';
import DialogManager from './DialogManager';
import createChainedFunction from  '@wonder-ui/utils/createChainedFunction';
import toggleVisible from './toggleVisible';

const dialogManager = new DialogManager();
const noop = ()=>{};
/**
 * Dialog.alert
 */
Dialog.alert = function DialogAlert ({ title, text, onOk, okText = '确定' }) {
  const container = document.createElement('div');
  const toggleAlert = toggleVisible((visible, clearQueue)=> {
    ReactDOM.render(
      <Dialog 
        visible={visible}
        title={title}
        text={text}
        afterClose={clearQueue}
        actions={[
          {
            text: okText,
            primary: true,
            onClick: createChainedFunction(toggleAlert, onOk)
          }
        ]}
      />,
      container
    )
  });
  
  dialogManager.run(
    (clearQueue)=> toggleAlert(clearQueue)
  );
}
/**
 * Dialog.confirm
 */
Dialog.confirm = function DialogConfirm({ title, text, onOk, okText = '确定', onCancel, cancelText = "取消" }) {
  const container = document.createElement('div');
  const toggleConfirm = toggleVisible((visible, clearQueue)=> {
    ReactDOM.render(
      <Dialog 
        visible={visible}
        title={title}
        text={text}
        afterClose={clearQueue}
        actions={[
          {
            text: cancelText,
            onClick: createChainedFunction(toggleConfirm, onCancel)
          },
          {
            text: okText,
            primary: true,
            onClick: createChainedFunction(toggleConfirm, onOk)
          }
        ]}
      />,
      container
    )
  });

  dialogManager.run(
    (clearQueue)=> toggleConfirm(clearQueue)
  );
}
/**
 * 
 */
Dialog.toast = function DialogToast(text, callback) {
  const container = document.createElement('div');
  callback = typeof callback === 'function' ? callback : noop;
  const toggleToast = toggleVisible((visible, clearQueue)=> {
    ReactDOM.render(
      <Dialog   
        toast
        text={text}
        visible={visible}
        afterClose={clearQueue}
      />,
      container
    )
  });

  dialogManager.run(
    (clearQueue)=> {
      toggleToast(clearQueue);

      setTimeout(()=>{
        toggleToast(clearQueue);
        callback();
      }, 1000);
    }
  );
}
/**
 * Custom Dialog
 */
Dialog.custom = function DialogCustom (props){
  const {actions = [], ...rest } = props;
  const container = document.createElement('div');
  const toggleConfirm = toggleVisible((visible, clearQueue)=> {
    ReactDOM.render(
      <Dialog 
        {...rest}
        visible={visible}
        afterClose={clearQueue}
        actions={actions.map((action)=>{
          const { onClick, ...otherOpts} = action;
          return {
            ...otherOpts,
            onClick: createChainedFunction(toggleConfirm, onClick)
          }
        })}
      />,
      container
    )
  });

  dialogManager.run(
    (clearQueue)=> toggleConfirm(clearQueue)
  );
}