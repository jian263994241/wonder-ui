import React, {Component} from 'react';

export default function CloseOutline({width='32',color='#fff', ...rest}){
  return (
    <svg width={width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g strokeWidth=".5" stroke={color} fill="none" fillRule="evenodd">
        <circle cx="8" cy="8" r="7.75"/>
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.962 4.93l6.293 6.292M4.932 11.18l6.293-6.294"/>
        </g>
      </g>
    </svg>
  )
}
