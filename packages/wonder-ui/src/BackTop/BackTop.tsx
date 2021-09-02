import * as React from 'react';
import Fade from '../Fade';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { forwardRef, getScrollTop, on, scrollTop } from '@wonder-ui/utils';
import {
  useEventCallback,
  useForkRef,
  useSafeState,
  useScrollParent
} from '@wonder-ui/hooks';

const COMPONENT_NAME = 'WuiBackTop';

export interface BackTopProps {
  /**
   * 额外的 CSS className
   */
  className?: string;
  /**
   * 回到顶部所需时间（ms）
   * @default 450
   */
  duration?: number;
  /**
   * 额外的样式
   */
  style?: React.CSSProperties;
  /**
   * 滚动高度达到此参数值才出现
   * @default 400
   */
  visibilityHeight?: number;
  /**
   * 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
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
  right: 100,
  cursor: 'pointer',
  display: 'flex',
  transition: theme.transitions.create('opacity'),
  opacity: 1,
  [theme.breakpoints.down('md')]: {
    right: 60
  },
  [theme.breakpoints.down('sm')]: {
    right: 20
  }
}));

const BackTop = forwardRef<HTMLDivElement, BackTopProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    children,
    duration = 450,
    visibilityHeight = 400,
    onClick,
    ...rest
  } = props;
  const [visible, setVisible] = useSafeState(false);

  const rootRef = React.useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(rootRef, ref);
  const scrollElementRef = useScrollParent(rootRef);

  const handleScroll = useEventCallback((e) => {
    const { current: scrollElement } = scrollElementRef;

    const scrollTop = getScrollTop(scrollElement!);

    if (scrollTop >= visibilityHeight) {
      !visible && setVisible(true);
    } else {
      visible && setVisible(false);
    }
  });

  const handleClick = useEventCallback((e) => {
    const { current: scrollElement } = scrollElementRef;

    scrollTo(scrollElement!, 0, duration);

    if (onClick) {
      onClick(e);
    }
  });

  React.useEffect(() => {
    const { current: root } = rootRef;
    const { current: scrollElement } = scrollElementRef;

    if (root && scrollElement) {
      return on(scrollElement, 'scroll', handleScroll);
    }
  }, []);

  return (
    <Fade in={visible}>
      <BackTopRoot {...rest} onClick={handleClick} ref={handleRef}>
        {children}
      </BackTopRoot>
    </Fade>
  );
});

export default BackTop;
