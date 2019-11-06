import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { 
  WUI_dialog_root, 
  WUI_dialog_body, 
  WUI_dialog_title, 
  WUI_dialog_text,
  WUI_dialog_button_group,
  WUI_dialog_button
} from './styles';
import Modal from '../Modal';
import DialogManager from './DialogManager';
import { createChainedFunction } from  '../../utils/helpers';
import toggleVisible from './toggleVisible';
import Fade from '../Fade';

/**
 * 系统信息提示, 并请求用户进行下一步操作
 * @visibleName Dialog 对话框
 */
const Dialog = React.forwardRef((props, ref)=>{

  const {
    afterClose,
    visible,
    title,
    text,
    textAfter,
    actions,
    vertical,
    styles = {},
    toast,
    container,
    fixed
  } = props;
  
  const transtionStyles = {
    entering: {
      opacity: 1,
      transform: 'translate3d(-50%, -50%, 0) scale(1)'
    }, 
    entered: {
      opacity: 1,
      transform: 'translate3d(-50%, -50%, 0) scale(1)'
    }
  };

  return (
    <Modal
      visible={visible}
      container={container}
      afterClose={afterClose}
      hasTransition
      closeAfterTransition
      BackdropProps={{ fixed }}
    >
      <Fade
        propertys={['opacity', 'transform']}
        styles={transtionStyles}
        style={{
          top: '50%',
          left: '50%',
          opacity: 0,
          transform: 'translate3d(-50%, -50%, 0) scale(1.185)'
        }}
      >
        <WUI_dialog_root css={styles.root} ref={ref} fixed={fixed}>
     
          <WUI_dialog_body css={styles.body} noButtons={!actions} toast={toast}>
            {title && <WUI_dialog_title css={styles.title}>{title}</WUI_dialog_title>}
            {text && <WUI_dialog_text css={styles.text}>{text}</WUI_dialog_text>}
            {textAfter}
          </WUI_dialog_body>

          {
            actions && (
              <WUI_dialog_button_group vertical={vertical}>
                {
                  actions.map((action, i)=>(
                    <WUI_dialog_button 
                      onClick={action.onClick} 
                      key={i} 
                      css={styles.button}
                      primary={action.primary}
                    >{action.text}</WUI_dialog_button>
                  ))
                }
              </WUI_dialog_button_group>
            )
          }
        </WUI_dialog_root>
      </Fade>
    </Modal>
  )
})

Dialog.propTypes = {
  container: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(React.Component),
    PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  ]),
  /** 是否显示对话框 */
  visible: PropTypes.bool,
  /** 是否为toast样式 */
  toast: PropTypes.bool,
  /** 弹框标题 */
  title: PropTypes.string,
  /** 弹框内容 */
  text: PropTypes.string,
  /** 弹框内容后面的自定义内容 */
  textAfter: PropTypes.element,
  /** 定义操作按钮 */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      /** 按钮文字 */
      text: PropTypes.string,
      /** 是否主要按钮 */
      primary: PropTypes.bool,
      /** 点击操作 */
      onClick: PropTypes.func
    })
  ),
  /** 样式API */
  styles: PropTypes.shape({
    /** 组件root样式*/
    root: PropTypes.string,
    /** 组件body样式*/
    body: PropTypes.string,
    /** 组件title样式*/
    title: PropTypes.string,
    /** 组件text样式*/
    text: PropTypes.string,
  }),
  /** 是否fixed定位 */
  fixed: PropTypes.bool,
};

Dialog.defaultProps = {
  fixed: true
};

const dialogManager = new DialogManager();

/**
 * Dialog.alert
 */
Dialog.alert = ({ title, text, onOk, okText = '确定' })=>{
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
  })
  
  dialogManager.run(
    (clearQueue)=> toggleAlert(clearQueue)
  )
}
/**
 * Dialog.confirm
 */
Dialog.confirm = ({ title, text, onOk, okText = '确定', onCancel, cancelText = "取消" })=>{
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
  })

  dialogManager.run(
    (clearQueue)=> toggleConfirm(clearQueue)
  )
}


export default Dialog;