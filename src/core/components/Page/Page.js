import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { WUI_page_root, WUI_page_content } from './styles';
import { __RouterContext, matchPath } from 'react-router-dom';
import AppContext from '../AppContext';
import utils from '../../utils/utils';
import useEventCallback from '../../utils/useEventCallback'

/**
 * 创建一个页面(长宽100%的容器)
 * @visibleName Page 页面
 */
const Page = React.forwardRef((props, ref)=>{
  const { 
    name,
    children, 
    styles = {}, 
    pageContent = true
  } = props;
  const app = React.useContext(AppContext);
  const router = React.useContext(__RouterContext);
  const { location, match } = router;
  
  const matched = React.useMemo(()=> {
    return matchPath(location.pathname, {
      path: match.path
    }) || {}
  }, [location.pathname]);

  const pageEvent = useEventCallback((type, ...args)=>{
    if(matched.isExact){
      app.emit(`page${type}`, ...args);
    }
  });

  React.useEffect(()=>{

    pageEvent('Init', name, props);
 
    return ()=>{
      pageEvent('Remove', name, props);
    }
  }, [location.pathname]);

  const slots = React.useMemo(()=>{
    const childrenArray = Children.toArray(children);
    return utils.slot(childrenArray); 
  }, [children]);

  return (
    <WUI_page_root 
      ref={ref} 
      css = {styles.root}
    >
      <>
      { slots['pageContentBefore'] }
      {
        pageContent ? (
          <WUI_page_content css = {styles.content} >{ slots.main }</WUI_page_content>
        ) : slots.main
      }
      { slots['pageContentAfter'] }
      </>
    </WUI_page_root>
  )
});

Page.Content = WUI_page_content;

Page.defaultProps = {
  name: undefined,
}

Page.propTypes = {
  /** 
   * 页面的名字
   * 可以配合pageInit来设置页面标题
   */
  name: PropTypes.string,
}

export default Page;