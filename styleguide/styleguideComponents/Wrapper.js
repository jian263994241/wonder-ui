import React from 'react';
import { Simulator } from './styles';

export default function Wrapper(props){

  const {children} = props;

  return (
    <Simulator>
      <div className="simulator">{children}</div>
    </Simulator>
  )
}