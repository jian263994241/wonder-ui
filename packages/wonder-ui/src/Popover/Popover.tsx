import * as React from 'react';
import Grow from '../Grow';
import Modal, { ModalProps } from '../Modal';
import Paper, { PaperProps } from '../Paper';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css, debounce, ownerDocument, ownerWindow } from '@wonder-ui/utils';
import { popoverClasses, useClasses } from './PopoverClasses';
import { TransitionDuration } from '../styles/transitions';
import { useForkRef } from '@wonder-ui/hooks';

type Rect = { width: number; height: number };
type AnchorEl = HTMLElement | null | (() => HTMLElement | null);
type Vertical = 'bottom' | 'center' | 'top' | number;
type Horizontal = 'center' | 'left' | 'right' | number;
type TransformOrigin = { horizontal: Horizontal; vertical: Vertical };

export function getOffsetTop(rect: Rect, vertical: Vertical) {
  let offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}

export function getOffsetLeft(rect: Rect, horizontal: Horizontal) {
  let offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getAnchorEl(anchorEl?: AnchorEl) {
  return (
    typeof anchorEl === 'function' ? anchorEl() : anchorEl
  ) as HTMLElement;
}

function getTransformOriginValue(transformOrigin: TransformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical]
    .map((n) => (typeof n === 'number' ? `${n}px` : n))
    .join(' ');
}

const PopoverRoot = styled(Modal, {
  name: 'WuiPopover',
  slot: 'Root',
  shouldForwardProp: () => true
})<ModalProps>({});

const PopoverPaper = styled(Paper, {
  name: 'WuiPopover',
  slot: 'Paper',
  shouldForwardProp: () => true
})<PaperProps>(({ theme }) => ({
  position: 'absolute',
  overflowY: 'auto',
  overflowX: 'hidden',
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: `calc(100% - ${theme.spacing(4)})`,
  maxHeight: `calc(100% - ${theme.spacing(4)})`,
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}));

export interface PopoverProps extends Omit<ModalProps, 'children'> {
  PaperProps?: Partial<PaperProps>;
  /**
   * 支持updatePosition（）操作
   */
  actionRef?: React.Ref<any>;
  /**
   * 设置位置描点的element
   */
  anchorEl?: AnchorEl;
  /**
   * anchorReference=anchorEl 时的参考位置
   */
  anchorOrigin?: { horizontal: Horizontal; vertical: Vertical };
  /**
   * anchorReference=anchorPosition 时的位置设置
   */
  anchorPosition?: { top: number; left: number };
  /**
   * 描点类型
   * @default anchorEl
   */
  anchorReference?: 'anchorEl' | 'anchorPosition' | 'none';
  /**
   * 内容
   */
  children?: React.ReactNode;

  className?: string;

  classes?: Partial<typeof popoverClasses>;
  /**
   * 边框深度
   * @default 8
   */
  elevation?: number;
  /**
   * 指定弹出框可以显示在窗口边缘附近的位置。
   * @default 16
   */
  marginThreshold?: number;

  style?: React.CSSProperties;
  /**
   * 附加到锚点的原点
   */
  transformOrigin?: TransformOrigin;
  /**
   * 动画时间
   */
  duration?: TransitionDuration;
  /**
   * 是否显示
   */
  visible?: boolean;
}

