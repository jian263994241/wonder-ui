import React, {Component} from 'react';

export default function Offline({width='32',color='#fff', ...rest}){
  return (
    <svg width={width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle cx="8" cy="8" r="7.75" strokeWidth=".5" stroke={color}/>
        <g fill={color} transform="translate(4.444 5.778)">
          <circle cx=".444" cy=".444" r="1"/>
          <circle cx="7.111" cy=".444" r="1"/>
        </g>
        <path d="M11.177 11.557c-.457-1.295-1.693-2.223-3.144-2.223-1.452 0-2.687.928-3.145 2.223" stroke={color} strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  )
}
