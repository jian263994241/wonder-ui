import React from 'react';
/**
 * ForceUpdate
 */
export default function useForceUpdate() {
  const [, setState] = React.useState();
  return () => {
    setState(Date.now())
  };
}