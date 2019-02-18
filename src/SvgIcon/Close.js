import React, {Component} from 'react';

export default function Close({width='14',color='#A0A4AD', ...rest}){
  return (
    <svg width={width} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g strokeWidth="1.5" stroke={color} fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 1L7 7.01636364 12.9673617 13M1 1l6 6.01636364L1.03263826 13"/>
      </g>
    </svg>
  )
}
