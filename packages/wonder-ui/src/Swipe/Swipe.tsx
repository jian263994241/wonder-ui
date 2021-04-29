import * as React from 'react';
import Swipejs from 'swipejs';
import useThemeProps from '../styles/useThemeProps';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import type { BaseProps, ClassNameMap } from '../styles/types';

const SwipeRoot = styled('div', {
  name: 'WuiSwipe',
  slot: 'Root'
})({
  overflow: 'hidden',
  visibility: 'hidden',
  position: 'relative'
});

const SwipeInner = styled('div', {
  name: 'WuiSwipe',
  slot: 'Inner'
})({
  overflow: 'hidden',
  position: 'relative',
  '& > div': {
    float: 'left',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  }
});

interface SwipeOptions {
  /**
   * index position at which Swipe should start
   * @default 0
   */
  startSlide?: number;
  /**
   * speed of prev and next transitions in milliseconds.
   * @default 400
   */
  speed?: number;
  /**
   * when specified, start an auto-playing slideshow (time in milliseconds between slide change).
   * @default 3000
   */
  auto?: number;
  /**
   * listen to mouse events in addition to the touch events
   * @default false
   */
  draggable?: boolean;
  /**
   * create an infinite feel with no endpoints.
   */
  continuous?: boolean;
  /**
   * auto restart slideshow after user's touch event or next/prev calls.
   */
  autoRestart?: boolean;
  /**
   * prevent any touch events on this container from scrolling the page.
   */
  disableScroll?: boolean;
  /**
   * stop event propagation.
   */
  stopPropagation?: boolean;
  /**
   * ignore touch events on any element matching this selector
   * @default null
   */
  ignore?: string;
  /**
   * runs at slide change. Three parameters are passed to the function: index (the current slide index)elem (the current slide element) and dir (direction: 1 for left or backward-1 for right or forward).
   */
  callback?: (index: number, elem: HTMLElement, dir: number) => void;
  /**
   * runs at the end of a slide transition. Two parameters are passed to the function: index (the current slide index) and elem (the current slide element).
   */
  transitionEnd?: (index: number, elem: HTMLElement) => void;
}

export interface SwipeProps extends BaseProps, SwipeOptions {
  classes?: ClassNameMap<'root' | 'inner'>;
  disabled?: boolean;
  ref?: React.Ref<
    Pick<Swipejs, 'next' | 'prev' | 'getNumSlides' | 'getPos' | 'slide'>
  >;
}

const noop = () => {};

const Swipe: React.FC<SwipeProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiSwipe' });
  const {
    children,
    className,
    disabled = false,
    auto = 3000,
    startSlide = 0,
    speed = 400,
    draggable = true,
    autoRestart = true,
    continuous = true,
    disableScroll = false,
    stopPropagation = false,
    ignore,
    callback,
    transitionEnd,
    ...rest
  } = props;

  const rootRef = React.useRef<HTMLDivElement>(null);
  const [slider, setSlider] = React.useState<Swipejs>({
    prev: noop,
    next: noop,
    getPos: () => 0,
    getNumSlides: () => 0,
    slide: noop,
    restart: noop,
    stop: noop,
    setup: noop,
    kill: noop,
    disable: noop,
    enable: noop
  });

  const classes = useClasses({ ...props, name: 'WuiSwipe' });

  React.useImperativeHandle(
    ref,
    () => ({
      next: () => {
        slider.next();
      },
      prev: () => {
        slider.prev();
      },
      slide: (index: number, duration: number = speed) => {
        slider.slide(index, duration);
      },
      getNumSlides: () => {
        return slider.getNumSlides();
      },
      getPos: () => {
        return slider.getPos();
      }
    }),
    [slider]
  );

  React.useEffect(() => {
    if (!rootRef.current) return;

    const { current: root } = rootRef;

    setTimeout(() => {
      const slider = new Swipejs(root);
      setSlider(slider);
    }, 0);

    return () => {
      slider.kill();
    };
  }, []);

  React.useEffect(() => {
    slider.setup({
      startSlide,
      auto,
      draggable,
      autoRestart,
      continuous,
      disableScroll,
      stopPropagation,
      ignore,
      callback,
      transitionEnd
    });
  }, [
    slider,
    startSlide,
    auto,
    draggable,
    autoRestart,
    continuous,
    disableScroll,
    stopPropagation,
    ignore,
    callback,
    transitionEnd
  ]);

  React.useEffect(() => {
    if (disabled) {
      slider.disable();
    } else {
      slider.enable();
    }
  }, [slider, disabled]);

  React.useEffect(() => {
    if (auto > 0) {
      slider.restart();
    } else {
      slider.stop();
    }
  }, [slider, auto]);

  return (
    <SwipeRoot {...rest} ref={rootRef} className={classes.root}>
      <SwipeInner>{children}</SwipeInner>
    </SwipeRoot>
  );
});

export default Swipe;
