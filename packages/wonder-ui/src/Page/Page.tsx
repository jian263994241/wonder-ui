import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { BaseProps, ClassNameMap } from '../styles/types';
import Navbar, { NavbarProps } from '../Navbar';
import CloseButton from '../CloseButton';
import IconButton from '../IconButton';
import ArrowForward from '../ArrowForward';

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
  paddingBottom: 'env(safe-area-inset-bottom)',
  '.WuiNavbar-root + &': {
    paddingTop: `calc(${theme.shape.navbarHeight}px + env(safe-area-inset-top))`
  }
}));

export interface PageProps extends BaseProps {
  classes?: ClassNameMap<'root' | 'content'>;
  NavbarProps?: Partial<NavbarProps>;
  onBack?: () => void;
  onClose?: () => void;
  showBackButton?: boolean;
  showCloseButton?: boolean;
  title?: React.ReactNode;
  contentRef?: React.Ref<HTMLDivElement>;
}

const Page: React.FC<PageProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiPage' });
  const {
    NavbarProps,
    children,
    className,
    contentRef,
    onBack,
    onClose,
    showBackButton = false,
    showCloseButton = false,
    title,
    ...rest
  } = props;

  const classes = useClasses({ ...props, name: 'WuiPage' });

  const barLeft = showBackButton ? (
    <IconButton edge="start" disabledTouchState onClick={onBack}>
      <ArrowForward size="small" direction="left" />
    </IconButton>
  ) : null;
  const barRight = showCloseButton ? (
    <CloseButton disabledTouchState edge="end" onClick={onClose} />
  ) : null;

  return (
    <PageRoot ref={ref} className={classes.root} {...rest}>
      {(title || barRight || barLeft || NavbarProps) && (
        <Navbar
          title={title}
          right={barRight}
          left={barLeft}
          {...NavbarProps}
        />
      )}
      <PageContent ref={contentRef} className={classes.content}>
        {children}
      </PageContent>
    </PageRoot>
  );
});

export default Page;
