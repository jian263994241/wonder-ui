import React from 'react';
import styled from 'styled-components';

const deletePropsString = 'theme|blank|space|left|right|top|bottom|color|fullWidth|full|variant|size|outlined';
const deletePropsList = deletePropsString.split('|');

//return a new obj
const deleteProps = (props)=>{
  const _props = Object.assign({}, props);
  for(let k in _props){
    if(deletePropsList.includes(k)){
      delete _props[k];
    }
  }
  return _props;
};

const createTag = (node)=> {
  return React.memo(React.forwardRef(function (props, ref){
    const newprops = deleteProps(props);
    return React.createElement(node, {ref, ...newprops});
  }))
};

createTag.div = createTag('div');
createTag.span = createTag('span');

export default createTag;