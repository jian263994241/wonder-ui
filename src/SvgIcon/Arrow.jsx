import React, {Component} from 'react';

export default function Arrow({width='13', color='#8c8c8c', ...rest}){
  return (
    <svg width={width} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 40'>
      <polygon points='9,22 9,0 17,0 17,22 26,22 13.5,40 0,22' fill={color}/>
    </svg>
  )
}
