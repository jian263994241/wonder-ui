import React from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './AccordionContext';

/**
 * 可以折叠/展开的内容区域。
 * @visibleName Accordion 手风琴
 */
export default function Accordion (props){
  const { 
    children,
    disableTranstion,
    accordion,
    onChange,
    defaultActiveKey,
    activeKey: activeKeyInput,
  } = props;

  const [activeKey , setAcitveKey] = React.useState(false);

  React.useEffect(()=>{
    if(activeKeyInput != activeKey){
      setAcitveKey(activeKeyInput || defaultActiveKey);
    }
  }, [activeKeyInput]);

  const handleChange = (key)=> {
    if(onChange){
      onChange(key);
    }else{
      setAcitveKey(key);
    }
  };  
  
  return (
    <AccordionContext.Provider 
      value={{
        activeKey, 
        accordion, 
        onChange: handleChange, 
        disableTranstion
      }}
    >
      {children}
    </AccordionContext.Provider>
  )
}

Accordion.propTypes = {
  /**
   * 手风琴模式
   */
  accordion: PropTypes.bool,
  /**
   * 当前激活面板的 key
   */
  activeKey: PropTypes.string,
  /**
   * @ignore
   */
  children: PropTypes.any,
  /**
   * 初始化选中面板的 key
   */
  defaultActiveKey: PropTypes.string,
  /**
   * 禁止动画
   */
  disableTranstion: PropTypes.bool,
  /**
   * 切换面板的回调
   */
  onChange: PropTypes.func,
};

Accordion.defaultProps = {
  accordion: false,
  disableTranstion: false,
}

