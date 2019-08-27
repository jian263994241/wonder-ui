import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouteLink } from 'react-router-dom';
import { WUI_link } from './styles';

/**
 * 用来链接页面
 * @visibleName Link 链接
 */
const Link = React.forwardRef((props, ref)=>{
  const { to, href } = props;
  let Component = WUI_link;
  if(to){
    Component = WUI_link.withComponent(RouteLink);
  }

  if(href){
    Component = WUI_link.withComponent('a');
  }

  return (
    <Component {...props} ref={ref}/>
  )
})

Link.propTypes = {
  /**
   * 如果存在该属性:
   * 渲染为ReactRouter的Link, 应用内跳转
   * @see [react-router-dom > Link](https://reacttraining.com/react-router/web/api/Link)
   */
  to: PropTypes.oneOfType([
    PropTypes.object, 
    PropTypes.string
  ]),
  /**
   * 如果存在该属性:
   * 渲染为a标签,用来链接到单页应用外的地址
   */
  href: PropTypes.string
}


export default Link;