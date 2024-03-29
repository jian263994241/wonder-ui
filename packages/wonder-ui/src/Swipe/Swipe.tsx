import * as React from 'react';
import ArrowForward from '../ArrowForward';
import IconButton from '../IconButton';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  clamp,
  composeClasses,
  createArray,
  css,
  doubleRaf,
  globalClasses,
  isVisible
} from '@wonder-ui/utils';
import { COMPONENT_NAME } from './SwipeClasses';
import { ContextValueType, SwipeContext } from './SwipeContext';
import {
  useCreation,
  useDocumentVisibility,
  useEventCallback,
  useForkRef,
  useReactive,
  useTouch,
  useUpdateEffect,
  useResizeEffect
} from '@wonder-ui/hooks';
import type { SwipeState, SwipeProps, SwipeToOptions } from './SwipeTypes';

const useClasses = (styleProps: SwipeProps) => {
  const { classes, vertical } = styleProps;

  const slots = {
    root: ['root', vertical && 'vertical'],
    container: ['container'],
    item: ['item'],
    indicators: ['indicators'],
    indicator: ['indicator'],
    prevButton: ['prevButton'],
    nextBUtton: ['nextButton']
  };

  return composeClasses('WuiSwipe', slots, classes);
};

const SwipeRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: SwipeProps }>(({ styleProps }) => ({
  position: 'relative',
  overflow: 'hidden',
  userSelect: 'none',
  ...(styleProps.touchable && {
    cursor: 'grab'
  })
}));

const SwipeContainer = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Container'
})<{ styleProps: SwipeProps }>(({ styleProps }) => ({
  display: 'flex',
  height: '100%',
  ...(styleProps.vertical && {
    flexDirection: 'column'
  })
}));

const SwipePrevButton = styled(IconButton, {
  name: COMPONENT_NAME,
  slot: 'PrevButton'
})({
  position: 'absolute',
  left: 0,
  top: '50%',
  zIndex: 10,
  transform: 'translateY(-50%)'
});

const SwipeNextButton = styled(IconButton, {
  name: COMPONENT_NAME,
  slot: 'NextButton'
})({
  position: 'absolute',
  right: 0,
  top: '50%',
  zIndex: 10,
  transform: 'translateY(-50%)'
});

const SwipeIndicators = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Indicators'
})<{ styleProps: SwipeProps }>(({ styleProps }) => ({
  position: 'absolute',
  bottom: 12,
  left: '50%',
  display: 'flex',
  transform: 'translateX(-50%)',
  ...(styleProps.vertical && {
    top: '50%',
    bottom: 'auto',
    left: 12,
    flexDirection: 'column',
    transform: 'translateY(-50%)'
  })
}));

const SwipeIndicator = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Indicator'
})<{ styleProps: SwipeProps }>(({ theme, styleProps }) => ({
  width: 6,
  height: 6,
  borderRadius: '100%',
  opacity: 0.3,
  transition: theme.transitions.create(['opacity', 'background-color']),
  backgroundColor: theme.palette.light.main,
  '&>span': {
    display: 'none'
  },
  '&:not(:last-child)': {
    [styleProps.vertical ? 'marginBottom' : 'marginRight']: 6
  },
  [`&.${globalClasses.active}`]: {
    opacity: 1
  }
}));

