import * as React from 'react';
import Transition, { BaseTransitionProps } from '../Transition';
import useTheme from '../styles/useTheme';
import { useForkRef } from '@wonder-ui/hooks';
import { reflow } from '../Transition/utils';

function getScale(value: number) {
  return `scale(${value}, ${value ** 2})`;
}

const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};

export interface GrowProps extends BaseTransitionProps {
  /**
   * @description Perform the enter transition when it first mounts if `in` is also `true`.
   * @default true
   */
  appear?: boolean;
  /**
   * @description A single child content element.
   */
  children: React.ReactElement & React.RefAttributes<React.ReactElement>;
  /**
   * @description 显示隐藏内容
   */
  in?: boolean;
}

/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Grow: React.FC<GrowProps> = React.forwardRef((props, ref) => {
  const {
    appear = true,
    children,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting
  } = props;

  const timer = React.useRef();
  const autoTimeout = React.useRef();
  const theme = useTheme();

  const nodeRef = React.useRef<HTMLElement>(null);
  const foreignRef = useForkRef(children.ref, ref);
  const handleRef = useForkRef(nodeRef, foreignRef);

  const normalizedTransitionCallback = (
    callback?: (node: HTMLElement, maybeIsAppearing?: boolean) => void
  ) => (maybeIsAppearing?: boolean) => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node as HTMLElement);
      } else {
        callback(node as HTMLElement, maybeIsAppearing);
      }
    }
  };

  return null;
});
