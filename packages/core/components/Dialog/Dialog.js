import React from 'react';
import PropTypes from 'prop-types';
import Buttonbase from '../ButtonBase';
import clsx from 'clsx';
import Fade from '../Fade';
import getRendered from '@wonder-ui/utils/getRendered';
import Modal from '../Modal';
import styles from './styles';
import withStyles from '../withStyles';
/**
 * 系统信息提示, 并请求用户进行下一步操作
 * @visibleName Dialog 对话框
 */
const Dialog = React.forwardRef(function Dialog(props, ref) {

  const {
    actions = [],
    afterClose,
    classes,
    className,
    container,
    content,
    text,
    title,
    toast,
    visible,
    ...rest
  } = props;
  const contentRef = React.useRef();
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

  const noButtons = actions.length <= 0 ;
  const vertical = actions.length >= 3 ;

  return (
    <Modal
      visible={visible}
      container={container}
      afterClose={afterClose}
      hasTransition
      closeAfterTransition
      {...rest}
    >
      <Fade
        propertys={['opacity', 'transform']}
        styles={transtionStyles}
        style={{
          top: '50%', left: '50%', opacity: 0,
          transform: 'translate3d(-50%, -50%, 0) scale(1.185)'
        }}
      >
        <div className={clsx(
            classes.root, 
            { 
              toast: toast
            },
            className
          )} 
          ref={ref}
        >
          {
            (title || content || text ) && (
              <div 
                className={clsx(
                  classes.body,
                  {
                    noButtons: noButtons,
                  }
                )}
              >
                {title && <div className={classes.title}>{title}</div>}
                {text && <div className={classes.text}>{text}</div>}
                {getRendered(content, {ref: contentRef})}
              </div>
            )
          }
          {
            !noButtons && (
              <div className={clsx(
                  classes.buttonGroup,
                  {
                    vertical: vertical
                  }
                )}
              >
                {
                  actions.map((action, i)=>(
                    <Buttonbase 
                      className={clsx(
                        classes.button,
                        {
                          primary: action.primary
                        }
                      )}
                      onClick={e => {
                        if(action.onClick){
                          action.onClick(e, { contentRef })
                        }
                      }} 
                      key={i}
                    >{action.text}</Buttonbase>
                  ))
                }
              </div>
            )
          }
        </div>
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
  title: PropTypes.node,
  /** 弹框内容 */
  text: PropTypes.node,
  /** 弹框内容后面的自定义内容 */
  content: PropTypes.oneOfType([
    PropTypes.node, 
    PropTypes.func
  ]),
  /** 定义操作按钮 */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      /** 按钮文字 */
      text: PropTypes.string,
      /** 是否主要按钮 */
      primary: PropTypes.bool,
      /** 
       * 点击操作, 如果return 一个 promise, 则resolve后关闭对话框
       */
      onClick: PropTypes.func
    })
  ),
};

Dialog.defaultProps = {};

Dialog.displayName = 'Dialog';


export default withStyles(styles)(Dialog);