import React from 'react';
import Transition from '../Transition';
import { easing, duration } from '../styles/transitions';
import css from 'dom-helpers/css';

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};

const Fade = React.forwardRef((props, ref)=>{
  const {
    timeout = defaultTimeout,
    easing: easingInput = easing.sharp,
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

  const styles = React.useMemo(()=>({ opacity: 0 }), []);

  const targetStyles = React.useMemo(()=>({
    entering: { opacity: 1 },
    entered: { opacity: 1 }
  }), []);

  return (
    <Transition
      ref={ref}
      style={styles}
      styles = {targetStyles}
      propertys={['opacity']}
      timeout={timeout}
      easing={easingInput}
      onEnter={handleEnter}
      onExited={handleExited}
      {...rest}
    />
  )
});

Fade.propTypes = {
  ...Transition.propTypes
};

export default Fade;