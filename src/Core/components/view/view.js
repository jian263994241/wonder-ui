import React, { useContext } from 'react';
import { WUI_view } from './styles';
import { withRouter } from 'react-router-dom';
import appContext from '../app/appContext';
import Pages from './PageSwitch';

const View =  withRouter((props) => {
  const app = useContext(appContext);
  const { routes, fallback } = app.params;

  return (
    <WUI_view>
      <Pages routes={routes} fallback={fallback} action={props.history.action} {...props}/>
    </WUI_view>
  )
})

export default View;