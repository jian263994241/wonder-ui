import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouteLink, qs } from '@wonder-ui/router';
import { WUI_link } from './styles';
import TouchFeedback from '../TouchFeedback';
import useTheme from '../styles/useTheme';
import createTag from '../createTag';

/**
 * 用来链接页面
 * @visibleName Link 链接
 */
const Link = React.forwardRef((props, ref)=>{
  const { to, href, ...rest } = props;
  
  const component = React.useMemo(()=>{
    if(to){
      return React.createElement(
        WUI_link.withComponent(createTag(RouteLink)),
        { to: qs.stripQuery(to) }
      )
    }
  
    if(href){
      return React.createElement( WUI_link.withComponent(createTag.a), {href} )
    }

    return React.createElement(WUI_link);
  }, [to, href]);

  const theme = useTheme();

  return (
    <TouchFeedback>
      { React.cloneElement(component, { theme, ref, ...rest }) }
    </TouchFeedback>
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