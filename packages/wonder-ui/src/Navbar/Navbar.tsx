import * as React from 'react';
import styled from '../styles/styled';
import Typography from '../Typography';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { buttonClasses } from '../Button/buttonClasses';
import { css } from '@wonder-ui/utils';
import { navbarClasses, useClasses } from './NavbarClasses';
import { searchbarClasses } from '../Searchbar';
import { useForkRef, useSize } from '@wonder-ui/hooks';
export interface NavbarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /**
   * 去除背景
   */
  backgroundInVisible?: boolean;
  /**
   * css api
   */
  classes?: Partial<typeof navbarClasses>;
  /**
   * Position fixed
   */
  fixed?: boolean;
  /**
   * 左边的内容
   */
  left?: React.ReactNode;
  /**
   * 右边的内容
   */
  right?: React.ReactNode;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 副标题
   */
  subTitle?: React.ReactNode;
  /**
   * @ignore
   */
  ref?: React.Ref<HTMLElement>;
}

export interface NavbarStyleProps extends NavbarProps {}

const NavbarRoot = styled('div', {
  name: 'WuiNavbar',
  slot: 'Root'
})<{ styleProps: NavbarStyleProps }>(({ theme, styleProps }) => {
  return {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(17),
    color: theme.palette.text.primary,
    position: styleProps.fixed ? 'fixed' : 'relative',
    width: '100%',
    zIndex: 99,
    left: 0,
    right: 0,
    boxSizing: 'border-box',
    margin: 0,
    paddingTop: 'env(safe-area-inset-top)',
    userSelect: 'none',

    [`& .${searchbarClasses.bg}`]: {
      display: 'none'
    }
  };
});

const NavbarBg = styled('div', { name: 'WuiNavbar', slot: 'Bg' })(
  ({ theme }) => {
    const backgroundColor = theme.palette.background.paper;

    return {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      background: alpha(backgroundColor, 0.85),
      transitionProperty: 'transform',
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
      borderBottomWidth: 'thin',
      backdropFilter: 'saturate(180%) blur(20px)'
    };
  }
);

const NavbarInner = styled('div', {
  name: 'WuiNavbar',
  slot: 'Inner'
})(({ theme }) => ({
  position: 'relative',
  left: 0,
  bottom: 0,
  width: '100%',
  height: theme.typography.pxToRem(44),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  transform: 'translate3d(0,0,0)',
  padding:
    'env(safe-area-inset-top) env(safe-area-inset-right) 0 env(safe-area-inset-left)',
  zIndex: 10
}));

const NavbarTitle = styled(Typography, {
  name: 'WuiNavbar',
  slot: 'Title'
})(({ theme }) => ({
  position: 'relative',
  flexShrink: 10,
  fontWeight: 500,
  display: 'inline-block',
  lineHeight: 1.2,
  textAlign: 'center',
  fontSize: 'inherit',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  color: theme.palette.text.primary
}));

const NavbarSubTitle = styled('span', {
  name: 'WuiNavbar',
  slot: 'SubTitle'
})(({ theme }) => ({
  display: 'block',
  fontSize: '0.65em',
  fontWeight: 400,
  textAlign: 'center',
  lineHeight: 1,
  color: theme.palette.text.secondary
}));

const NavbarLeft = styled('span', {
  name: 'WuiNavbar',
  slot: 'Left'
})(({ theme }) => ({
  position: 'relative',
  alignSelf: 'stretch',
  zIndex: 10,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginRight: theme.spacing(1),
  [`& .${buttonClasses.root}`]: {
    alignSelf: 'stretch'
  }
}));

const NavbarRight = styled('span', {
  name: 'WuiNavbar',
  slot: 'Right'
})(({ theme }) => ({
  position: 'relative',
  alignSelf: 'stretch',
  zIndex: 10,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginLeft: theme.spacing(1),
  [`& .${buttonClasses.root}`]: {
    alignSelf: 'stretch'
  }
}));

