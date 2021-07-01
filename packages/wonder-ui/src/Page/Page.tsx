import * as React from 'react';
import ArrowForward from '../ArrowForward';
import CloseButton from '../CloseButton';
import IconButton from '../IconButton';
import Navbar, { NavbarProps } from '../Navbar';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css, mergedRef } from '@wonder-ui/utils';
import { pageClasses, useClasses } from './PageClasses';
import { useForkRef, useSize } from '@wonder-ui/hooks';
import { navbarClasses } from '../Navbar/NavbarClasses';

const PageRoot = styled('div', {
  name: 'WuiPage',
  slot: 'Root'
})(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'relative',
  width: '100%',
  height: '100%',
  transform: 'none',
  zIndex: 1,
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  [`& > .${navbarClasses.root}`]: {
    position: 'absolute'
  }
}));

const PageContent = styled('div', {
  name: 'WuiPage',
  slot: 'Content'
})({
  overflow: 'auto',
  boxSizing: 'border-box',
  height: '100%',
  position: 'relative',
  zIndex: 1,
  paddingTop: 'env(safe-area-inset-top)',
  paddingBottom: 'env(safe-area-inset-bottom)'
});

export interface PageProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'ref' | 'title'> {
  /**
   * @ignore
   */
  ContentProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * Content ref
   */
  ContentRef?: React.Ref<HTMLDivElement>;
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
  classes?: Partial<typeof pageClasses>;
  /**
   * 导航栏
   */
  navbar?: React.ReactElement;
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

const Page = React.forwardRef<HTMLElement, PageProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiPage' });
  const {
    NavbarProps = {},
    ToolbarProps = {},
    ContentProps = {},
    ContentRef,
    children,
    className,
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

  const classes = useClasses({ ...props });

  const navbarRef = React.useRef<HTMLElement>(null);

  const handleNavbarRef = useForkRef(
    navbarRef,
    //@ts-expect-error
    navbar ? navbar.ref : NavbarProps.ref
  );
  const toolbarRef = React.useRef<HTMLElement>(null);
  //@ts-expect-error
  const handleToolbarRef = useForkRef(toolbarRef, toolbar?.ref);

  const { height: navbarHeight = 0 } = useSize(navbarRef);
  const { height: toolbarHeight = 0 } = useSize(toolbarRef);

  const contentPaddingTop = React.useMemo(() => {
    return `calc(${navbarHeight}px + env(safe-area-inset-top))`;
  }, [navbarHeight]);

  const contentPaddingBottom = React.useMemo(() => {
    return `calc(${toolbarHeight}px + env(safe-area-inset-bottom))`;
  }, [toolbarHeight]);

  const barLeft = showBackButton ? (
    <IconButton edge="start" disableRipple onClick={onBack}>
      <ArrowForward fontSize="inherit" direction="left" />
    </IconButton>
  ) : null;
  const barRight = showCloseButton ? (
    <CloseButton disableRipple edge="end" onClick={onClose} />
  ) : null;

  return (
    <PageRoot
      ref={ref as React.Ref<HTMLDivElement>}
      className={css(classes.root, className)}
      {...rest}
    >
      {navbar ? (
        React.cloneElement(navbar, {
          ...NavbarProps,
          className: css(
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
          classes={{
            ...NavbarProps.classes,
            root: css(classes.navbar, NavbarProps.className)
          }}
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
        {...ContentProps}
        className={css(classes.content, ContentProps.className)}
        //@ts-expect-error
        ref={mergedRef(ContentRef, ContentProps.ref)}
        style={{
          ...ContentProps.style,
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
