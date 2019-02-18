import React, {Component} from 'react';

export default function Success({width='32', color='#fff', ...rest}){
  return (
    <svg width={width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g stroke={color} strokeWidth=".5" fill="none" fillRule="evenodd">
        <circle cx="8" cy="8" r="7.75"/><path strokeLinecap="round" strokeLinejoin="round" d="M4.047 8.25l2.565 2.65 4.95-4.99"/>
      </g>
    </svg>
  )
}
