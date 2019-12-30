import React from 'react';
import Block from '../Block';

const ContentBlock = React.forwardRef(function ContentBlock(props, ref) {
  return (<Block space={2} blank={2} ref={ref} strong {...props}/>)
});

export default ContentBlock;