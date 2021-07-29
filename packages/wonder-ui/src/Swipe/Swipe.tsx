import * as React from 'react';
import ArrowForward from '../ArrowForward';
import ButtonBase from '../ButtonBase';
import IconButton from '../IconButton';
import styled from '../styles/styled';
import SwipeableViews from 'react-swipeable-views';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { autoPlay, virtualize } from 'react-swipeable-views-utils';
import { composeClasses, css, generateUtilityClasses } from '@wonder-ui/utils';
import { useEventCallback, useReactive } from '@wonder-ui/hooks';

const COMPONENT_NAME = 'WuiSwipe';

export const swipeClasses = generateUtilityClasses('WuiSwipe', [
  'root',
  'swipe',
  'slide',
  'dots',
  'dot',
  'dotActive',
  'prevArrow',
  'nextArrow'
]);

const useClasses = (styleProps: SwipeProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    swipe: ['swipe'],
    slide: ['slide'],
    dots: ['dots'],
    dot: ['dot'],
    dotActive: ['dotActive'],
    prevArrow: ['prevArrow'],
    nextArrow: ['nextArrow']
  };

  return composeClasses('WuiSwipe', slots, classes);
};

export function mod(n: number, m: number) {
  const q = n % m;
  return q < 0 ? q + m : q;
}

type OnChangeIndexCallback = (index: number, indexLatest: number) => void;
type OnSwitchingCallback = (index: number, type: 'move' | 'end') => void;
type OnTransitionEndCallback = () => void;
type SlideRendererCallback = (render: {
  index: number;
  key: number;
}) => React.ReactNode;

interface SwipeAction {
  slickGoTo(slideNumber: number, dontAnimate?: boolean): void;
  slickNext(): void;
  slickPrev(): void;
}

export interface SwipeProps {
  actionRef?: React.Ref<SwipeAction | null>;

  arrows?: boolean;
  classes?: Partial<typeof swipeClasses>;
  className?: string;
  children?: React.ReactNode;
  dots?: boolean;
  style?: React.CSSProperties;

  animateHeight?: boolean;
  animateTransitions?: boolean;
  axis?: 'x' | 'x-reverse' | 'y' | 'y-reverse';
  containerStyle?: React.CSSProperties;
  disabled?: boolean;
  disableLazyLoading?: boolean;
  enableMouseEvents?: boolean;
  hysteresis?: number;
  ignoreNativeScroll?: boolean;

  initialSlide?: number;
  onChangeIndex?: OnChangeIndexCallback;
  onSwitching?: OnSwitchingCallback;
  onTransitionEnd?: OnTransitionEndCallback;
  resistance?: boolean;
  slideStyle?: React.CSSProperties;
  springConfig?: { duration: string; easeFunction: string; delay: string };
  slideClassName?: string;
  threshold?: number;

  //WithAutoPlayProps
  autoplay?: boolean;
  direction?: 'incremental' | 'decremental';
  interval?: number;
  //
  infinite?: boolean;

  onRenderDots?(
    activeSlideNumber: number,
    action: SwipeAction
  ): React.ReactNode;

  onRenderPrevArrow?(
    activeSlideNumber: number,
    action: SwipeAction
  ): React.ReactNode;

  onRenderNextArrow?(
    activeSlideNumber: number,
    action: SwipeAction
  ): React.ReactNode;
}

const SwipeRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  position: 'relative',
  display: 'block',
  boxSizing: 'border-box',
  userSelect: 'none',
  WebkitTouchCallout: 'none',
  touchAction: 'pan-y',
  WebkitTapHighlightColor: 'transparent'
});

const AVSwipeableViews = autoPlay(virtualize(SwipeableViews));

const SwipeSwipe = styled(AVSwipeableViews, {
  name: COMPONENT_NAME,
  slot: 'Swipe'
})({});

