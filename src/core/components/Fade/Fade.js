import React from 'react';
import Transition from '../Transition';

const Fade = React.forwardRef((props, ref)=>(
  <Transition
    ref={ref}
    style={{ opacity: 0 }}
    styles = {{
      entering: { opacity: 1 },
      entered: { opacity: 1 }
    }}
    propertys={['opacity']}
    {...props}
  />
));

Fade.propTypes = {
  ...Transition.propTypes
};

export default Fade;