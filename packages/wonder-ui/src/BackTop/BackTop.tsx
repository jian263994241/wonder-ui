import * as React from 'react';
import Fade from '../Fade';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { forwardRef, getScrollTop, on, setScrollTop } from '@wonder-ui/utils';
import {
  useEventCallback,
  useForkRef,
  useScrollParent
} from '@wonder-ui/hooks';

const componentName = 'WuiBackTop';

export interface BackTopProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
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
    setScrollTop(element, val);
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
  name: componentName,
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
  const props = useThemeProps({ props: inProps, name: componentName });
  const {
    children,
    duration = 450,
    visibilityHeight = 400,
    onClick,
    ...rest
  } = props;
  const [visible, setVisible] = React.useState(false);

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
