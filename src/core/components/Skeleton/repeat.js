import React from 'react';

export default function repeat(node, n = 1) {
  const result = [];
  for(let i = 0; i< n; i++){
    result.push(
      React.cloneElement(node, {key: i})
    )
  }
  return result;
}