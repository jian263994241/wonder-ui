import * as React from 'react';
import CircularProgress from '../CircularProgress';
import Space from '../Space';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  forwardRef,
  getScrollTop,
  generateUtilityClasses,
  composeClasses,
  css
} from '@wonder-ui/utils';
import {
  useEventCallback,
  useEventListener,
  useForkRef,
  useReactive,
  useScrollParent,
  useTouch
} from '@wonder-ui/hooks';

const componentName = 'WuiPullToRefresh';

const DEFAULT_HEAD_HEIGHT = 50;

const pullRefreshClasses = generateUtilityClasses(componentName, [
  'root',
  'track',
  'indicator',
  'text',
  'normal',
  'loading',
  'loosing',
  'pulling',
  'success'
]);

const useClasses = (styleProps: PullRefreshStyleProps) => {
  const { classes, status } = styleProps;

  const slots = {
    root: ['root'],
    track: ['track'],
    indicator: ['indicator', status && status],
    text: ['text']
  };

  return composeClasses(componentName, slots, classes);
};

export type PullRefreshStatus =
  | 'normal'
  | 'loading'
  | 'loosing'
  | 'pulling'
  | 'success';

export interface PullRefreshProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Partial<typeof pullRefreshClasses>;
  /**
   * 是否处于加载中状态
   */
  refreshing?: boolean;
  /**
   * 下拉刷新时触发
   */
  onRefresh?: () => void;
  /**
   * 顶部内容高度
   * @default 50
   */
  headHeight?: number;
  /**
   * 触发下拉刷新的距离
   * @default 与headHeight一致
   */
  pullDistance?: number;
  /**
   * 禁用下拉刷新
   */
  disabled?: boolean;
  /**
   * 刷新成功提示展示时长(ms)
   * @default 500
   */
  successDuration?: number;
  /**
   * 动画时长
   * @default 300
   */
  animationDuration?: number;
  /**
   * 刷新成功提示文案
   */
  successText?: string;
  /**
   * 下拉过程提示文案
   */
  pullingText?: string;
  /**
   * 释放过程提示文案
   */
  loosingText?: string;
  /**
   * 加载过程提示文案
   */
  loadingText?: string;
  /**
   * 自定义节点
   */
  slots?: Partial<
    Record<
      PullRefreshStatus,
      (props: { distance: number }) => React.ReactElement
    >
  >;
}

interface PullRefreshStyleProps extends PullRefreshProps {
  status?: PullRefreshStatus;
}

const PullRefreshRoot = styled('div', { name: componentName, slot: 'Root' })({
  overflow: 'hidden',
  userSelect: 'none',
  display: 'flex',
  alignItems: 'stretch',
  width: '100%',
  minHeight: '100%'
});

const PullRefreshTrack = styled('div', { name: componentName, slot: 'Track' })(
  ({ theme }) => ({
    touchAction: 'none',
    position: 'relative',
    width: '100%',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.standard
    })
  })
);

