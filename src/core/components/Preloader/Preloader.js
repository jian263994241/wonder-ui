import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { WUI_preloader, WUI_preloader_root } from './styles';
import Modal from '../Modal';

/**
 * 用于加载/处理数据时候的等待状态
 * 
 * 组件提供了两个静态方法调用
 * 
 * `Preloader.show` - 显示`Preloader`
 * 
 * `Preloader.hide` - 隐藏`Preloader`
 * 
 * @visibleName Preloader 指示器
 */
const Preloader = React.forwardRef((props, ref)=>{
  const {
    indicator: Indicator,
    navbarHeight,
    visible,
    ...rest
  } = props;

  const rendered = React.useMemo(()=>{

    return (
      <Modal
        visible={visible}
        BackdropProps={{ style: {backgroundColor: 'transparent'}}}
        {...rest}
      >
        <WUI_preloader_root aria-hidden="true" navbarHeight={navbarHeight} ref={ref}>
          {
            Indicator ? <Indicator/> : <WUI_preloader color="#fff"/>
          }
        </WUI_preloader_root> 
      </Modal>
    )
  }, [visible])
  
  return rendered;
})

Preloader.defaultProps = {
  visible: false,
  indicator: undefined,
  navbarHeight: 0,
}

Preloader.propTypes = {
  /** 是否显示指示器 */
  visible: PropTypes.bool,
  /** 中间的旋转部分 */
  indicator: PropTypes.element,
  /** 
   * @ignore
   */
  navbarHeight: PropTypes.number
}

const container = document.createElement('div');

Preloader.show = (indicator)=> {
  setTimeout(() => {
    ReactDOM.render(<Preloader visible indicator={indicator}/>, container);
  }, 0);
}

Preloader.hide = ()=> {
  setTimeout(()=>{
    ReactDOM.render(<Preloader visible={false}/>, container);
  },  0);
}

export default Preloader;