const Popover = React.forwardRef<HTMLElement, PopoverProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiPopover' });
  const {
    PaperProps,
    duration,
    actionRef,
    anchorEl,
    anchorOrigin = { vertical: 'top', horizontal: 'left' },
    anchorPosition = { top: 0, left: 0 },
    anchorReference = 'anchorEl',
    children,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    transformOrigin = { vertical: 'top', horizontal: 'left' },
    visible = false,
    ...rest
  } = props;

  const styleProps = { ...props };

  const classes = useClasses(styleProps);

  const paperRef = React.useRef<HTMLDivElement>(null);
  //@ts-ignore
  const handdlePaperRef = useForkRef(paperRef, PaperProps?.ref);

  const getAnchorOffset = React.useCallback(() => {
    if (anchorReference === 'anchorPosition') {
      return anchorPosition;
    }

    const resolvedAnchorEl = getAnchorEl(anchorEl);

    // If an anchor element wasn't provided, just use the parent body element of this Popover
    const anchorElement =
      resolvedAnchorEl && resolvedAnchorEl.nodeType === 1
        ? resolvedAnchorEl
        : ownerDocument(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();

    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [
    anchorEl,
    anchorOrigin.horizontal,
    anchorOrigin.vertical,
    anchorPosition,
    anchorReference
  ]);

  const getTransformOrigin = React.useCallback(
    (elemRect: Rect) => {
      return {
        vertical: getOffsetTop(elemRect, transformOrigin.vertical),
        horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    },
    [transformOrigin.horizontal, transformOrigin.vertical]
  );

  const getPositioningStyle = React.useCallback(
    (element: HTMLElement) => {
      const elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight
      };

      // Get the transform origin point on the element itself
      const elemTransformOrigin = getTransformOrigin(elemRect);

      if (anchorReference === 'none') {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(elemTransformOrigin)
        };
      }

      // Get the offset of the anchoring element
      const anchorOffset = getAnchorOffset();

      // Calculate element positioning
      let top = anchorOffset.top - elemTransformOrigin.vertical;
      let left = anchorOffset.left - elemTransformOrigin.horizontal;
      const bottom = top + elemRect.height;
      const right = left + elemRect.width;

      // Use the parent window of the anchorEl if provided
      const containerWindow = ownerWindow(getAnchorEl(anchorEl));

      // Window thresholds taking required margin into account
      const heightThreshold = containerWindow.innerHeight - marginThreshold;
      const widthThreshold = containerWindow.innerWidth - marginThreshold;

      // Check if the vertical axis needs shifting
      if (top < marginThreshold) {
        const diff = top - marginThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        const diff = bottom - heightThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      }

      // Check if the horizontal axis needs shifting
      if (left < marginThreshold) {
        const diff = left - marginThreshold;
        left -= diff;
        elemTransformOrigin.horizontal += diff;
      } else if (right > widthThreshold) {
        const diff = right - widthThreshold;
        left -= diff;
        elemTransformOrigin.horizontal += diff;
      }

      return {
        top: `${Math.round(top)}px`,
        left: `${Math.round(left)}px`,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    },
    [
      anchorEl,
      anchorReference,
      getAnchorOffset,
      getTransformOrigin,
      marginThreshold
    ]
  );

  const setPositioningStyles = React.useCallback(() => {
    const { current: element } = paperRef;

    if (!element) {
      return;
    }

    const positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);

  const handleEntering = () => {
    // if (onEntering) {
    //   onEntering(element, isAppearing);
    // }
    setPositioningStyles();
  };

  React.useEffect(() => {
    if (visible) {
      setPositioningStyles();
    }
  });

  React.useImperativeHandle(
    actionRef,
    () => {
      return {
        updatePosition: () => {
          if (visible) {
            setPositioningStyles();
          }
        }
      };
    },
    [visible, setPositioningStyles]
  );

  React.useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const handleResize = debounce(() => {
      setPositioningStyles();
    });
    const resolvedAnchorEl = getAnchorEl(anchorEl);
    const containerWindow = ownerWindow(resolvedAnchorEl);
    containerWindow.addEventListener('resize', handleResize);
    containerWindow.addEventListener('scroll', handleResize);
    return () => {
      handleResize.cancel();
      containerWindow.removeEventListener('resize', handleResize);
      containerWindow.removeEventListener('scroll', handleResize);
    };
  }, [anchorEl, visible, setPositioningStyles]);

  const container =
    containerProp ||
    (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : undefined);

  return (
    <PopoverRoot
      autoFocus
      BackdropProps={{ invisible: true }}
      container={container}
      visible={visible}
      // ref={ref}
      {...rest}
      classes={{ root: css(classes.root, className) }}
    >
      <Grow
        in={visible}
        onEnter={handleEntering}
        duration={duration}
        component={PopoverPaper}
        componentProps={{
          ...PaperProps,
          className: css(classes.paper, PaperProps?.className),
          elevation,
          ref: handdlePaperRef
        }}
      >
        {children}
      </Grow>
    </PopoverRoot>
  );
});

export default Popover;
