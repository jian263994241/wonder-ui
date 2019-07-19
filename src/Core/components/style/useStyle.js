import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';


export default function useStyle (getRules){
  const [className, setClassName] = useState(null);

  useEffect(()=>{
    const div = document.createElement('div');
    const style = getRules( css );
    const component = styled(({className})=> setClassName(className)|| null) (style)
    const dom = React.createElement(component);
    ReactDOM.render(dom , div);
    return ()=>{
      ReactDOM.unmountComponentAtNode(div);
    }
  })
  
  return className;
}