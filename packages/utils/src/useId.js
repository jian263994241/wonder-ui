import React from 'react';
import idxx from './idxx';

export default function useId(){
  return React.useMemo(()=> idxx() , []);
}