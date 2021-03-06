import React from 'react';
import PropTypes from 'prop-types';
import css from 'dom-helpers/css';
import Transition from '../Transition';

const Slide = React.forwardRef((props, ref)=>{
  const {
    direction,
    onEnter,
    onExited,
    ...rest
  } = props;

  const originStyles = React.useRef({});

  const handleEnter = React.useCallback((node)=>{
    if(!originStyles.current.display){
      originStyles.current.display = css(node, 'display');
    }else{
      css(node, {display: originStyles.current.display});
    }
    onEnter && onEnter();
  }, []);

  const handleExited = React.useCallback((node)=>{
    css(node, { display : 'none' });
    onExited && onExited();
  }, []);

  const style = React.useMemo(()=>{
    if(direction === 'left'){
      return {
        transform: 'translate3d(100% , 0 , 0)'
      };
    }
    
    if(direction === 'right'){
      return {
        transform: 'translate3d(-100% , 0 , 0)'
      };
    }

    if(direction === 'up'){
      return {
        transform: 'translate3d(0 , 100% , 0)'
      };
    }

    if(direction === 'down'){
      return {
        transform: 'translate3d(0 , -100% , 0)'
      };
    }
  }, [direction]);

  const targetStyles = React.useMemo(()=>({
    entering: { transform: 'translate3d(0 , 0 , 0)' },
    entered: { transform: 'translate3d(0 , 0 , 0)' }
  }), []);

  
  return (
    <Transition
      ref={ref}
      style={style}
      styles = {targetStyles}
      propertys={['transform']}
      onEnter={handleEnter}
      onExited={handleExited}
      {...rest}
    />
  )
});

Slide.propTypes = {
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
  ...Transition.propTypes
};

export default Slide;