const Navbar = React.forwardRef<HTMLElement, NavbarProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiNavbar' });
  const {
    backgroundInVisible = false,
    children,
    className,
    fixed = false,
    title,
    subTitle,
    left: barLeft,
    right: barRight,
    theme,
    ...rest
  } = props;

  const navbarNodeRef = React.useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(navbarNodeRef, ref);
  const navbarInnerNodeRef = React.useRef<HTMLDivElement>(null);
  const titleNodeRef = React.useRef<HTMLDivElement>(null);
  const leftNodeRef = React.useRef<HTMLDivElement>(null);
  const rightNodeRef = React.useRef<HTMLDivElement>(null);

  const { width: navbarInnerWidth2 = 0 } = useSize(navbarInnerNodeRef);
  const { width: titleWidth = 0 } = useSize(titleNodeRef);
  const { width: leftWidth = 0 } = useSize(leftNodeRef);
  const { width: rightWidth = 0 } = useSize(rightNodeRef);

  const titleLeft = React.useMemo(() => {
    const innerEl = navbarInnerNodeRef.current;

    if (!innerEl) {
      return 0;
    }

    const noLeft = !barLeft;
    const noRight = !barRight;
    const navbarStyles = window.getComputedStyle(innerEl);
    const paddingLeft = Number(navbarStyles.paddingLeft.replace('px', ''));
    const paddingRight = Number(navbarStyles.paddingRight.replace('px', ''));
    const navbarInnerWidth = navbarInnerWidth2 - paddingLeft - paddingRight;

    let currLeft = 0;
    let diff;
    if (noRight) {
      currLeft = navbarInnerWidth - titleWidth;
    }
    if (noLeft) {
      currLeft = 0;
    }
    if (!noLeft && !noRight) {
      currLeft = (navbarInnerWidth - rightWidth - titleWidth + leftWidth) / 2;
    }
    let requiredLeft = (navbarInnerWidth - titleWidth) / 2;
    if (navbarInnerWidth - leftWidth - rightWidth > titleWidth) {
      if (requiredLeft < leftWidth) {
        requiredLeft = leftWidth;
      }
      if (requiredLeft + titleWidth > navbarInnerWidth - rightWidth) {
        requiredLeft = navbarInnerWidth - rightWidth - titleWidth;
      }
      diff = requiredLeft - currLeft;
    } else {
      diff = 0;
    }

    let titleLeft = diff;
    if (theme.direction === 'rtl' && noLeft && noRight && title) {
      titleLeft = -titleLeft;
    }

    return titleLeft;
  }, [
    navbarInnerWidth2,
    titleWidth,
    leftWidth,
    rightWidth,
    barLeft,
    barRight,
    title
  ]);

  const styleProps = { ...props, fixed };

  const classes = useClasses(styleProps);

  return (
    <NavbarRoot
      theme={theme}
      className={css(className, classes.root)}
      {...rest}
      styleProps={styleProps}
      ref={handleRef}
    >
      {!backgroundInVisible && (
        <NavbarBg theme={theme} className={classes.background} />
      )}

      <NavbarInner
        theme={theme}
        ref={navbarInnerNodeRef}
        className={classes.inner}
      >
        {barLeft && (
          <NavbarLeft theme={theme} ref={leftNodeRef} className={classes.left}>
            {barLeft}
          </NavbarLeft>
        )}
        <NavbarTitle
          noWrap
          component="span"
          theme={theme}
          ref={titleNodeRef}
          style={{ left: titleLeft }}
          className={classes.title}
        >
          {title}
          {subTitle && (
            <NavbarSubTitle className={classes.subTitle}>
              {subTitle}
            </NavbarSubTitle>
          )}
        </NavbarTitle>
        {barRight && (
          <NavbarRight
            theme={theme}
            ref={rightNodeRef}
            className={classes.right}
          >
            {barRight}
          </NavbarRight>
        )}
      </NavbarInner>
      {children}
    </NavbarRoot>
  );
});

export default Navbar;
