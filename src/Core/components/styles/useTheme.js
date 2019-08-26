import React from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import createTheme from './createTheme';

/**
 * 提供主题
 */
const useTheme = (props)=>{

  const appTheme = React.useContext(ThemeContext);
  
  const theme = React.useMemo(()=>{

    if(appTheme){
      return appTheme;
    }

    return createTheme(props.theme);

  }, [props.theme, theme]);

  const Provider = ThemeProvider;

  Provider.defaultProps = { theme };

  return [Provider, theme];
}


export default useTheme;