const Swipe = React.forwardRef<HTMLDivElement, SwipeProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });

  const {
    actionRef,
    autoplay: allowAutoPlay = false,
    children,
    className,
    containerStyle,
    lazyRender = true,
    duration = 500,
    height,
    defaultIndex = 0,
    interval = 3000,
    loop = true,
    onIndexChange,
    onRenderIndicator,
    onRenderPrevButton,
    onRenderNextButton,
    showIndicators = true,
    showSwitchButtons = false,
    touchable = true,
    vertical = false,
    stopPropagation = true,
    width,
    ...rest
  } = props;

  const styleProps = {
    ...props,
    vertical,
    touchable,
    autoplay: allowAutoPlay,
    lazyRender,
    duration,
    defaultIndex,
    interval,
    loop,
    showIndicators,
    stopPropagation
  };

  const store = useCreation(() => {
    return new Map() as ContextValueType['store'];
  }, [children]);

  const count = React.Children.count(children);

  const rootRef = React.useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(rootRef, ref);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const state = useReactive<SwipeState>({
    rect: null,
    width: 0,
    height: 0,
    offset: 0,
    active: defaultIndex,
    activeIndex: defaultIndex,
    swiping: false
  });

  const size = useCreation(
    () => state[vertical ? 'height' : 'width'],
    [vertical, state.height, state.width]
  );
  const classes = useClasses(styleProps);

  const touch = useTouch();
  const delta = useCreation(
    () => (vertical ? touch.deltaY : touch.deltaX),
    [vertical]
  );

  const minOffset = useCreation(() => {
    if (state.rect) {
      const base = vertical ? state.rect.height : state.rect.width;
      return base - size * count;
    }
    return 0;
  }, [vertical, state.rect, size, count]);

  const maxCount = useCreation(
    () => Math.ceil(Math.abs(minOffset) / size),
    [minOffset, size]
  );

  const trackSize = useCreation(() => count * size, [count, size]);

  const getActiveIndex = (active: number) => (active + count) % count;

  const isCorrectDirection = () => {
    const expect = vertical ? 'vertical' : 'horizontal';
    return touch.direction.current === expect;
  };

  const trackStyle = useCreation(() => {
    const style: React.CSSProperties = {
      transitionDuration: `${state.swiping ? 0 : duration}ms`,
      transform: `translate${vertical ? 'Y' : 'X'}(${state.offset}px)`
    };

    if (size) {
      const mainAxis = vertical ? 'height' : 'width';
      const crossAxis = vertical ? 'width' : 'height';

      style[mainAxis] = `${trackSize}px`;
      style[crossAxis] = props[crossAxis] ? `${props[crossAxis]}px` : '';
    }

    return style;
  }, [width, height, vertical, duration, state.offset, state.swiping]);

  const getTargetActive = (pace: number) => {
    if (pace) {
      if (loop) {
        return clamp(state.active + pace, -1, count);
      }
      return clamp(state.active + pace, 0, maxCount);
    }
    return state.active;
  };

  const getTargetOffset = (targetActive: number, offset = 0) => {
    let currentPosition = targetActive * size;

    if (!loop) {
      currentPosition = Math.min(currentPosition, -minOffset);
    }

    let targetOffset = offset - currentPosition;
    if (!loop) {
      targetOffset = clamp(targetOffset, minOffset, 0);
    }

    return targetOffset;
  };

  const move = useEventCallback(
    ({
      pace = 0,
      offset = 0,
      emitChange
    }: {
      pace?: number;
      offset?: number;
      emitChange?: boolean;
    }) => {
      if (count <= 1) {
        return;
      }

      const { active } = state;
      const targetActive = getTargetActive(pace);
      const targetOffset = getTargetOffset(targetActive, offset);

      const exposes = Array.from(store.values());

      // auto move first and last swipe in loop mode
      if (loop) {
        if (exposes[0] && targetOffset !== minOffset) {
          const outRightBound = targetOffset < minOffset;
          exposes[0].offset = outRightBound ? trackSize : 0;
        }

        if (exposes[count - 1] && targetOffset !== 0) {
          const outLeftBound = targetOffset > 0;
          exposes[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      state.active = targetActive;
      state.offset = targetOffset;
      state.activeIndex = getActiveIndex(targetActive);

      if (emitChange && targetActive !== active) {
        onIndexChange?.(state.activeIndex);
      }
    }
  );

  const correctPosition = () => {
    state.swiping = true;

    if (state.active <= -1) {
      move({ pace: count });
    } else if (state.active >= count) {
      move({ pace: -count });
    }
  };

  // swipe to prev item
  const prev = useEventCallback(() => {
    correctPosition();
    touch.reset();

    doubleRaf(() => {
      state.swiping = false;
      move({
        pace: -1,
        emitChange: true
      });
    });
  });

  // swipe to next item
  const next = useEventCallback(() => {
    correctPosition();
    touch.reset();

    doubleRaf(() => {
      state.swiping = false;
      move({
        pace: 1,
        emitChange: true
      });
    });
  });

  const autoplayTimer = React.useRef<NodeJS.Timeout>();

  const stopAutoplay = () => clearTimeout(autoplayTimer.current!);

  const autoplay = useEventCallback(() => {
    stopAutoplay();
    if (allowAutoPlay && interval > 0 && count > 1) {
      autoplayTimer.current = setTimeout(() => {
        next();
        autoplay();
      }, +interval);
    }
  });

  const swipeTo = useEventCallback(
    (index: number, options: SwipeToOptions = {}) => {
      correctPosition();
      touch.reset();

      doubleRaf(() => {
        let targetIndex;
        if (loop && index === count) {
          targetIndex = state.active === 0 ? 0 : index;
        } else {
          targetIndex = index % count;
        }

        if (options.immediate) {
          doubleRaf(() => {
            state.swiping = false;
          });
        } else {
          state.swiping = false;
        }

        move({
          pace: targetIndex - state.active,
          emitChange: true
        });
      });
    }
  );

  // initialize swipe position
  const initialize = (active = +defaultIndex) => {
    const { current: root } = rootRef;
    if (!root) {
      return;
    }

    if (isVisible(root)) {
      const rect = {
        width: root.offsetWidth,
        height: root.offsetHeight
      };

      state.rect = rect;
      state.width = +(width ?? rect.width);
      state.height = +(height ?? rect.height);
    }

    if (count) {
      active = Math.min(count - 1, active);
    }

    state.active = active;
    state.activeIndex = getActiveIndex(active);
    state.swiping = true;
    state.offset = getTargetOffset(active);
    store.forEach((swipe) => {
      swipe.offset = 0;
    });
  };

  const resize = () => initialize(state.active);

  const touchStartTime = React.useRef<number>();

  const onTouchStart = useEventCallback((event: React.TouchEvent) => {
    if (!touchable) return;

    touch.start(event);
    touchStartTime.current = Date.now();

    stopAutoplay();
    correctPosition();
  });

  const onTouchMove = useEventCallback((event: React.TouchEvent) => {
    if (touchable && state.swiping) {
      touch.move(event);

      if (isCorrectDirection()) {
        move({ offset: delta.current });
      }
    }
  });

  const onTouchEnd = useEventCallback(() => {
    if (!touchable || !state.swiping) {
      return;
    }

    const duration = Date.now() - touchStartTime.current!;
    const speed = delta.current / duration;
    const shouldSwipe =
      Math.abs(speed) > 0.25 || Math.abs(delta.current) > size / 2;

    if (shouldSwipe && isCorrectDirection()) {
      const offset = vertical ? touch.offsetY.current : touch.offsetX.current;

      let pace = 0;

      if (loop) {
        pace = offset > 0 ? (delta.current > 0 ? -1 : 1) : 0;
      } else {
        pace = -Math[delta.current > 0 ? 'ceil' : 'floor'](
          delta.current / size
        );
      }

      move({
        pace,
        emitChange: true
      });
    } else if (delta.current) {
      move({ pace: 0 });
    }

    state.swiping = false;
    autoplay();
  });

  React.useImperativeHandle(
    actionRef,
    () => ({
      prev,
      next,
      resize,
      swipeTo,
      active: state.active
    }),
    [state.active]
  );

  const documentVisible = useDocumentVisibility();

  useUpdateEffect(() => {
    swipeTo(defaultIndex);
  }, [defaultIndex]);

  React.useEffect(() => {
    initialize(state.active);

    if (allowAutoPlay && documentVisible === 'visible') {
      autoplay();
    } else {
      stopAutoplay();
    }

    return () => {
      stopAutoplay();
    };
  }, [allowAutoPlay, documentVisible, count]);

  useResizeEffect(resize, rootRef);

  return (
    <SwipeContext.Provider value={{ props: styleProps, state, store }}>
      <SwipeRoot
        className={css(classes.root, className)}
        styleProps={styleProps}
        ref={handleRef}
        {...rest}
      >
        <SwipeContainer
          ref={containerRef}
          styleProps={styleProps}
          className={classes.container}
          style={{ ...containerStyle, ...trackStyle }}
          onTouchStartCapture={onTouchStart}
          onTouchMoveCapture={onTouchMove}
          onTouchEndCapture={onTouchEnd}
          onTouchCancelCapture={onTouchEnd}
        >
          {children}
        </SwipeContainer>

        {showSwitchButtons && (
          <React.Fragment>
            {onRenderPrevButton ? (
              onRenderPrevButton({ action: prev })
            ) : (
              <SwipePrevButton
                onClick={prev}
                color="light"
                className={classes.prevButton}
              >
                <ArrowForward direction="left" />
              </SwipePrevButton>
            )}

            {onRenderNextButton ? (
              onRenderNextButton({ action: next })
            ) : (
              <SwipeNextButton
                onClick={next}
                color="light"
                className={classes.nextBUtton}
              >
                <ArrowForward direction="right" />
              </SwipeNextButton>
            )}
          </React.Fragment>
        )}

        {showIndicators &&
          (onRenderIndicator ? (
            onRenderIndicator(state.activeIndex, count)
          ) : (
            <SwipeIndicators
              styleProps={styleProps}
              className={classes.indicators}
            >
              {createArray(count, (index) => index).map((index) => (
                <SwipeIndicator
                  styleProps={styleProps}
                  onClick={() => swipeTo(index)}
                  className={css(classes.indicator, {
                    [globalClasses.active]: state.activeIndex === index
                  })}
                  key={index}
                >
                  <span>{index}</span>
                </SwipeIndicator>
              ))}
            </SwipeIndicators>
          ))}
      </SwipeRoot>
    </SwipeContext.Provider>
  );
});

export default Swipe;
