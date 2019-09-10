import React from 'react';
import AppContext from '../App/AppContext';

const useRouterStore = ()=>{
  const app = React.useContext(AppContext);
  return app.routing;
}


export default useRouterStore;