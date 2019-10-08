import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { WUI_page_root, WUI_page_content } from './styles';
import AppContext from '../AppContext';
import utils from '../../utils/utils';
import useTheme from '../styles/useTheme';
import hooks from '../hooks';
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
  const theme = useTheme();

  hooks.usePageInit(()=>{
    app.emit(`pageInit`, name, props);
    return ()=>{
      app.emit(`pageRemove`, name, props);
    }
  });

  const slots = React.useMemo(()=>{
    const childrenArray = Children.toArray(children);
    return utils.slot(childrenArray); 
  }, [children]);

  return (
    <WUI_page_root 
      ref={ref} 
      css = {styles.root}
      theme={theme}
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