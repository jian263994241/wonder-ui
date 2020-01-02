import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../AppContext';
import hooks from '../hooks';
import Slot from '../Slot';
import Navbar from '../NavBar';
import ScrollContent from '../ScrollContent';
import styles from './styles';
import withStyles from '../withStyles';
import clsx from 'clsx';

const SlotGroup = Slot.Group;
const SlotContent = Slot.Content;

/**
 * 创建一个页面(长宽100%的容器)
 * @visibleName Page 页面
 */
const Page = React.forwardRef((props, ref)=>{
  const {
    classes,
    className,
    children, 
    pageContent = true,
    navbarProps,
    navbar = false,
    name,
    showBackButton = true,
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
        className={clsx(classes.root, className)}
        {...rest}
      >
        {
          navbar && (
            <Navbar 
              title={name} 
              showBackButton={showBackButton} 
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
  navbarProps: PropTypes.object,
  /** 
   * 页面的名字
   * 可以配合pageInit来设置页面标题
   */
  name: PropTypes.string,
};

Page.displayName = 'Page';

export default withStyles(styles)(Page);