import React, { useContext } from 'react';
import { WUI_view } from './styles';
import appContext from '../app/appContext';
import Pages from './pages';

export default function View ({ ...rest }){
  const app = useContext(appContext);
  const { routes, fallback } = app.params;
  
  return (
    <WUI_view {...rest}>
      <Pages routes={routes} fallback={fallback}/>
    </WUI_view>
  )
}