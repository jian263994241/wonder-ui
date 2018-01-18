import React, {createElement, cloneElement, Children, isValidElement} from 'react';
import pickBy from 'lodash/pickBy';

/**
 * createTag
 * 创建标签
 * tag 标签
 * prop 替换 target
 * propsToOmit 过滤 props
 * propsToNested 传递 props
 */

export default function createTag ({
  tag: defaultTag = 'div',
  prop = 'as',
  name,
  propsToOmit = [],
  propsToNested = []
} = {}) {
  return ({children, ...otherProps}) => {
    const tag = otherProps[prop] || defaultTag;
    const omitPropsKeys = [prop, ...propsToOmit];
    const nestedPropsKeys = propsToNested;
    const props = pickBy(otherProps, (value, key) => (omitPropsKeys.indexOf(key) === -1) );
    let _children = children;
    if(name && process.env.NODE_ENV !== 'production') props['ui-name'] = name ;
    if(propsToNested.length > 0){
      const childrenProps = pickBy(otherProps, (value, key) => nestedPropsKeys.indexOf(key) > -1);
      _children = Children.toArray(children).map(child=>{
        if(isValidElement(child)){
          return cloneElement(child, childrenProps);
        }
        return child;
      });
    }
    return createElement(tag, props, _children);
  };
}
