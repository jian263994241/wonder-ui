import * as React from 'react';
import {
  Transition as TransitionComponent,
  TransitionStatus
} from 'react-transition-group';
import { useForkRef } from '@wonder-ui/hooks';

type EndHandler<RefElement extends HTMLElement> = (
  node: RefElement,
  maybeIsAppearing?: boolean
) => void;

type EndListener<RefElement extends HTMLElement> = (
  node: RefElement,
  next: () => void
) => void;

export interface TransitionActions {
  /**
   * Normally a component is not transitioned if it is shown when the
   * `<Transition>` component mounts. If you want to transition on the first
   * mount set  appear to true, and the component will transition in as soon
   * as the `<Transition>` mounts. Note: there are no specific "appear" states.
   * appear only adds an additional enter transition.
   */
  appear?: boolean;

  /**
   * Enable or disable enter transitions.
   */
  enter?: boolean;

  /**
   * Enable or disable exit transitions.
   */
  exit?: boolean;
}
export interface BaseTransitionProps<
  RefElement extends HTMLElement = HTMLElement
> extends TransitionActions {
  /**
   * Show the component; triggers the enter or exit states
   */
  in?: boolean;
  /**
   *  addEndListener
   */
  addEndListener?: EndListener<RefElement>;
  /**
   * transition event
   */
  onEnter?: EndHandler<RefElement>;
  /**
   * transition event
   */
  onEntered?: EndHandler<RefElement>;
  /**
   * transition event
   */
  onEntering?: EndHandler<RefElement>;
  /**
   * transition event
   */
  onExit?: EndHandler<RefElement>;
  /**
   * transition event
   */
  onExited?: EndHandler<RefElement>;
  /**
   * transition event
   */
  onExiting?: EndHandler<RefElement>;
  /**
   * By default the child component is mounted immediately along with the
   * parent Transition component. If you want to "lazy mount" the component on
   * the first `in={true}` you can set `mountOnEnter`. After the first enter
   * transition the component will stay mounted, even on "exited", unless you
   * also specify `unmountOnExit`.
   */
  mountOnEnter?: boolean;
  /**
   * By default the child component stays mounted after it reaches the
   * 'exited' state. Set `unmountOnExit` if you'd prefer to unmount the
   * component after it finishes exiting.
   */
  unmountOnExit?: boolean;
  /**
   * any
   */
  [prop: string]: any;
}

export type TransitionTimeout =
  | number
  | { appear?: number; enter?: number; exit?: number };

export interface TransitionProps
  extends BaseTransitionProps,
    TransitionActions {
  /**
   * @description Children
   */
  children?: (status: TransitionStatus, childProps: any) => React.ReactNode;
  /**
   * children ref
   */
  ref?: React.Ref<any>;
  /**
   * @description transition duration ms
   *
   */
  timeout?: TransitionTimeout;
}

/**
 * Wrap Transition
 */
const Transtion: React.FC<TransitionProps> = React.forwardRef((props, ref) => {
  const {
    addEndListener,
    children,
    in: inProp = false,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    timeout,
    ...rest
  } = props;

  const nodeRef = React.useRef<any>(null);
  const handleRef = useForkRef(nodeRef, ref);

  const normalizedTransitionCallback = (callback?: EndHandler<any>) => (
    maybeIsAppearing?: boolean
  ) => {
    if (callback) {
      const node = nodeRef.current;

      if (node && callback) {
        // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
        if (maybeIsAppearing === undefined) {
          callback(node);
        } else {
          callback(node, maybeIsAppearing);
        }
      }
    }
  };

  const handleEnter = normalizedTransitionCallback(onEnter);
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExit = normalizedTransitionCallback(onExit);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExited = normalizedTransitionCallback(onExited);

  const handleEndListener = (next: any) => {
    const node = nodeRef.current;
    if (addEndListener && node) {
      addEndListener(node, next);
    }
  };

  return (
    <TransitionComponent
      addEndListener={handleEndListener}
      in={inProp}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExited={handleExited}
      onExiting={handleExiting}
      nodeRef={nodeRef}
      timeout={timeout}
      {...rest}
    >
      {(status: TransitionStatus, childProps: any) => {
        if (typeof children === 'function') {
          return children(status, { ...childProps, ref: handleRef });
        }
      }}
    </TransitionComponent>
  );
});

Transtion.defaultProps = {
  in: false
};

export default Transtion;
