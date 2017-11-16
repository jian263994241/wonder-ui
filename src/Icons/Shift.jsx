import React, {Component, cloneElement} from 'react';

export default function Shift({width='22', color='#000', ...rest}){
  return (
    <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" {...rest}>
      <path style={{fill:color}} d="M12.3 9h3.8c.1 0 .2 0 .3-.1.1-.1.1-.4 0-.5L9.3 1.7c-.1-.1-.3-.1-.5 0l-7 6.7c-.1 0-.2.1-.2.2 0 .2.2.4.4.4h3.6v6c0 .2.2.3.3.3h6c.2 0 .3-.2.3-.3V9zm1.3 6c0 .9-.7 1.6-1.6 1.6H6c-.9 0-1.6-.7-1.6-1.6v-4.8H2c-.9 0-1.6-.7-1.6-1.7 0-.5.2-.9.5-1.2L8 .7c.6-.6 1.6-.6 2.3 0l7.1 6.6c.5.7.6 1.8-.1 2.5-.3.3-.7.5-1.2.5h-2.5V15z"/>
    </svg>
  )
}
