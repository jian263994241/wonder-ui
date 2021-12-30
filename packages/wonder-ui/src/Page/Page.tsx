import * as React from 'react';
import ArrowForward from '../ArrowForward';
import CloseButton from '../CloseButton';
import IconButton from '../IconButton';
import Navbar, { NavbarProps } from '../Navbar';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css, mergedRef } from '@wonder-ui/utils';
import { navbarClasses } from '../Navbar/NavbarClasses';
import { pageClasses, useClasses } from './PageClasses';
import { useForkRef, useSize } from '@wonder-ui/hooks';

const PageRoot = styled('div', {
  name: 'WuiPage',
  slot: 'Root'
})(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  width: '100%',
  height: '100%',
  transform: 'none',
  zIndex: 1,
  backgroundColor: theme.palette.background.default,
  [`& > .${navbarClasses.root}`]: {
    position: 'absolute'
  }
}));

const PageContent = styled('div', {
  name: 'WuiPage',
  slot: 'Content'
})(({ theme }) => ({
  ...theme.typography.body1,
  overflowY: 'auto',
  boxSizing: 'border-box',
  height: '100%',
  width: '100%',
  position: 'relative',
  zIndex: 1,
  WebkitOverflowScrolling: 'touch',
  paddingTop: 'env(safe-area-inset-top)',
  paddingBottom: 'env(safe-area-inset-bottom)'
}));

export interface PageProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
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
   * 自定义导航栏
   */
  navbar?: JSX.Element;
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
   * @default false
   */
  showBackButton?: boolean;
  /**
   * 显示关闭按钮
   * @default false
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
   * 自定义工具栏
   */
  toolbar?: JSX.Element;
}

const Page = React.forwardRef<HTMLElement, PageProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiPage' });
  const {
    NavbarProps,
    ToolbarProps,
    ContentProps,
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
    navbar ? navbar.ref : NavbarProps?.ref
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

  const barLeft =
    showBackButton || showCloseButton ? (
      <React.Fragment>
        {showBackButton && (
          <IconButton disableRipple onClick={onBack}>
            <ArrowForward fontSize="inherit" direction="left" />
          </IconButton>
        )}

        {showCloseButton && <CloseButton disableRipple onClick={onClose} />}
      </React.Fragment>
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
            NavbarProps?.className
          ),
          ref: handleNavbarRef
        })
      ) : title || barLeft ? (
        <Navbar
          title={title}
          subTitle={subTitle}
          left={barLeft}
          {...NavbarProps}
          classes={{
            ...NavbarProps?.classes,
            root: css(classes.navbar, NavbarProps?.className)
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
        className={css(classes.content, ContentProps?.className)}
        //@ts-expect-error
        ref={mergedRef(ContentRef, ContentProps?.ref)}
        style={{
          ...ContentProps?.style,
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
