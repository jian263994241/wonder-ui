import React from 'react';
import idxx from './idxx';

export default function useId(id){
  return React.useMemo(()=> id || idxx() , [id]);
}