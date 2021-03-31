import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { PickStyleProps, InProps } from '../styles/types';
import { Transition, TransitionStatus } from 'react-transition-group';
import {
  getAutoSizeDuration,
  getTransitionDurationFromElement
} from '@wonder-ui/utils';
import { useForkRef } from '@wonder-ui/hooks';

const reflow = (node: HTMLElement) => node.offsetHeight;

type EndHandler<RefE = HTMLElement> = (
  node: RefE,
  maybeIsAppearing?: boolean
) => void;

export interface CollapseProps {
  /**
   * @description Children
   */
  children?: React.ReactNode;
  /**
   * @description Root element
   * @default div
   */
  component?: keyof React.ReactHTML | React.ComponentType;
  /**
   * @description 折叠尺寸
   * @default 0
   */
  collapsedSize?: string | number;
  /**
   * @description transition duration ms
   * @default auto
   */
  timeout?: 'atuo' | number;
  /**
   * transition 回调
   */
  onEnter?: EndHandler;
  /**
   * transition 回调
   */
  onEntered?: EndHandler;
  /**
   * transition 回调
   */
  onEntering?: EndHandler;
  /**
   * transition 回调
   */
  onExit?: EndHandler;
  /**
   * transition 回调
   */
  onExited?: EndHandler;
  /**
   * transition 回调
   */
  onExiting?: EndHandler;
  /**
   * @description 动画过渡方向
   * @default vertical
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 显示隐藏内容
   */
  in?: boolean;
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

export default function Collapse<P extends InProps<CollapseProps>>(inProps: P) {
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
    rootRef,
    timeout = 'atuo',
    ...rest
  } = props;

  const nodeRef = React.useRef<HTMLElement>();
  const handleRef = useForkRef(rootRef, nodeRef);
  const isHorizontal = direction === 'horizontal';
  const dimension = isHorizontal ? 'width' : 'height';

  const scrollSize = isHorizontal ? 'scrollWidth' : 'scrollHeight';

  const collapsedSize =
    typeof collapsedSizeProp === 'number'
      ? `${collapsedSizeProp}px`
      : collapsedSizeProp;

  const styleProps = { direction, in: visible, collapsedSize };
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

  const getTransitionDuration = () => {
    const node = nodeRef.current;
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

  const handleEnter = normalizedTransitionCallback((node) => {
    if (onEnter) {
      onEnter(node);
    }
  });

  const handleEntering = normalizedTransitionCallback((node) => {
    node.style[dimension] = collapsedSize;
    node.style[dimension] = node[scrollSize] + 'px';

    node.style.transitionDuration = getTransitionDuration() + 'ms';
    reflow(node);
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
    node.style.transitionDuration = getTransitionDuration() + 'ms';
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
    setTimeout(done, getTransitionDuration());
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
            className={classes.root}
            styleProps={{ ...styleProps, state }}
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
