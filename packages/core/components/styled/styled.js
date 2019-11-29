import React from 'react';
import styledComponents from 'styled-components';


const deleteProps = (props)=>{
  const deletePropsList = [
    'theme','blank','space','left',
    'right','top','bottom','color',
    'fullWidth','full','variant','size',
    'outlined','inline', 'start', 'visible',
    'transitionDisabled', 'spacing', 'bordered'
  ];
  const _props = Object.assign({}, props);
  for(let k in _props){
    if(deletePropsList.includes(k)){
      delete _props[k];
    }
  }
  return _props;
};

const createElement = (node)=> {
  return React.forwardRef(function (props, ref){
    const newprops = deleteProps(props);
    return React.createElement(node, {ref, ...newprops});
  })
};

export default function styled(element){
  return styledComponents(createElement(element));
}