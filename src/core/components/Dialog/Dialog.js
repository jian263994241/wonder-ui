import React from 'react';
import PropTypes from 'prop-types';
import { 
  WUI_dialog_root, 
  WUI_dialog_body, 
  WUI_dialog_title, 
  WUI_dialog_text,
  WUI_dialog_button_group,
  WUI_dialog_button
} from './styles';
import { usePortal, createContainer } from '../../utils/reactUtils';
import { duration } from '../styles/transitions';
import Backdrop from '../Backdrop';
import Fade from '../Fade';
import Manager from '../../utils/manager';
import useTheme from '../styles/useTheme';

export const dialogTimeout = duration.standard;

/**
 * 系统信息提示, 并请求用户进行下一步操作
 * @visibleName Dialog 对话框
 */
const Dialog = React.forwardRef((props, ref)=>{

  const {
    visible,
    title,
    text,
    textAfter,
    actions,
    vertical,
    styles = {},
    toast,
    containerId = null,
    theme,
    fixed
  } = props;

  const createPortal = usePortal(containerId);
  const [ThemeProvider] = useTheme(props);
  
  const transtions = {
    entering: {
      opacity: 1,
      transform: 'translate3d(-50%, -50%, 0) scale(1)'
    }, 
    entered: {
      opacity: 1,
      transform: 'translate3d(-50%, -50%, 0) scale(1)'
    }
  };

  return createPortal(
    <ThemeProvider>
      <>
      <Backdrop visible={visible} fixed={fixed} timeout={dialogTimeout}/>
      <Fade 
        in={visible} 
        timeout={dialogTimeout}
        types={['opacity', 'transform']}
        styles={transtions}
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
      </>
    </ThemeProvider>
  )
})

Dialog.propTypes = {
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
  /** 挂载的节点id */
  containerId: PropTypes.string,
  /** 是否fixed定位 */
  fixed: PropTypes.bool,
};

Dialog.defaultProps = {
  fixed: true
};

const dialogManager = new Manager();

const render = createContainer(Dialog);

/**
 * Dialog.alert
 */
Dialog.alert = ({ title, text, onOk, okText = '确定' })=>{
  
  dialogManager.run(
    (clearQueue)=> {
      render('alert', {
        visible: true, title, text,
        actions: [{
          text: okText,
          primary: true,
          onClick(){
            render('alert', {visible: false}, null, onOk);
            setTimeout(clearQueue, dialogTimeout);
          }
        }]
      })
    }
  )
}
/**
 * Dialog.confirm
 */
Dialog.confirm = ({ title, text, onOk, okText = '确定', onCancel, cancelText = "取消" })=>{
  dialogManager.run((clearQueue)=>{
    render('confirm', {
      visible: true, title, text,
      actions: [
        {
          text: cancelText,
          onClick(){
            render('confirm', {visible: false}, null, onCancel);
            setTimeout(clearQueue, dialogTimeout);
          }
        },
        {
          text: okText,
          primary: true,
          onClick(){
            render('confirm', {visible: false}, null, onOk);
            setTimeout(clearQueue, dialogTimeout);
          }
        }
      ]
    })
  })
}


export default Dialog;