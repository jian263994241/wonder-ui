import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom';


export default function ReactRouter(props) {
  const {
    type = 'memory',
    ...rest
  } = props;

  const RouterComp = React.useMemo(()=>{
    if(type === 'hash') return HashRouter;
    if(type === 'browser') return BrowserRouter;
    if(type === 'memory') return MemoryRouter;
  }, [type]);

  return (
    <RouterComp {...rest}/>
  )
}

ReactRouter.propTypes = {
  type: PropTypes.oneOf(['hash', 'browser', 'memory'])
}