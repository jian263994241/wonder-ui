import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  composeClasses,
  css,
  forwardRef,
  generateUtilityClasses,
  getRect,
  getScrollParent,
  getScrollTop,
  isVisible,
  triggerEvent,
  unitToPx
} from '@wonder-ui/utils';
import {
  useDocumentVisibility,
  useEventCallback,
  useEventListener,
  useForkRef,
  useReactive,
  useUpdateEffect
} from '@wonder-ui/hooks';

const COMPONENT_NAME = 'WuiSticky';

const stickyClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'inner',
  'fixed'
]);

export type StickyPosition = 'top' | 'bottom';

export interface StickyProps {
  classes?: Partial<typeof stickyClasses>;

  className?: string;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 容器
   */
  container?: HTMLElement | null;

  component?: React.ElementType;

  /**
   * 吸顶时与底部的距离，支持 px vw vh rem 单位，默认 px
   */
  offsetBottom?: number | string;
  /**
   * 吸顶时与顶部的距离，支持 px vw vh rem 单位，默认 px
   */
  offsetTop?: number | string;
  /**
   * 固定
   * @default top
   */
  position?: StickyPosition;
  /**
   * z-index
   * @default 999
   */
  zIndex?: number;

  style?: React.CSSProperties;
  /**
   * 当吸顶状态改变时触发
   */
  onChange?(isFixed: boolean): void;
  /**
   * 滚动时触发
   */
  onScroll?(params: { isFixed: boolean; scrollTop: number }): void;
}

export interface StickyStyleProps extends StickyProps {
  fixed?: boolean;
}

const useClasses = (styleProps: StickyStyleProps) => {
  const { fixed } = styleProps;
  const slots = {
    root: ['root', fixed && 'fixed'],
    inner: ['inner']
  };

  return composeClasses(COMPONENT_NAME, slots);
};

const StickyRoot = styled('div', { name: COMPONENT_NAME, slot: 'Root' })({});
const StickyInner = styled('div', { name: COMPONENT_NAME, slot: 'Inner' })<{
  styleProps: StickyStyleProps;
}>(({ styleProps, theme }) => ({
  width: '100%',
  height: '100%',
  display: 'inherit',

  ...(styleProps.fixed && {
    position: 'fixed',
    zIndex: theme.zIndex.fixed
  })
}));

const Sticky = forwardRef<HTMLDivElement, StickyProps>((inProps, ref) => {
  const props = useThemeProps({ name: 'WuiSticky', props: inProps });
  const {
    offsetTop: offsetTopProp = 0,
    offsetBottom: offsetBottomProp = 0,
    position = 'top',
    zIndex,
    children,
    className,
    component,
    style,
    container,
    onChange,
    onScroll,
    ...rest
  } = props;

  const state = useReactive({
    fixed: false,
    width: 0, // root width
    height: 0, // root height
    transform: 0
  });

  const offsetTop = React.useMemo(() => unitToPx(offsetTopProp), [
    offsetTopProp
  ]);
  const offsetBottom = React.useMemo(() => unitToPx(offsetBottomProp), [
    offsetBottomProp
  ]);

  const offset = React.useMemo(
    () => (position === 'top' ? offsetTop : offsetBottom),
    [position]
  );

  const rootStyle = React.useMemo(() => {
    const { fixed, height, width } = state;
    if (fixed) {
      return { width, height };
    }
  }, [state.width, state.height, state.fixed]);

  const stickyStyle = React.useMemo(() => {
    const { fixed, height, width, transform } = state;

    if (!fixed) return;

    return {
      height,
      width,
      [position]: offset,
      zIndex: zIndex,
      ...(transform && {
        transform: `translate3d(0, ${transform}px, 0)`
      })
    };
  }, [state.fixed, state.height, state.width, state.transform, zIndex, offset]);

  const rootRef = React.useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(rootRef, ref);
  const scrollParentRef = React.useRef<HTMLElement>();

  const handleScroll = useEventCallback(() => {
    const { current: root } = rootRef;

    if (!root || !isVisible(root)) return;

    const rootRect = getRect(root);
    const scrollTop = getScrollTop(scrollParentRef.current!);

    state.width = rootRect.width;
    state.height = rootRect.height;

    if (position === 'top') {
      // The sticky component should be kept inside the container element
      if (container) {
        const containerRect = getRect(container);
        const difference = containerRect.bottom - offset - state.height;
        state.fixed = offset > rootRect.top && containerRect.bottom > 0;
        state.transform = difference < 0 ? difference : 0;
      } else {
        state.fixed = offset > rootRect.top;
      }
    } else {
      const { clientHeight } = document.documentElement;
      if (container) {
        const containerRect = getRect(container);
        const difference =
          clientHeight - containerRect.top - offset - state.height;
        state.fixed =
          clientHeight - offset < rootRect.bottom &&
          clientHeight > containerRect.top;
        state.transform = difference < 0 ? -difference : 0;
      } else {
        state.fixed = clientHeight - offset < rootRect.bottom;
      }
    }

    onScroll?.({
      scrollTop,
      isFixed: state.fixed
    });
  });

  React.useEffect(() => {
    if (rootRef.current && !scrollParentRef.current) {
      scrollParentRef.current = getScrollParent(rootRef.current) as HTMLElement;
    }
  }, []);

  const docVisibility = useDocumentVisibility();

  useUpdateEffect(() => {
    if (scrollParentRef.current) {
      triggerEvent(scrollParentRef.current, 'scroll');
    }
  }, [docVisibility]);

  useEventListener(scrollParentRef, 'scroll', handleScroll);

  React.useEffect(() => {
    onChange?.(state.fixed);
  }, [state.fixed]);

  const styleProps = { ...props, fixed: state.fixed };

  const classes = useClasses(styleProps);

  return (
    <StickyRoot
      as={component}
      className={css(classes.root, className)}
      ref={handleRef}
      style={{ ...style, ...rootStyle }}
      {...rest}
    >
      <StickyInner
        className={classes.inner}
        styleProps={styleProps}
        style={stickyStyle}
      >
        {children}
      </StickyInner>
    </StickyRoot>
  );
});

export default Sticky;
