import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { BaseProps, PickStyleProps } from '../styles/types';
import Transition, {
  BaseTransitionProps,
  TransitionStatus,
  TransitionTimeout
} from '../Transition';
import { reflow } from '../Transition/utils';
import {
  getAutoSizeDuration,
  getTransitionDurationFromElement
} from '@wonder-ui/utils';
import { duration } from '../styles/transitions';

export interface CollapseProps extends BaseProps, BaseTransitionProps {
  /**
   * @description 折叠尺寸
   * @default 0
   */
  collapsedSize?: string | number;
  /**
   * @description transition duration ms
   * @default 300
   */
  timeout?: 'atuo' | TransitionTimeout;
  /**
   * @description 动画过渡方向
   * @default vertical
   */
  direction?: 'horizontal' | 'vertical';
}

const CollapseRoot = styled('div', {
  name: 'WuiCollapse',
  slot: 'Root'
})<
  PickStyleProps<
    CollapseProps,
    'direction' | 'in' | 'collapsedSize',
    { state: TransitionStatus }
  >
>(({ theme, styleProps }) => {
  return {
    overflow: 'hidden',

    ...(styleProps.direction === 'horizontal'
      ? {
          width: 0,
          minWidth: styleProps.collapsedSize,
          transition: theme.transitions.create('width')
        }
      : {
          height: 0,
          minHeight: styleProps.collapsedSize,
          transition: theme.transitions.create('height')
        }),

    ...(styleProps.state === 'entered' && {
      height: 'auto',
      overflow: 'visible',
      ...(styleProps.direction === 'horizontal' && {
        width: 'auto'
      })
    }),

    ...(styleProps.state === 'exited' &&
      !styleProps.in &&
      styleProps.collapsedSize === '0px' && {
        visibility: 'hidden'
      }),

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none'
    }
  };
});

const Collapse: React.FC<CollapseProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiCollapse' });
  const {
    children,
    className,
    collapsedSize: collapsedSizeProp = '0px',
    component,
    direction = 'vertical',
    in: visible = false,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    timeout = duration.standard,
    ...rest
  } = props;

  const timer = React.useRef<any>();
  const isHorizontal = direction === 'horizontal';
  const dimension = isHorizontal ? 'width' : 'height';

  const scrollSize = isHorizontal ? 'scrollWidth' : 'scrollHeight';

  const collapsedSize =
    typeof collapsedSizeProp === 'number'
      ? `${collapsedSizeProp}px`
      : collapsedSizeProp;

  const styleProps = { direction, in: visible, collapsedSize };
  const classes = useClasses({ ...props, styleProps, name: 'WuiCollapse' });

  const getTransitionDuration = (node: any) => {
    let transitionDuration;

    if (!node) return 0;

    if (timeout === 'atuo') {
      transitionDuration = getAutoSizeDuration(
        node[scrollSize] - Number(collapsedSize.replace('px', ''))
      );
    } else {
      transitionDuration =
        typeof timeout === 'number'
          ? timeout
          : getTransitionDurationFromElement(node);
    }

    return transitionDuration;
  };

  const handleEnter: CollapseProps['onExit'] = (node) => {
    if (onEnter) {
      onEnter(node);
    }
  };

  const handleEntering: CollapseProps['onEntering'] = (node) => {
    node.style[dimension] = collapsedSize;
    node.style[dimension] = node[scrollSize] + 'px';

    node.style.transitionDuration = getTransitionDuration(node) + 'ms';
    reflow(node);
    if (onEntering) {
      onEntering(node);
    }
  };

  const handleEntered: CollapseProps['onEntered'] = (node) => {
    node.style[dimension] = collapsedSize != '0px' ? 'auto' : '';
    if (onEntered) {
      onEntered(node);
    }
  };

  const handleExit: CollapseProps['onExit'] = (node) => {
    node.style[dimension] = node.getBoundingClientRect()[dimension] + 'px';
    reflow(node);
    if (onExit) {
      onExit(node);
    }
  };

  const handleExiting: CollapseProps['onExiting'] = (node) => {
    node.style[dimension] = collapsedSize;
    node.style.transitionDuration = getTransitionDuration(node) + 'ms';
    if (onExiting) {
      onExiting(node);
    }
  };

  const handleExited: CollapseProps['onExited'] = (node) => {
    node.style[dimension] = collapsedSize != '0px' ? collapsedSize : '';
    if (onExited) {
      onExited(node);
    }
  };

  const addEndListener: CollapseProps['addEndListener'] = (node, next) => {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, getTransitionDuration(node));
    }
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <Transition
      in={visible}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExited={handleExited}
      onExiting={handleExiting}
      addEndListener={addEndListener}
      timeout={timeout != 'auto' ? (timeout as any) : null}
      ref={ref}
    >
      {(state, childProps) => {
        return (
          <CollapseRoot
            as={component}
            className={classes.root}
            styleProps={{ ...styleProps, state }}
            {...childProps}
            {...rest}
          >
            {children}
          </CollapseRoot>
        );
      }}
    </Transition>
  );
});

export default Collapse;
