import * as React from 'react';
import CSSTransition, {
  CSSTransitionProps,
  CSSTransitionClassNames
} from 'react-transition-group/CSSTransition';
import { RouterProps } from 'react-router';
import {
  withStyles,
  createStyles,
  ClassKeyOfStyles,
  ClassNameMap
} from '../styles';
import clsx from 'clsx';

const styles = createStyles((theme) => {
  const { formatMs, easing } = theme.transitions;

  const duration = {
    scale: 300,
    slide: 375,
    fade: 275,
    null: 0
  };

  const fakeShadow = {
    position: 'absolute',
    top: 0,
    width: 16,
    bottom: 0,
    zIndex: -1,
    content: '""',
    opacity: 0,
    right: '100%',
    background:
      'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0.01) 50%, rgba(0,0,0,0.2) 100%)'
  };
  const fakeOpacity = {
    position: 'absolute',
    left: 0,
    top: 0,
    background: 'rgba(0,0,0,0.4)',
    width: '100%',
    bottom: 0,
    content: '""',
    opacity: 0,
    zIndex: 10000
  };

  return {
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
    '@keyframes fadeOut': {
      from: { opacity: 1 },
      to: { opacity: 0 }
    },
    root: {
      background: theme.palette.background.default,
      height: '100%',
      left: 0,
      overflow: 'hidden auto',
      position: 'absolute',
      top: 0,
      touchAction: 'pan-x pan-y',
      transform: 'translate3d(0,0,0)',
      width: '100%',
      willChange: 'auto',
      zIndex: 1,
      //fade
      '&.fade-enter': {
        display: 'block',
        opacity: 0
      },
      '&.fade-enter-active': {
        opacity: 1,
        transition: `opacity ${formatMs(duration.fade)}`
      },
      '&.fade-enter-done': {
        display: 'block'
      },
      '&.fade-exit': {
        display: 'block',
        opacity: 1
      },
      '&.fade-exit-active': {
        opacity: 0,
        transition: `opacity ${formatMs(duration.fade)}`
      },
      '&.fade-exit-done': {
        display: 'none'
      },
      //scale
      '&.scale-enter': {
        display: 'block',
        opacity: 0,
        transform: `scale(1.1)`
      },
      '&.scale-enter-active': {
        opacity: 1,
        transform: 'scale(1)',
        transition: `opacity ${formatMs(duration.scale)}, transform ${formatMs(
          duration.scale
        )}`
      },
      '&.scale-enter-done': {
        display: 'block'
      },
      '&.scale-exit': {
        display: 'block',
        opacity: 1,
        transform: 'scale(1)'
      },
      '&.scale-exit-active': {
        opacity: 0,
        transform: 'scale(0.9)',
        transition: `opacity ${formatMs(duration.scale)}, transform ${formatMs(
          duration.scale
        )}`
      },
      '&.scale-exit-done': {
        display: 'none'
      },
      //slide
      '&.forward.slide-enter': {
        display: 'block',
        zIndex: 3,
        transform: 'translate3d(100%,0,0)'
      },
      '&.forward.slide-enter-active': {
        transform: 'translate3d(0, 0, 0)',
        transition: `transform ${easing.easeInOut} ${formatMs(duration.slide)}`,
        '&:before': {
          ...fakeShadow,
          animation: `$fadeIn ${formatMs(duration.slide)} ${
            easing.easeInOut
          } forwards`
        }
      },
      '&.forward.slide-enter-done': {
        zIndex: 3,
        display: 'block'
      },
      '&.forward.slide-exit': {
        zIndex: 1,
        display: 'block',
        transform: 'translate3d(0,0,0)'
      },
      '&.forward.slide-exit-active': {
        transform: 'translate3d(-20%,0,0)',
        transition: `transform ${easing.easeInOut} ${formatMs(duration.slide)}`,
        '&:after': {
          ...fakeOpacity,
          animation: `$fadeIn ${formatMs(duration.slide)} ${
            easing.easeInOut
          } forwards`
        }
      },
      '&.forward.slide-exit-done': {
        display: 'none'
      },
      /** slide right */
      '&.backward.slide-enter': {
        display: 'block',
        zIndex: 1,
        transform: 'translate3d(-20%,0,0)'
      },
      '&.backward.slide-enter-active': {
        transform: 'translate3d(0,0,0)',
        transition: `transform ${easing.easeInOut} ${formatMs(duration.slide)}`,
        '&:after': {
          ...fakeOpacity,
          animation: `$fadeOut ${formatMs(duration.slide)} ${
            easing.easeInOut
          } forwards`
        }
      },
      '&.backward.slide-enter-done': {
        display: 'block'
      },
      '&.backward.slide-exit': {
        display: 'block',
        zIndex: 3,
        transform: 'translate3d(0,0,0)'
      },
      '&.backward.slide-exit-active': {
        transform: 'translate3d(100%,0,0)',
        transition: `transform ${easing.easeInOut} ${formatMs(duration.slide)}`,
        '&:before': {
          ...fakeShadow,
          animation: `$fadeOut ${formatMs(duration.slide)} ${
            easing.easeInOut
          } forwards`
        }
      },
      '&.backward.slide-exit-done': {
        display: 'none'
      }
    }
  };
});

type ClassKeys = ClassNameMap<ClassKeyOfStyles<typeof styles>>;

type NestedTransitionProps = CSSTransitionProps & {
  classes?: Partial<ClassKeys>;
  className?: string;
  classNames?: CSSTransitionClassNames;
  action?: RouterProps['action'];
  children: React.ReactElement;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  in?: boolean;
};

function NestedTransition(
  props: NestedTransitionProps
): React.ReactElement | null {
  const {
    action,
    classes = {},
    className,
    classNames,
    mountOnEnter = true,
    unmountOnExit = true,
    children,
    in: inProp,
    ...rest
  } = props;

  if (!!!classNames) {
    return inProp ? children : null;
  }

  const classFix = action === 'POP' ? 'backward' : 'forward';

  return (
    <CSSTransition
      className={clsx(classFix, classes.root)}
      classNames={classNames}
      in={inProp}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      <div className={''}>{children}</div>
    </CSSTransition>
  );
}

export default withStyles(styles)(NestedTransition);
