import React from 'react';
import AppContext from '../AppContext';

const useApp = ()=>{
  return React.useContext(AppContext);
};


export default useApp;