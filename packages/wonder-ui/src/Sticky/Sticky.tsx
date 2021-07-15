import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import {
  forwardRef,
  getRect,
  getScrollParent,
  isHidden,
  on,
  generateUtilityClasses,
  composeClasses,
  css
} from '@wonder-ui/utils';
import {
  useDocumentVisibility,
  useEventCallback,
  useForkRef
} from '@wonder-ui/hooks';
import styled from '../styles/styled';

const COMPONENT_NAME = 'WuiSticky';

const stickyClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'inner',
  'fixed'
]);

export type StickyPosition = 'top' | 'bottom';

export interface StickyProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Partial<typeof stickyClasses>;
  container?: HTMLElement | null;
  component?: React.ElementType;
  offsetBottom?: number;
  offsetTop?: number;
  position?: StickyPosition;
  zIndex?: number;
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
    offsetTop = 0,
    offsetBottom = 0,
    position = 'top',
    zIndex,
    children,
    className,
    component,
    style,
    container,
    ...rest
  } = props;

  const [state, setState] = React.useState({
    fixed: false,
    width: 0, // root width
    height: 0, // root height
    transform: 0
  });

  const offset = position === 'top' ? offsetTop : offsetBottom;

  const rootStyle = React.useMemo(() => {
    const { fixed, height, width } = state;
    if (fixed) {
      return { width, height };
    }
  }, [state]);

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
  }, [state, zIndex]);

  const rootRef = React.useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(rootRef, ref);

  const handleScroll = useEventCallback(() => {
    const { current: root } = rootRef;

    if (!root || isHidden(root)) return;

    const _state = { ...state };

    const rootRect = getRect(root);

    _state.width = rootRect.width;
    _state.height = rootRect.height;

    if (position === 'top') {
      // The sticky component should be kept inside the container element
      if (container) {
        const containerRect = getRect(container);
        const difference = containerRect.bottom - offset - _state.height;
        _state.fixed = offset > rootRect.top && containerRect.bottom > 0;
        _state.transform = difference < 0 ? difference : 0;
      } else {
        _state.fixed = offset > rootRect.top;
      }
    } else {
      const { clientHeight } = document.documentElement;
      if (container) {
        const containerRect = getRect(container);
        const difference =
          clientHeight - containerRect.top - offset - _state.height;
        _state.fixed =
          clientHeight - offset < rootRect.bottom &&
          clientHeight > containerRect.top;
        _state.transform = difference < 0 ? -difference : 0;
      } else {
        _state.fixed = clientHeight - offset < rootRect.bottom;
      }
    }

    setState(_state);
  });

  React.useEffect(() => {
    if (rootRef.current) {
      const scrollParent = getScrollParent(rootRef.current);
      return on(scrollParent, 'scroll', handleScroll);
    }
  }, []);

  const docVisibility = useDocumentVisibility();

  React.useEffect(() => {
    handleScroll();
  }, [docVisibility]);

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