const PullRefreshIndicator = styled('div', {
  name: componentName,
  slot: 'Indicator'
})(({ theme }) => ({
  ...theme.typography.body2,
  position: 'absolute',
  left: 0,
  width: '100%',
  height: DEFAULT_HEAD_HEIGHT,
  overflow: 'hidden',
  transform: 'translateY(-100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const PullRefresh = forwardRef<HTMLDivElement, PullRefreshProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: componentName });
    const {
      children,
      className,
      headHeight = DEFAULT_HEAD_HEIGHT,
      disabled = false,
      pullDistance: pullDistanceProp,
      successDuration = 500,
      animationDuration = 300,
      successText,
      pullingText,
      loosingText,
      loadingText,
      refreshing = false,
      slots,
      onRefresh,
      ...rest
    } = props;

    const rootRef = React.useRef<HTMLDivElement>(null);
    const handleRef = useForkRef(rootRef, ref);
    const scrollParentRef = useScrollParent(rootRef);
    const trackRef = React.useRef<HTMLDivElement>(null);
    const touch = useTouch();

    const state = useReactive({
      status: 'normal' as PullRefreshStatus,
      distance: 0,
      duration: 0
    });

    const styleProps = { ...props, status: state.status };

    const classes = useClasses(styleProps);

    const getHeadStyle = () => {
      if (headHeight !== DEFAULT_HEAD_HEIGHT) {
        return {
          height: headHeight
        };
      }
    };

    const isTouchable = () =>
      state.status !== 'loading' && state.status !== 'success' && !disabled;

    const ease = useEventCallback((distance: number) => {
      const pullDistance = +(pullDistanceProp || headHeight);

      if (distance > pullDistance) {
        if (distance < pullDistance * 2) {
          distance = pullDistance + (distance - pullDistance) / 2;
        } else {
          distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4;
        }
      }

      return Math.round(distance);
    });

    const setStatus = useEventCallback(
      (distance: number, isLoading?: boolean) => {
        const pullDistance = +(pullDistanceProp || headHeight);
        state.distance = distance;

        if (isLoading) {
          state.status = 'loading';
        } else if (distance === 0) {
          state.status = 'normal';
        } else if (distance < pullDistance) {
          state.status = 'pulling';
        } else {
          state.status = 'loosing';
        }
      }
    );

    const getStatusText = () => {
      const { status } = state;

      if (status === 'normal') {
        return '';
      }
      //@ts-ignore
      const textProp = props[`${status}Text`];

      return textProp || status;
    };

    const renderStatus = () => {
      const { status, distance } = state;

      if (slots) {
        return slots[status]?.({ distance });
      }

      const nodes = [];

      if (['pulling', 'loosing', 'success'].includes(status)) {
        nodes.push(
          <div className={classes.text} key="text">
            {getStatusText()}
          </div>
        );
      }
      if (status === 'loading') {
        nodes.push(
          <Space
            key="loading"
            gap={4}
            className={classes.text}
            horizontalAlign="center"
          >
            <CircularProgress size={16} /> {getStatusText()}
          </Space>
        );
      }

      return nodes;
    };

    const showSuccessTip = () => {
      state.status = 'success';

      setTimeout(() => {
        setStatus(0);
      }, +successDuration);
    };

    const reachTopRef = React.useRef(false);

    const checkPosition = (event: TouchEvent) => {
      reachTopRef.current = getScrollTop(scrollParentRef.current!) === 0;

      if (reachTopRef.current) {
        state.duration = 0;
        touch.start(event);
      }
    };

    const onTouchStart = useEventCallback((event) => {
      if (isTouchable()) {
        checkPosition(event);
      }
    });

    const onTouchMove = useEventCallback((event) => {
      if (isTouchable()) {
        if (!reachTopRef.current) {
          checkPosition(event);
        }

        const { deltaY } = touch;
        touch.move(event);

        if (reachTopRef.current && deltaY.current >= 0 && touch.isVertical()) {
          if (typeof event.cancelable !== 'boolean' || event.cancelable) {
            event.preventDefault();
          }
          setStatus(ease(deltaY.current));
        }
      }
    });

    const onTouchEnd = useEventCallback(() => {
      if (reachTopRef.current && touch.deltaY.current && isTouchable()) {
        state.duration = +animationDuration;

        if (state.status === 'loosing') {
          setStatus(+headHeight, true);

          onRefresh?.();
        } else {
          setStatus(0);
        }
      }
    });

    useEventListener(trackRef, 'touchmove', onTouchMove, { passive: false });

    React.useEffect(() => {
      state.duration = +animationDuration;

      if (refreshing) {
        setStatus(+headHeight, true);
      } else if (successText) {
        showSuccessTip();
      } else {
        setStatus(0, false);
      }
    }, [refreshing, animationDuration, headHeight]);

    const trackStyle = {
      touchAction: 'none',
      transitionDuration: `${state.duration}ms`,
      transform: state.distance ? `translate3d(0,${state.distance}px, 0)` : ''
    };

    return (
      <PullRefreshRoot
        ref={handleRef}
        className={css(classes.root, className)}
        {...rest}
      >
        <PullRefreshTrack
          ref={trackRef}
          style={trackStyle}
          className={classes.track}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
        >
          <PullRefreshIndicator
            className={classes.indicator}
            style={getHeadStyle()}
          >
            {renderStatus()}
          </PullRefreshIndicator>
          {children}
        </PullRefreshTrack>
      </PullRefreshRoot>
    );
  }
);

export default PullRefresh;
