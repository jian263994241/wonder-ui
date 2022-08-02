import * as React from 'react';
import Fade from '../Fade';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  css,
  forwardRef,
  generateUtilityClasses,
  getScrollTop,
  scrollTop
} from '@wonder-ui/utils';
import {
  useEventCallback,
  useEventListener,
  useForkRef,
  useSafeState,
  useScrollParent
} from '@wonder-ui/hooks';

const COMPONENT_NAME = 'WuiBackTop';

const backTopClasses = generateUtilityClasses(COMPONENT_NAME, ['root']);

export interface BackTopProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.EventHandler<React.MouseEvent>;

  /**
   * 回到顶部所需时间（ms）
   * @default 300
   */
  duration?: number;
  /**
   * 滚动高度达到此参数值才出现
   * @default 400
   */
  visibilityHeight?: number;
}

function scrollTo(element: Element | Window, to: number, duration: number) {
  var start = getScrollTop(element),
    change = to - start,
    currentTime = 0,
    increment = 16;

  var animateScroll = function () {
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, duration);
    scrollTop(element as Element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  function easeInOutQuad(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
}

const BackTopRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({
  position: 'fixed',
  boxSizing: 'border-box',
  zIndex: theme.zIndex.fixed,
  bottom: 50,
  right: 20,
  cursor: 'pointer',
  display: 'flex'
}));

const BackTop = forwardRef<HTMLDivElement, BackTopProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    className,
    children,
    duration = 300,
    visibilityHeight = 400,
    onClick,
    ...rest
  } = props;
  const [visible, setVisible] = useSafeState(false);

  const rootRef = React.useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(rootRef, ref);
  const scrollElementRef = useScrollParent(rootRef);

  const handleClick = useEventCallback((e: React.MouseEvent) => {
    scrollTo(scrollElementRef.current!, 0, duration);
    onClick?.(e);
  });

  useEventListener(scrollElementRef, 'scroll', () => {
    const scrollTop = getScrollTop(scrollElementRef.current!);

    setVisible(() => {
      if (scrollTop >= visibilityHeight) {
        return true;
      }
      return false;
    });
  });

  return (
    <BackTopRoot
      ref={handleRef}
      className={css(backTopClasses.root, className)}
      onClick={handleClick}
      {...rest}
    >
      <Fade in={visible} propagationEvent={[]}>
        {children}
      </Fade>
    </BackTopRoot>
  );
});

export default BackTop;
