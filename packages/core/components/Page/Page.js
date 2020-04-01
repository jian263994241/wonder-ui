import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../AppContext';
import clsx from 'clsx';
import hooks from '../hooks';
import Navbar from '../NavBar';
import ScrollContent from '../ScrollContent';
import Slot from '../Slot';
import styles from './styles';
import withStyles from '../withStyles';

const SlotGroup = Slot.Group;
const SlotContent = Slot.Content;

/**
 * 创建一个页面(长宽100%的容器)
 * @visibleName Page 页面
 */
const Page = React.forwardRef((props, ref)=>{
  const {
    children, 
    classes,
    className,
    name,
    navbar = false,
    navbarProps,
    pageContent = true,
    showBack = true,
    white,
    ...rest
  } = props;
  const app = React.useContext(AppContext);

  hooks.usePageInit(()=>{
    app.emit(`pageInit`, name, props);
    return ()=>{
      app.emit(`pageRemove`, name, props);
    }
  });

  return (
    <SlotGroup>
      <div 
        ref={ref}
        className={clsx(classes.root, { white } ,className)}
        {...rest}
      >
        {
          navbar && (
            <Navbar 
              title={name} 
              showBack={showBack} 
              {...navbarProps}
            />
          )
        }
        <SlotContent name="pageSearchbar"/>
        <SlotContent name="pageContentBefore"/>
        <div className={classes.body}>
        {
          pageContent ? (
            <ScrollContent>
             {children}
            </ScrollContent>
          ): children
        }
        </div>
        <SlotContent name="pageContentAfter"/>
        <SlotContent name="pageToolbar"/>
      </div>
    </SlotGroup>  
  )
});

Page.propTypes = {
  /**
   * navbar为`true`时, 显示为 title
   */
  name: PropTypes.string,
  /**
   * 是否显示导航栏
   */
  navbar: PropTypes.bool,
  /**
   * navbar props
   */
  navbarProps: PropTypes.object,
  /**
   * 是否启用滚动部分, ListView等自定义页面滚动时, 设置pageContent:false.
   */
  pageContent: PropTypes.bool,
  /**
   * navbar为`true`时, 是否显示返回按钮
   */
  showBack: PropTypes.bool,
  /**
   * 白色背景
   */
  white: PropTypes.bool,
};

Page.displayName = 'Page';

export default withStyles(styles)(Page);