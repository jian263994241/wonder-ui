import React, {Component, cloneElement} from 'react';

export default function Backspace({width='22', color='#000', ...rest}){
  return (
    <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 15" {...rest}>
      <path style={{fill:color}} d="M20.1 0H7.6C7 0 6.4.3 6 .7L.4 6.6c-.5.5-.5 1.4 0 1.9L6 14.3c.4.4 1 .7 1.6.7h12.5c1 0 1.9-.9 1.9-1.9V1.9c0-1-.8-1.9-1.9-1.9zm.6 13.1c0 .4-.3.6-.6.6H7.6c-.3 0-.5-.1-.7-.3L1.3 7.5v-.1l5.6-5.8c.2-.2.4-.3.7-.3h12.5c.3 0 .6.3.6.6v11.2zm-4.1-9.2c-.2-.2-.6-.2-.9 0L13 6.6l-2.7-2.7c-.2-.2-.6-.2-.9 0s-.2.6 0 .9l2.7 2.7-2.7 2.7c-.2.2-.2.6 0 .9s.6.2.9 0L13 8.4l2.7 2.7c.2.2.6.2.9 0s.2-.6 0-.9L14 7.5l2.7-2.7c.2-.2.2-.6-.1-.9z"/>
    </svg>
  )
}
