import React from 'react';

export default function Wrapper(props){

  const {children} = props;

  return (
    <div className="simulator-wrapper">
      <div className="simulator">{children}</div>
    </div>
  )
}