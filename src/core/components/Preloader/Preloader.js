import React from 'react';
import PropTypes from 'prop-types';
import { WUI_preloader, WUI_preloader_root } from './styles';
import defaultIndicator from './Indicator';
import { usePortal, createContainer } from '../../utils/reactUtils';
import Backdrop from '../Backdrop';

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
const Preloader = (props)=>{
  const {
    indicator: Indicator,
    containerId,
    navbarHeight,
    visible = true,
  } = props;
  
  const createPortal = usePortal(containerId);

  return createPortal(
    <>
      <Backdrop visible={visible} invisible/>  
      {
        visible && (
          <WUI_preloader_root aria-hidden="true" navbarHeight={navbarHeight}>
            {
              Indicator ? <Indicator/> : <WUI_preloader color="#fff"/>
            }
          </WUI_preloader_root>
        )
      } 
    </>
  );
}

Preloader.defaultProps = {
  visible: false,
  containerId: undefined,
  indicator: undefined,
  navbarHeight: 0,
}

Preloader.propTypes = {
  /** 是否显示指示器 */
  visible: PropTypes.bool,
  /** 挂载的节点id */
  containerId: PropTypes.string,
  /** 中间的旋转部分 */
  indicator: PropTypes.element,
  /** 设置Preloader偏移位置 */
  navbarHeight: PropTypes.number
}

const render = createContainer(Preloader);

Preloader.show = ()=> {
  render('preloader', {visible: true});
}

Preloader.hide = ()=> {
  render('preloader', {visible: false}, 200);
}

/**
 * @component
 */
export default Preloader;