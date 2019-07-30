import React from 'react';
import { WUI_view } from './styles';
import { withRouter } from 'react-router-dom';
import appContext from '../app/appContext';
import Pages from './PageSwitch';
import Preloader from '../preloader';
import theme from '../styles/defaultTheme';
import { ThemeProvider } from 'styled-components';

const View =  withRouter(({history, location, fallback = <Preloader/> , ...rest}) => {
  const app = React.useContext(appContext);
  const [action, setAction] = React.useState('PUSH');
  const { routes } = app.params;
  const search = decodeURIComponent(location.search);
  const pathname = location.pathname;
  
  React.useEffect(()=>{
    setAction(history.action); 
  }, [search, pathname])
  
  return (
    <ThemeProvider theme={theme}>
      <WUI_view>
        <Pages routes={routes} fallback={fallback} action={action} location={location} {...rest}/>
      </WUI_view>
    </ThemeProvider>
    
  )
})

export default View;