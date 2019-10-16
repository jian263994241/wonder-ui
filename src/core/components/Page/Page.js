import React from 'react';
import PropTypes from 'prop-types';
import { WUI_page_root, WUI_page_body, WUI_page_content } from './styles';
import AppContext from '../AppContext';
import useTheme from '../styles/useTheme';
import hooks from '../hooks';
import Slot from '../Slot';

const SlotGroup = Slot.Group;
const SlotContent = Slot.Content;

/**
 * 创建一个页面(长宽100%的容器)
 * @visibleName Page 页面
 */
const Page = React.forwardRef((props, ref)=>{
  const { 
    name,
    children, 
    pageContent = true,
    ...rest
  } = props;
  const app = React.useContext(AppContext);
  const theme = useTheme();

  hooks.usePageInit(()=>{
    app.emit(`pageInit`, name, props);
    return ()=>{
      app.emit(`pageRemove`, name, props);
    }
  });

  return (
    <SlotGroup>
      <WUI_page_root 
        ref={ref}
        theme={theme}
        {...rest}
      >
        <SlotContent name="pageContentBefore"/>
        <WUI_page_body>
        {
          pageContent ? (
            <WUI_page_content>
             {children}
            </WUI_page_content>
          ): children
        }
        </WUI_page_body>
        <SlotContent name="pageContentAfter"/>
      </WUI_page_root>
    </SlotGroup>  
  )
});

Page.Content = WUI_page_content;

Page.propTypes = {
  /** 
   * 页面的名字
   * 可以配合pageInit来设置页面标题
   */
  name: PropTypes.string,
}

export default Page;