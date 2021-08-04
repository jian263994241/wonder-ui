import * as React from 'react';
import styled from '../styles/styled';
import Transition, {
  BaseTransitionProps,
  TransitionTimeout
} from '../Transition';
import useTheme from '../styles/useTheme';
import useThemeProps from '../styles/useThemeProps';
import {
  collapseClasses,
  CollapseStyleProps,
  useClasses
} from './CollapseClasses';
import { css } from '@wonder-ui/utils';
import { duration } from '../styles/transitions';
import { reflow } from '../Transition/utils';

const defaultTimeout = duration.area.medium;

export interface CollapseProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Css api
   */
  classes?: Partial<typeof collapseClasses>;

  component?: React.ElementType;
  /**
   * 折叠尺寸
   * @default 0
   */
  collapsedSize?: string | number;
  /**
   * 动画时间 ms
   * @default 300
   */
  timeout?: 'auto' | TransitionTimeout;
  /**
   * 动画过渡方向
   * @default vertical
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 显示隐藏
   * @default false
   */
  in?: boolean;

  onEnter?: BaseTransitionProps['onEnter'];
  onEntered?: BaseTransitionProps['onEntered'];
  onEntering?: BaseTransitionProps['onEntering'];
  onExit?: BaseTransitionProps['onExit'];
  onExited?: BaseTransitionProps['onExited'];
  onExiting?: BaseTransitionProps['onExiting'];
}

const CollapseRoot = styled('div', {
  name: 'WuiCollapse',
  slot: 'Root'
})<{ styleProps: CollapseStyleProps }>(({ theme, styleProps }) => {
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

const Collapse = React.forwardRef<HTMLElement, CollapseProps>(
  (inProps, ref) => {
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
      timeout = defaultTimeout,
      ...rest
    } = props;
    const theme = useTheme();
    const timer = React.useRef<any>();
    const isHorizontal = direction === 'horizontal';
    const dimension = isHorizontal ? 'width' : 'height';

    const scrollSize = isHorizontal ? 'scrollWidth' : 'scrollHeight';

    const collapsedSize =
      typeof collapsedSizeProp === 'number'
        ? `${collapsedSizeProp}px`
        : collapsedSizeProp;

    const styleProps = { direction, in: visible, collapsedSize };
    const classes = useClasses(styleProps);

    const getTransitionDuration = (node: any) => {
      let transitionDuration;

      if (!node) return 0;

      if (timeout === 'atuo') {
        transitionDuration = theme.transitions.getAutoHeightDuration(
          node[scrollSize] - Number(collapsedSize.replace('px', ''))
        );
      } else {
        transitionDuration =
          typeof timeout === 'number'
            ? timeout
            : theme.transitions.getTransitionDurationFromElement(node);
      }

      return transitionDuration;
    };

    const handleEntering: BaseTransitionProps['onEntering'] = (
      node,
      isAppearing
    ) => {
      node.style[dimension] = collapsedSize;
      node.style[dimension] = node[scrollSize] + 'px';

      node.style.transitionDuration = getTransitionDuration(node) + 'ms';
      reflow(node);
      if (onEntering) {
        onEntering(node, isAppearing);
      }
    };

    const handleEntered: BaseTransitionProps['onEntered'] = (
      node,
      isAppearing
    ) => {
      node.style[dimension] = collapsedSize != '0px' ? 'auto' : '';
      if (onEntered) {
        onEntered(node, isAppearing);
      }
    };

    const handleExit: BaseTransitionProps['onExit'] = (node) => {
      node.style[dimension] = node.getBoundingClientRect()[dimension] + 'px';
      reflow(node);
      if (onExit) {
        onExit(node);
      }
    };

    const handleExiting: BaseTransitionProps['onExiting'] = (node) => {
      node.style[dimension] = collapsedSize;
      node.style.transitionDuration = getTransitionDuration(node) + 'ms';
      if (onExiting) {
        onExiting(node);
      }
    };

    const handleExited: BaseTransitionProps['onExited'] = (node) => {
      node.style[dimension] = collapsedSize != '0px' ? collapsedSize : '';
      if (onExited) {
        onExited(node);
      }
    };

    const addEndListener: BaseTransitionProps['addEndListener'] = (
      node,
      next
    ) => {
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
        onEnter={onEnter}
        onEntered={handleEntered}
        onEntering={handleEntering}
        onExit={handleExit}
        onExited={handleExited}
        onExiting={handleExiting}
        addEndListener={addEndListener}
        timeout={timeout != 'auto' ? timeout : null}
        ref={ref}
      >
        {(state, childProps) => {
          return (
            <CollapseRoot
              as={component}
              className={css(classes.root, className)}
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
  }
);

export default Collapse;
