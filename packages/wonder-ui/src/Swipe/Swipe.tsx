import * as React from 'react';
import ArrowForward from '../ArrowForward';
import ButtonBase from '../ButtonBase';
import IconButton from '../IconButton';
import Slider, { Settings } from 'react-slick';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { swipeClasses, useClasses } from './SwipeClasses';

const SwipeRoot = styled(Slider, {
  name: 'WuiSwipe',
  slot: 'Root'
})<Settings>({
  position: 'relative',
  display: 'block',
  boxSizing: 'border-box',
  userSelect: 'none',
  WebkitTouchCallout: 'none',
  touchAction: 'pan-y',
  WebkitTapHighlightColor: 'transparent',
  '& > .slick-list': {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    margin: 0,
    padding: 0
  },
  '& > .slick-list:focus': {
    outline: 'none'
  },
  '& > .slick-list.dragging': {
    cursor: 'pointer'
  },
  '& .slick-track, & .slick-list': {
    transform: 'translate3d(0, 0, 0)'
  },
  '& .slick-track': {
    position: 'relative',
    display: 'block',
    transform: 'translate3d(0, 0, 0)',
    top: 0,
    left: 0
  },
  '& .slick-track:before': {
    display: 'table',
    content: '""'
  },
  '& .slick-track:after': {
    display: 'table',
    content: '""',
    clear: 'both'
  },
  '& .slick-slide': {
    display: 'none',
    float: 'left',
    height: '100%',
    minHeight: 1
  },
  '&.slick-vertical .slick-slide': {
    display: 'block',
    height: 'auto',
    border: '1px solid transparent'
  },
  '&[dir=rtl] .slick-slide': {
    float: 'right'
  },
  '& .slick-slide img': {
    display: 'block'
  },
  '& .slick-slide.slick-loading img': {
    display: 'none'
  },
  '& .slick-slide.dragging img': {
    pointerEvents: 'none'
  },
  '&.slick-initialized .slick-slide': {
    display: 'block'
  },
  '&.slick-loading .slick-track': {
    visibility: 'hidden'
  },
  '&.slick-loading .slick-slide': {
    visibility: 'hidden'
  },
  '& .slick-arrow.slick-hidden': {
    display: 'none'
  },
  '& > .slick-dots': {
    position: 'absolute',
    display: 'block',
    width: '100%',
    listStyle: 'none',
    textAlign: 'center',
    bottom: 10,
    margin: 0,
    padding: 0
  },
  '& > .slick-dots li': {
    position: 'relative',
    display: 'inline-block',
    margin: '0 5px',
    padding: 0
  }
});

const SwipeArrowButton = styled(IconButton, {
  name: 'WuiSwipe',
  slot: 'Arrow',
  shouldForwardProp: (prop: string) =>
    prop !== 'currentSlide' && prop !== 'slideCount' && prop !== 'next'
})({
  position: 'absolute',
  top: '50%',
  zIndex: 1,
  transform: 'translateY(-50%)',
  [`&.${swipeClasses.nextArrow}`]: {
    right: 0
  },
  [`&.${swipeClasses.prevArrow}`]: {
    left: 0
  }
});

const SwipeDot = styled(ButtonBase, { name: 'WuiSwipe', slot: 'Dot' })(
  ({ theme }) => ({
    fontSize: 0,
    lineHeight: 0,
    display: 'block',
    padding: 3,
    cursor: 'pointer',
    color: 'transparent',
    border: 0,
    outline: 'none',
    background: alpha(theme.palette.common.white, 0.6),
    borderRadius: '50%',
    '.slick-active > &': {
      background: theme.palette.common.white
    }
  })
);

export interface SwipeProps extends Settings {
  classes?: Partial<typeof swipeClasses>;
  ref?: React.Ref<Slider>;
}

const Swipe: React.FC<SwipeProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiSwipe' });

  const classes = useClasses(props);

  const {
    arrows = false,
    customPaging = (index) => <SwipeDot key={index} />,
    children,
    className,
    dots = false,
    infinite = false,
    prevArrow = (
      <SwipeArrowButton
        size="small"
        color="light"
        classes={{ root: classes.prevArrow }}
        disableRipple
      >
        <ArrowForward direction="left" />
      </SwipeArrowButton>
    ),
    nextArrow = (
      <SwipeArrowButton
        size="small"
        color="light"
        classes={{ root: classes.nextArrow }}
        disableRipple
      >
        <ArrowForward direction="right" />
      </SwipeArrowButton>
    ),
    ...rest
  } = props;

  return (
    <SwipeRoot
      arrows={arrows}
      className={classes.root}
      customPaging={customPaging}
      dots={dots}
      infinite={infinite}
      nextArrow={nextArrow}
      prevArrow={prevArrow}
      {...rest}
      ref={ref}
    >
      {children}
    </SwipeRoot>
  );
});

export default Swipe;
