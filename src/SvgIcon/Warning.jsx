import React, {Component} from 'react';

export default function Warning({width='32',color='#fff', ...rest}){
  return (
    <svg width={width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle cx="8" cy="8" r="7.75" strokeWidth=".5" stroke={color}/>
        <path d="M7.573 4.444l.197 5.12c.004.12.102.214.222.214h.016c.12 0 .218-.095.222-.214l.197-5.12c.01-.236-.175-.435-.41-.444H8c-.236 0-.428.19-.428.428v.016zm.424 6.223c-.12 0-.224.037-.308.124-.092.082-.134.187-.134.318 0 .124.042.23.133.317.083.087.186.13.307.13.12 0 .23-.043.32-.124.085-.086.127-.19.127-.322 0-.13-.042-.236-.127-.317-.084-.086-.193-.123-.32-.123z" fill={color}/>
      </g>
    </svg>
  )
}
