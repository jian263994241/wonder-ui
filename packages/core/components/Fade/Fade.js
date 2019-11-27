import React from 'react';
import Transition from '../Transition';
import { easing, duration } from '../styles/transitions';

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};

const Fade = React.forwardRef((props, ref)=>{
  const {
    timeout = defaultTimeout,
    easing: easingInput = easing.sharp,
    ...rest
  } = props;

  return (
    <Transition
      ref={ref}
      style={{ opacity: 0 }}
      styles = {{
        entering: { opacity: 1 },
        entered: { opacity: 1 }
      }}
      propertys={['opacity']}
      timeout={timeout}
      easing={easingInput}
      {...rest}
    />
  )
});

Fade.propTypes = {
  ...Transition.propTypes
};

export default Fade;