import * as React from 'react';
import ArrowForward from '../ArrowForward';
import CloseButton from '../CloseButton';
import IconButton from '../IconButton';
import Navbar from '../Navbar/Navbar';
import styled from '../styles/styled';
import useRootCssVars from '../styles/useRootCssVars';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './PageClasses';
import {
  composeClasses,
  createCssVars,
  css,
  mergedRef
} from '@wonder-ui/utils';
import { useSize } from '@wonder-ui/hooks';
import type { PageProps, PageStyleProps } from './PageTypes';

const useClasses = (styleProps: PageStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    content: ['content'],
    header: ['header'],
    footer: ['footer']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const cssVars = createCssVars(COMPONENT_NAME, [
  'bg',
  'contentBg',
  'contentOverflowX',
  'contentOverflowY'
]);

const PageRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  boxSizing: 'border-box',
  position: 'absolute',
  width: '100%',
  height: '100%',
  maxHeight: '100%',
  display: 'flex',
  transform: 'none',
  zIndex: 1,
  background: cssVars.value('bg')
});

const PageContent = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Content'
})({
  overflowX: cssVars.value('contentOverflowX') as any,
  overflowY: cssVars.value('contentOverflowY') as any,
  background: cssVars.value('contentBg'),
  boxSizing: 'border-box',
  minHeight: '100%',
  maxHeight: '100%',
  width: '100%',
  position: 'relative',
  zIndex: 1,
  WebkitOverflowScrolling: 'touch'
});

const PageHeader = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Header'
})({
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: 2
});

const PageFooter = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Footer'
})({
  width: '100%',
  position: 'absolute',
  bottom: 0,
  zIndex: 2
});

const Page = React.forwardRef<HTMLDivElement, PageProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    NavbarProps,
    ContentProps,
    ContentRef,
    component,
    children,
    className,
    navbar,
    onBack,
    onClose,
    showBackButton = false,
    showCloseButton = false,
    subTitle,
    title,
    barLeft,
    barRight,
    header,
    footer,
    ...rest
  } = props;

  const classes = useClasses({ ...props });

  const headerRef = React.useRef<HTMLDivElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);

  const { height: headerHeight = 0 } = useSize(headerRef);
  const { height: footerHeight = 0 } = useSize(footerRef);

  useRootCssVars((theme) =>
    cssVars.style({
      bg: theme.palette.background.default,
      contentBg: 'transparent',
      contentOverflowX: 'unset',
      contentOverflowY: 'auto'
    })
  );

  const renderBarLeft = () => {
    return (
      <React.Fragment>
        {showBackButton && (
          <IconButton edge="start" onClick={onBack}>
            <ArrowForward direction="left" />
          </IconButton>
        )}
        {showCloseButton && (
          <CloseButton
            edge={showBackButton ? undefined : 'start'}
            onClick={onClose}
          />
        )}
        {barLeft}
      </React.Fragment>
    );
  };

  const navbar2 = (() => {
    if (navbar === false) return;

    const hasLeft = barLeft || showCloseButton || showBackButton;

    if (!navbar && (title || hasLeft || barRight)) {
      return (
        <Navbar
          title={title}
          subTitle={subTitle}
          left={renderBarLeft()}
          right={barRight}
          {...NavbarProps}
        />
      );
    }

    return navbar;
  })();

  return (
    <PageRoot
      ref={ref}
      as={component}
      className={css(classes.root, className)}
      {...rest}
    >
      {header && (
        <PageHeader className={classes.header} ref={headerRef}>
          {header}
        </PageHeader>
      )}

      {!header && navbar2 && (
        <PageHeader className={classes.header} ref={headerRef}>
          {navbar2}
        </PageHeader>
      )}

      {footer && (
        <PageFooter className={classes.footer} ref={footerRef}>
          {footer}
        </PageFooter>
      )}

      <PageContent
        {...ContentProps}
        className={css(classes.content, ContentProps?.className)}
        //@ts-expect-error
        ref={mergedRef(ContentRef, ContentProps?.ref)}
        style={{
          ...ContentProps?.style,
          paddingTop: headerHeight,
          paddingBottom: footerHeight
        }}
      >
        {children}
      </PageContent>
    </PageRoot>
  );
});

export default Page;
