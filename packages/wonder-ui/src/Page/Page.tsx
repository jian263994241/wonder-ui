import * as React from 'react';
import ArrowForward from '../ArrowForward';
import CloseButton from '../CloseButton';
import IconButton from '../IconButton';
import Navbar from '../Navbar';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { COMPONENT_NAME } from './PageClasses';
import { composeClasses, css, mergedRef } from '@wonder-ui/utils';
import { navbarClasses } from '../Navbar/NavbarClasses';
import { useForkRef, useSize } from '@wonder-ui/hooks';
import type { PageProps, PageStyleProps } from './PageTypes';

export const useClasses = (styleProps: PageStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    content: ['content'],
    navbar: ['navbar'],
    toolbar: ['toolbar']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const PageRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  width: '100%',
  height: '100%',
  maxHeight: '100%',
  display: 'flex',
  transform: 'none',
  zIndex: 1,
  backgroundColor: theme.palette.background.default,
  [`& > .${navbarClasses.root}`]: {
    position: 'absolute'
  }
}));

const PageContent = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Content'
})(({ theme }) => ({
  ...theme.typography.body1,
  overflowY: 'auto',
  boxSizing: 'border-box',
  minHeight: '100%',
  maxHeight: '100%',
  width: '100%',
  position: 'relative',
  zIndex: 1,
  WebkitOverflowScrolling: 'touch',
  paddingTop: 'env(safe-area-inset-top)',
  paddingBottom: 'env(safe-area-inset-bottom)'
}));

const PageFooter = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Footer'
})(({ theme }) => ({
  width: '100%',
  background: alpha(theme.palette.background.paper, 0.89),
  backdropFilter: 'saturate(180%) blur(20px)',
  position: 'absolute',
  bottom: 0,
  zIndex: 2
}));

const Page = React.forwardRef<HTMLDivElement, PageProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    NavbarProps,
    ContentProps,
    ContentRef,
    component,
    children,
    className,
    navbar = null,
    onBack,
    onClose,
    showBackButton = false,
    showCloseButton = false,
    subTitle,
    title,
    barLeft,
    barRight,
    footer = null,
    ...rest
  } = props;

  const classes = useClasses({ ...props });

  const navbarRef = React.useRef<HTMLElement>(null);

  const handleNavbarRef = useForkRef(
    navbarRef,
    //@ts-expect-error
    navbar ? navbar.ref : NavbarProps?.ref
  );
  const toolbarRef = React.useRef<HTMLDivElement>(null);

  const { height: navbarHeight = 0 } = useSize(navbarRef);
  const { height: toolbarHeight = 0 } = useSize(toolbarRef);

  const contentPaddingTop = React.useMemo(() => {
    return `calc(${navbarHeight}px + env(safe-area-inset-top))`;
  }, [navbarHeight]);

  const contentPaddingBottom = React.useMemo(() => {
    return `calc(${toolbarHeight}px + env(safe-area-inset-bottom))`;
  }, [toolbarHeight]);

  const renderBarLeft = () => {
    return (
      <React.Fragment>
        {showBackButton && (
          <IconButton onClick={onBack}>
            <ArrowForward fontSize="inherit" direction="left" />
          </IconButton>
        )}
        {showCloseButton && <CloseButton onClick={onClose} />}
        {barLeft}
      </React.Fragment>
    );
  };

  const renderNavBar = () => {
    if (React.isValidElement(navbar)) {
      return React.cloneElement(navbar, {
        title,
        left: barLeft,
        right: barRight,
        ...navbar.props,
        ...NavbarProps,
        className: css(
          navbar.props.className,
          classes.navbar,
          NavbarProps?.className
        ),
        ref: handleNavbarRef
      });
    }

    const hasLeft = barLeft || showCloseButton || showCloseButton;

    if (!navbar && (title || hasLeft || barRight)) {
      return (
        <Navbar
          title={title}
          subTitle={subTitle}
          left={renderBarLeft()}
          right={barRight}
          {...NavbarProps}
          classes={{
            ...NavbarProps?.classes,
            root: css(classes.navbar, NavbarProps?.className)
          }}
          ref={handleNavbarRef}
        />
      );
    }

    return navbar;
  };

  return (
    <PageRoot
      ref={ref}
      as={component}
      className={css(classes.root, className)}
      {...rest}
    >
      {renderNavBar()}
      {footer && <PageFooter ref={toolbarRef}>{footer}</PageFooter>}

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
