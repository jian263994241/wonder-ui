import * as React from 'react';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyleProps } from '../styles/types';
import { Transition, TransitionStatus } from 'react-transition-group';
import clsx from 'clsx';
import { getTransitionDurationFromElement } from '@wonder-ui/utils';
import { useForkRef } from '@wonder-ui/hooks';

const reflow = (node: HTMLElement) => node.offsetHeight;

export interface CollapseStyleProps {
  collapsedSize?: string;
  direction?: 'horizontal' | 'vertical';
}

const CollapseRoot = styled('div', {
  name: 'WuiCollapse',
  slot: 'Root'
})<StyleProps<CollapseStyleProps>>(({ theme, styleProps }) => {
  const dimension = styleProps.direction === 'vertical' ? 'height' : 'width';
  return {
    ...(styleProps.collapsedSize != '0px' && {
      overflow: 'hidden',
      [dimension]: styleProps.collapsedSize
    }),

    '&.collapse:not(.show)': {
      ...(styleProps.collapsedSize === '0px' && { display: 'none' })
    },
    '&.collapsing': {
      [dimension]: styleProps.collapsedSize || 0,
      overflow: 'hidden',
      transition: theme.transitions.create(dimension, {
        duration: 'standard',
        easing: 'ease'
      })
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none'
    }
  };
});

type TransitionCallBack = (node: HTMLElement) => void;

export interface CollapseProps {
  /**
   * @description 折叠尺寸
   * @default 0
   */
  collapsedSize?: string | number;

  /**
   * transition 回调
   */
  onEnter?: TransitionCallBack;
  /**
   * transition 回调
   */
  onEntered?: TransitionCallBack;
  /**
   * transition 回调
   */
  onEntering?: TransitionCallBack;
  /**
   * transition 回调
   */
  onExit?: TransitionCallBack;
  /**
   * transition 回调
   */
  onExited?: TransitionCallBack;
  /**
   * transition 回调
   */
  onExiting?: TransitionCallBack;
  /**
   * @description 动画过渡方向
   * @default vertical
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 显示隐藏内容
   */
  visible?: boolean;
}

const Collapse = createFCWithTheme<CollapseProps>(
  'WuiCollapse',
  (props, ref) => {
    const {
      visible,
      children,
      className,
      component,
      collapsedSize: collapsedSizeProp = '0px',
      direction = 'vertical',
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      ...rest
    } = props;

    const nodeRef = React.useRef<HTMLElement>();
    const handleRef = useForkRef(ref, nodeRef);
    const dimension = direction === 'vertical' ? 'height' : 'width';
    const scrollSize = ({
      width: 'scrollWidth',
      height: 'scrollHeight'
    } as const)[dimension];

    const collapsedSize =
      typeof collapsedSizeProp === 'number'
        ? `${collapsedSizeProp}px`
        : collapsedSizeProp;

    const styleProps = {
      collapsedSize,
      direction,
      visible
    };

    const classes = useClasses({ ...props, styleProps, name: 'WuiCollapse' });

    const normalizedTransitionCallback = (
      callback: (node: HTMLElement, maybeIsAppearing?: boolean) => void
    ) => (maybeIsAppearing?: boolean) => {
      if (callback) {
        const node = nodeRef.current;

        if (node) {
          // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
          if (maybeIsAppearing === undefined) {
            callback(node);
          } else {
            callback(node, maybeIsAppearing);
          }
        }
      }
    };

    const handleEnter = normalizedTransitionCallback((node) => {
      if (onEnter) {
        onEnter(node);
      }
    });

    const handleEntering = normalizedTransitionCallback((node) => {
      node.style[dimension] = collapsedSize;
      node.style[dimension] = node[scrollSize] + 'px';
      if (onEntering) {
        onEntering(node);
      }
    });

    const handleEntered = normalizedTransitionCallback((node) => {
      node.style[dimension] = collapsedSize != '0px' ? 'auto' : '';
      if (onEntered) {
        onEntered(node);
      }
    });

    const handleExit = normalizedTransitionCallback((node) => {
      node.style[dimension] = node.getBoundingClientRect()[dimension] + 'px';
      reflow(node);
      if (onExit) {
        onExit(node);
      }
    });
    const handleExiting = normalizedTransitionCallback((node) => {
      node.style[dimension] = collapsedSize;
      if (onExiting) {
        onExiting(node);
      }
    });

    const handleExited = normalizedTransitionCallback((node) => {
      node.style[dimension] = collapsedSize != '0px' ? collapsedSize : '';
      if (onExited) {
        onExited(node);
      }
    });

    const addEndListener = (done: () => void) => {
      const transitionDuration = getTransitionDurationFromElement(
        nodeRef.current
      );
      setTimeout(done, transitionDuration);
    };

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
        nodeRef={nodeRef}
      >
        {(state: TransitionStatus) => {
          return (
            <CollapseRoot
              as={component}
              className={clsx(classes.root, {
                show: state === 'entered',
                collapse: state === 'entered' || state === 'exited',
                collapsing: state === 'entering' || state === 'exiting'
              })}
              styleProps={styleProps}
              ref={handleRef}
              {...rest}
            >
              {children}
            </CollapseRoot>
          );
        }}
      </Transition>
    );
  }
);

export default Collapse;