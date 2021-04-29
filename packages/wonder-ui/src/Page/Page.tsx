import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { BaseProps, ClassNameMap } from '../styles/types';
import Navbar, { NavbarProps } from '../Navbar';
import CloseButton from '../CloseButton';
import IconButton from '../IconButton';
import ArrowForward from '../ArrowForward';
import { useForkRef, useSize } from '@wonder-ui/hooks';
import clsx from 'clsx';

const PageRoot = styled('div', {
  name: 'WuiPage',
  slot: 'Root'
})(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  transform: 'none',
  zIndex: 1,
  backgroundColor: theme.palette.background.default,
  '& .WuiNavbar-root': {
    position: 'absolute'
  }
}));

const PageContent = styled('div', {
  name: 'WuiPage',
  slot: 'Content'
})(({ theme }) => ({
  overflow: 'auto',
  boxSizing: 'border-box',
  height: '100%',
  position: 'relative',
  zIndex: 1,
  paddingTop: 'env(safe-area-inset-top)',
  paddingBottom: 'env(safe-area-inset-bottom)'
  // '.WuiNavbar-root + &': {
  //   paddingTop: `calc(${theme.shape.navbarHeight}px + env(safe-area-inset-top))`
  // }
}));

export interface PageProps extends BaseProps {
  /**
   * 导航栏属性
   */
  NavbarProps?: Partial<NavbarProps>;
  /**
   * 工具栏属性
   */
  ToolbarProps?: object;
  /**
   * css
   */
  classes?: ClassNameMap<'root' | 'content' | 'navbar' | 'toolbar'>;
  /**
   * 内容Ref
   */
  contentRef?: React.Ref<HTMLDivElement>;
  /**
   * 导航栏
   */
  navbar?: React.ReactElement & React.RefAttributes<React.ReactElement>;
  /**
   * 返回按钮事件
   */
  onBack?: () => void;
  /**
   * 关闭按钮事件
   */
  onClose?: () => void;
  /**
   * 显示返回按钮
   */
  showBackButton?: boolean;
  /**
   * 显示关闭按钮
   */
  showCloseButton?: boolean;
  /**
   * 副标题
   */
  subTitle?: React.ReactNode;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 工具栏
   */
  toolbar?: React.ReactElement & React.RefAttributes<React.ReactElement>;
}

const Page: React.FC<PageProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiPage' });
  const {
    NavbarProps = {},
    ToolbarProps = {},
    children,
    className,
    contentRef,
    navbar = null,
    onBack,
    onClose,
    showBackButton = false,
    showCloseButton = false,
    subTitle,
    title,
    toolbar = null,
    ...rest
  } = props;

  const classes = useClasses({ ...props, name: 'WuiPage' });

  const navbarRef = React.useRef<HTMLElement>(null);
  const handleNavbarRef = useForkRef(
    navbarRef,
    navbar ? navbar.ref : NavbarProps.ref
  );
  const toolbarRef = React.useRef<HTMLElement>(null);
  const handleToolbarRef = useForkRef(
    toolbarRef,
    toolbar ? toolbar.ref : undefined
  );

  const { height: navbarHeight = 0 } = useSize(navbarRef);
  const { height: toolbarHeight = 0 } = useSize(toolbarRef);

  const contentPaddingTop = React.useMemo(() => {
    return `calc(${navbarHeight}px + env(safe-area-inset-top))`;
  }, [navbarHeight]);

  const contentPaddingBottom = React.useMemo(() => {
    return `calc(${toolbarHeight}px + env(safe-area-inset-bottom))`;
  }, [toolbarHeight]);

  const barLeft = showBackButton ? (
    <IconButton edge="start" disabledTouchFeedback onClick={onBack}>
      <ArrowForward size="small" direction="left" />
    </IconButton>
  ) : null;
  const barRight = showCloseButton ? (
    <CloseButton disabledTouchFeedback edge="end" onClick={onClose} />
  ) : null;

  return (
    <PageRoot ref={ref} className={classes.root} {...rest}>
      {navbar ? (
        React.cloneElement(navbar, {
          ...NavbarProps,
          className: clsx(
            navbar.props.className,
            classes.navbar,
            NavbarProps.className
          ),
          ref: handleNavbarRef
        })
      ) : title ||
        barRight ||
        barLeft ||
        Object.keys(NavbarProps).length > 0 ? (
        <Navbar
          title={title}
          subTitle={subTitle}
          right={barRight}
          left={barLeft}
          {...NavbarProps}
          className={clsx(classes.navbar, NavbarProps.className)}
          ref={handleNavbarRef}
        />
      ) : null}

      {toolbar
        ? React.cloneElement(toolbar, {
            ...ToolbarProps,
            ref: handleToolbarRef
          })
        : null}

      <PageContent
        ref={contentRef}
        className={classes.content}
        style={{
          paddingTop: contentPaddingTop,
          paddingBottom: contentPaddingBottom
        }}
      >
        {children}
      </PageContent>
    </PageRoot>
  );
});

export default Page;
