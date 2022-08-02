import * as React from 'react';
import SafeArea from '../SafeArea/SafeArea';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  COMPONENT_NAME,
  navbarCssVars,
  useNavbarCSSvars
} from './NavbarClasses';
import { composeClasses, css } from '@wonder-ui/utils';
import { searchbarClasses } from '../Searchbar';
import { useForkRef, useSize } from '@wonder-ui/hooks';
import type { NavbarProps, NavbarStyleProps } from './NavbarTypes';
import { buttonCssVars } from '../Button';
import { iconButtonCssVars } from '../IconButton';

const useClasses = (styleProps: NavbarStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    inner: ['inner'],
    background: ['background'],
    title: ['title'],
    subTitle: ['subTitle'],
    left: ['left'],
    right: ['right']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const NavbarRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: NavbarStyleProps }>(({ styleProps }) => {
  return {
    position: styleProps.absolute ? 'absolute' : 'relative',
    width: '100%',

    zIndex: 99,
    left: 0,
    right: 0,
    boxSizing: 'border-box',
    backfaceVisibility: 'hidden',
    margin: 0,
    userSelect: 'none',
    color: navbarCssVars.value('textColor'),
    fontSize: navbarCssVars.value('fontSize'),

    [`& .${searchbarClasses.bg}`]: {
      display: 'none'
    }
  };
});

const NavbarBg = styled('div', { name: COMPONENT_NAME, slot: 'Bg' })({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 0,
  background: navbarCssVars.value('bgColor'),
  transitionProperty: 'transform',
  borderBottom: `thin solid ${navbarCssVars.value('borderColor')}`
});

const NavbarInner = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Inner'
})({
  position: 'relative',
  left: 0,
  bottom: 0,
  width: '100%',
  height: navbarCssVars.value('height'),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  transform: 'translate3d(0,0,0)',
  padding: `0 ${navbarCssVars.value('paddingHorizontal')}`,
  zIndex: 10,

  ...buttonCssVars.style({
    edge: navbarCssVars.value('paddingHorizontal'),
    borderWidth: 0,
    borderRadius: 0
  }),
  ...iconButtonCssVars.style({
    edge: navbarCssVars.value('paddingHorizontal')
  })
});

const NavbarTitle = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Title'
})({
  position: 'relative',
  display: 'inline-block',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  flexShrink: 10,
  paddingLeft: navbarCssVars.value('titlePaddingHorizontal'),
  paddingRight: navbarCssVars.value('titlePaddingHorizontal'),
  fontWeight: navbarCssVars.value('titleFontWeight'),
  fontSize: navbarCssVars.value('titleFontSize'),
  textAlign: navbarCssVars.value('titleTextAlign') as any,
  zIndex: 10
});

const NavbarSubTitle = styled('div', {
  name: COMPONENT_NAME,
  slot: 'SubTitle'
})({
  display: 'block',
  fontSize: navbarCssVars.value('subtitleFontSize'),
  fontWeight: 400,
  lineHeight: navbarCssVars.value('subtitleLineHeight'),
  color: navbarCssVars.value('subtitleTextColor'),
  textAlign: navbarCssVars.value('subtitleTextAlign') as any
});

const NavbarLeft = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Left'
})(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginRight: theme.spacing(1),
  height: '100%'
}));

const NavbarRight = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Right'
})(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginLeft: theme.spacing(1),
  height: '100%'
}));

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    backgroundInVisible = false,
    children,
    className,
    absolute = false,
    title,
    subTitle,
    left: barLeft,
    right: barRight,
    theme,
    safeArea,
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
      return -9999;
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

  const styleProps = { ...props, absolute };

  const classes = useClasses(styleProps);

  useNavbarCSSvars();

  return (
    <NavbarRoot
      className={css(className, classes.root)}
      {...rest}
      styleProps={styleProps}
      ref={handleRef}
    >
      {!backgroundInVisible && <NavbarBg className={classes.background} />}

      {safeArea && <SafeArea position="top" />}

      <NavbarInner ref={navbarInnerNodeRef} className={classes.inner}>
        {barLeft && (
          <NavbarLeft theme={theme} ref={leftNodeRef} className={classes.left}>
            {barLeft}
          </NavbarLeft>
        )}
        <NavbarTitle
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
