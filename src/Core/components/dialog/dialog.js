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
import createTheme from '../styles/createTheme';
import { ThemeProvider } from 'styled-components';
import { usePortal, createContainer } from '../../utils/reactUtils';
import { duration } from '../styles/transitions';
import Backdrop from '../backdrop';
import Fade from '../fade';
import Manager from '../../utils/manager';
import AppContext from '../app/appContext';


export const dialogTimeout = duration.standard;

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
  } = props;

  const createPortal = usePortal(containerId);
  const app = React.useContext(AppContext) || {};
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
    <ThemeProvider theme={app.theme || createTheme(theme)}>
      <>
      <Backdrop visible={visible} timeout={dialogTimeout}/>
      <Fade 
        in={visible} 
        timeout={dialogTimeout}
        types={['opacity', 'transform']}
        styles={transtions}
      >
        <WUI_dialog_root css={styles.root} ref={ref}>
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
  visible: PropTypes.bool,
  toast: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  textAfter: PropTypes.element,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      primary: PropTypes.bool,
      onClick: PropTypes.func
    })
  ),
  styles: PropTypes.object,
  containerId: PropTypes.string
};

const dialogManager = new Manager();

const render = createContainer(Dialog);

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