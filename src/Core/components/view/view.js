import React from 'react';
import { WUI_view } from './styles';
import { withRouter } from 'react-router-dom';
import appContext from '../app/appContext';
import Pages from './PageSwitch';
import Preloader from '../preloader';

const View =  withRouter(({history, location, ...rest}) => {
  const app = React.useContext(appContext);
  const [action, setAction] = React.useState('PUSH');
  const { 
    routes, 
    fallback = <Preloader/> 
  } = app.params;
  const search = decodeURIComponent(location.search);
  const pathname = location.pathname;
  
  React.useEffect(()=>{
    setAction(history.action); 
  }, [search, pathname])

  
  return (
    <WUI_view>
      <Pages routes={routes} fallback={fallback} action={action} location={location} {...rest}/>
    </WUI_view>
  )
})

export default View;