import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import { emphasize } from '../styles/colorManipulator';
import type { BaseProps, ClassNameMap } from '../styles/types';
import { useSize, useForkRef } from '@wonder-ui/hooks';
import getComputedStyle from 'dom-helpers/getComputedStyle';

const NavbarRoot = styled('div', {
  name: 'WuiNavbar',
  slot: 'Root'
})(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(17),
  color: theme.palette.text.primary,
  position: 'relative',
  width: '100%',
  zIndex: 99,
  left: 0,
  right: 0,
  boxSizing: 'border-box',
  margin: 0,
  height: `calc(${theme.shape.navbarHeight}px + env(safe-area-inset-top))`,
  userSelect: 'none'
}));

const NavbarBg = styled('div', { name: 'WuiNavbar', slot: 'Bg' })(
  ({ theme }) => {
    const backgroundColor = emphasize(theme.palette.background.default, 0.02);
    return {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      background: backgroundColor,
      transitionProperty: 'transform',
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
      borderBottomWidth: 'thin'
    };
  }
);

const NavbarInner = styled('div', {
  name: 'WuiNavbar',
  slot: 'Inner'
})({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  transform: 'translate3d(0,0,0)',
  padding:
    'env(safe-area-inset-top) calc(12px + env(safe-area-inset-right)) 0 calc(12px + env(safe-area-inset-left))',
  zIndex: 10
});

const NavbarTitle = styled('div', {
  name: 'WuiNavbar',
  slot: 'Title'
})({
  position: 'relative',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flexShrink: 10,
  fontWeight: 600,
  display: 'inline-block',
  lineHeight: 1.2,
  textAlign: 'center',
  fontSize: 'inherit',
  paddingLeft: 16,
  paddingRight: 16
});

const NavbarSubTitle = styled('div', {
  name: 'WuiNavbar',
  slot: 'SubTitle'
})({
  display: 'block',
  fontSize: '0.65em',
  fontWeight: 400,
  textAlign: 'center',
  lineHeight: 1,
  color: 'rgba(0, 0, 0, 0.6)'
});

const NavbarLeft = styled('div', {
  name: 'WuiNavbar',
  slot: 'Left'
})({
  position: 'relative',
  zIndex: 10,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginRight: 10
});

const NavbarRight = styled('div', {
  name: 'WuiNavbar',
  slot: 'Right'
})({
  position: 'relative',
  zIndex: 10,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginLeft: 10
});

export interface NavbarProps extends BaseProps {
  /**
   * css api
   */
  classes?: ClassNameMap<'root' | 'bg' | 'inner' | 'left' | 'right' | 'title'>;
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
}

const Navbar: React.FC<NavbarProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiNavbar' });
  const {
    children,
    className,
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
    const navbarStyles = getComputedStyle(innerEl);
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
  }, [navbarInnerWidth2, titleWidth, leftWidth, rightWidth]);

  const classes = useClasses({ ...props, name: 'WuiNavbar' });

  return (
    <NavbarRoot
      theme={theme}
      ref={handleRef}
      className={classes.root}
      {...rest}
    >
      <NavbarBg theme={theme} className={classes.bg} />
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
          theme={theme}
          ref={titleNodeRef}
          style={{ left: titleLeft }}
          className={classes.title}
        >
          {title}
          {subTitle && <NavbarSubTitle>{subTitle}</NavbarSubTitle>}
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
        {children}
      </NavbarInner>
    </NavbarRoot>
  );
});

export default Navbar;