const SwipeArrowButton = styled(IconButton, {
  name: COMPONENT_NAME,
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

const SwipeDots = styled('div', { name: COMPONENT_NAME, slot: 'Dots' })({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  listStyle: 'none',
  textAlign: 'center',
  bottom: 10,
  margin: 0,
  padding: 0
});

const SwipeDot = styled(ButtonBase, { name: COMPONENT_NAME, slot: 'Dot' })(
  ({ theme }) => ({
    fontSize: 0,
    lineHeight: 0,
    display: 'block',
    padding: 3,
    textIndent: -999,
    cursor: 'pointer',
    color: 'transparent',
    border: 0,
    outline: 'none',
    background: alpha(theme.palette.common.white, 0.6),
    borderRadius: '50%',
    marginRight: theme.spacing(0.5),
    '&:last-child': {
      marginRight: 0
    },
    [`&.${swipeClasses.dotActive}`]: {
      background: theme.palette.common.white
    }
  })
);

const Swipe = React.forwardRef<HTMLDivElement, SwipeProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });

  const {
    actionRef,
    animateHeight = true,
    animateTransitions,
    autoplay = false,
    infinite = false,
    children,
    className,
    disabled = false,
    dots = false,
    arrows = false,
    slideClassName,
    initialSlide = 0,
    onChangeIndex,
    onRenderDots,
    onRenderNextArrow,
    onRenderPrevArrow,
    ...rest
  } = props;

  const childrenList = React.Children.toArray(children);

  const state = useReactive({
    index: initialSlide,
    animateTransitions: true
  });

  const getSlideIndex = () => mod(state.index, childrenList.length);

  const styleProps = { ...props, disabled };
  const classes = useClasses(styleProps);

  const slideIndex = mod(state.index, childrenList.length);

  const action: SwipeAction = {
    slickGoTo: (index: number, dontAnimate?: boolean) => {
      state.index = index - getSlideIndex() + state.index;
      if (dontAnimate) {
        state.animateTransitions = false;

        setTimeout(() => {
          state.animateTransitions = true;
        }, 0);
      }
    },
    slickPrev: () => {
      let currentIndex = state.index - 1;
      if (!infinite && currentIndex < 0) {
        currentIndex = 0;
      }

      state.index = currentIndex;
    },
    slickNext: () => {
      let currentIndex = state.index + 1;
      if (!infinite && currentIndex > childrenList.length - 1) {
        currentIndex = childrenList.length - 1;
      }

      state.index = currentIndex;
    }
  };

  React.useImperativeHandle(actionRef, () => action, [state]);

  const handleChangeIndex: OnChangeIndexCallback = useEventCallback(
    (index, indexLastest) => {
      state.index = index;
      onChangeIndex?.(index, indexLastest);
    }
  );

  const renderSlide: SlideRendererCallback = useEventCallback(
    ({ index, key }) => {
      const childIndex = mod(index, childrenList.length);

      const child = childrenList[childIndex];

      if (child && React.isValidElement(child)) {
        return React.cloneElement(child, { key });
      }

      return null;
    }
  );

  return (
    <SwipeRoot className={css(classes.root, className)}>
      <SwipeSwipe
        animateHeight={animateHeight}
        animateTransitions={
          animateTransitions != undefined
            ? animateTransitions
            : state.animateTransitions
        }
        autoplay={disabled ? false : autoplay}
        index={state.index}
        className={classes.swipe}
        disabled={disabled}
        slideClassName={css(classes.slide, slideClassName)}
        onChangeIndex={handleChangeIndex}
        slideCount={!infinite ? childrenList.length : undefined}
        {...rest}
        slideRenderer={renderSlide}
      />

      {arrows && (
        <React.Fragment>
          {onRenderPrevArrow ? (
            onRenderPrevArrow(slideIndex, action)
          ) : (
            <SwipeArrowButton
              color="light"
              className={classes.prevArrow}
              onClick={action.slickPrev}
            >
              <ArrowForward direction="left" />
            </SwipeArrowButton>
          )}

          {onRenderNextArrow ? (
            onRenderNextArrow(slideIndex, action)
          ) : (
            <SwipeArrowButton
              color="light"
              className={classes.nextArrow}
              onClick={action.slickNext}
            >
              <ArrowForward direction="right" />
            </SwipeArrowButton>
          )}
        </React.Fragment>
      )}

      {dots && onRenderDots ? (
        onRenderDots(slideIndex, action)
      ) : (
        <SwipeDots className={classes.dots}>
          {childrenList.map((_, key) => (
            <SwipeDot
              key={key}
              onClick={() => action.slickGoTo(key)}
              className={css(classes.dot, {
                [swipeClasses.dotActive]: slideIndex == key
              })}
            >
              {key}
            </SwipeDot>
          ))}
        </SwipeDots>
      )}
    </SwipeRoot>
  );
});

export default Swipe;
