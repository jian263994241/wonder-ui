import React from 'react';
import PropTypes from 'prop-types';
import Transition from '../Transition';
import { easing, duration } from '../styles/transitions';

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};

const Slide = React.forwardRef((props, ref)=>{
  const {
    direction,
    timeout = defaultTimeout,
    ...rest
  } = props;

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

  return (
    <Transition
      ref={ref}
      style={style}
      styles = {{
        entering: { transform: 'translate3d(0 , 0 , 0)' },
        entered: { transform: 'translate3d(0 , 0 , 0)' }
      }}
      propertys={['transform']}
      easing={easing.sharp}
      timeout={timeout}
      {...rest}
    />
  )
});

Slide.propTypes = {
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
  ...Transition.propTypes
};

export default Slide;