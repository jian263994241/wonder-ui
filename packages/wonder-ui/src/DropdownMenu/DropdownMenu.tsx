import * as React from 'react';
import Backdrop from '../Backdrop';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  allowScrollOnElement,
  createChainedFunction,
  css,
  disableBodyScroll,
  enableBodyScroll,
  getRect,
  IRectangle
} from '@wonder-ui/utils';
import { dropdownMenuClasses, useClasses } from './DropdownMenuClasses';
import { useForkRef, useSafeState, usePrevious } from '@wonder-ui/hooks';
import Collapse from '../Collapse';

const DropdownMenuRoot = styled('div', {
  name: 'WuiDropdownMenu',
  slot: 'Root'
})(({ theme }) => ({
  position: 'relative',
  width: '100%',
  [`&.${dropdownMenuClasses.expanded}`]: {
    zIndex: theme.zIndex.dropdown
  }
}));

const DropdownMenuBar = styled('div', {
  name: 'WuiDropdownMenu',
  slot: 'Bar'
})(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'nowrap',
  height: theme.typography.pxToRem(48),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: '0 2px 12px rgb(100 101 102 / 12%)',
  position: 'relative',
  zIndex: 2,
  [`&.${dropdownMenuClasses.widthAuto} > *`]: {
    flex: '0 0 auto',
    width: 'auto'
  }
}));

const DropdownMenuItemOverlay = styled(Collapse, {
  name: 'WuiDropdownMenuItem',
  slot: 'Overlay',
  shouldForwardProp: () => true
})(({ theme, in: inProp }) => ({
  backgroundColor: theme.palette.background.paper,
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  ...(inProp
    ? {
        zIndex: 2
      }
    : {
        zIndex: 1
      })
}));

const DropdownMenuItemOverlayWrapper = styled('div', {
  name: 'WuiDropdownMenuItem',
  slot: 'OverlayWrapper'
})({
  position: 'absolute',
  left: 0,
  right: 0,
  top: '100%',
  height: 0,
  zIndex: 1
  // overflow: 'hidden'
});

export interface DropdownMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Partial<typeof dropdownMenuClasses>;
  component?: React.ElementType;
  /**
   * 子节点自然宽度
   * @default false
   */
  widthAuto?: boolean;
}

const DropdownMenu = React.forwardRef<HTMLElement, DropdownMenuProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiDropdownMenu' });
    const {
      component = 'div',
      className,
      children: childrenProp,
      widthAuto = false,
      ...rest
    } = props;

    const rootRef = React.useRef<HTMLDivElement>(null);
    const handleRef = useForkRef(rootRef, ref);

    const [currentIndex, setCurrent] = useSafeState<number>(-1);

    const [expanded, setExpanded] = useSafeState(false);

    const [backdropStyle, setBackdropStyle] = useSafeState({});

    const styleProps = { ...props, expanded, widthAuto };

    const classes = useClasses(styleProps);

    const handleEnter = React.useCallback(() => {
      const rootRect = getRect(rootRef.current!) as IRectangle;

      setBackdropStyle({ top: rootRect.top });

      if (!expanded) {
        setExpanded(true);
        disableBodyScroll();
      }
    }, [expanded]);

    const handleExited = React.useCallback(() => {
      if (currentIndex === -1) {
        setExpanded(false);
        enableBodyScroll();
      }
    }, [currentIndex]);

    React.useEffect(
      () => () => {
        enableBodyScroll();
      },
      []
    );

    const onClose = () => {
      setCurrent(-1);
    };

    const handleClick = (index: number) => {
      if (currentIndex === index) {
        onClose();
      } else {
        setCurrent(index);
      }
    };

    const overlays = React.Children.map(childrenProp, (child, index) => {
      if (React.isValidElement(child) && child.props.overlay) {
        return (
          <DropdownMenuItemOverlay
            className={classes.overlay}
            key={index}
            ref={(node) => {
              allowScrollOnElement(node);
            }}
            in={currentIndex === index}
            immediate={currentIndex != index && currentIndex != -1}
            onEnter={handleEnter}
            onExited={handleExited}
          >
            {typeof child.props.overlay === 'function'
              ? child.props.overlay({ onClose })
              : child.props.overlay}
          </DropdownMenuItemOverlay>
        );
      }
      return null;
    });

    const children = React.Children.map(childrenProp, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          active: currentIndex === index,
          onClick: createChainedFunction(() => {
            if (child.props.overlay) {
              handleClick(index);
            } else {
              handleClick(-1);
            }
          }, child.props.onClick)
        });
      }
      return null;
    });

    return (
      <DropdownMenuRoot
        as={component}
        className={css(classes.root, className)}
        ref={handleRef}
        {...rest}
      >
        <DropdownMenuBar className={classes.bar}>{children}</DropdownMenuBar>
        <DropdownMenuItemOverlayWrapper className={classes.overlayWrapper}>
          <Backdrop
            className={classes.backdrop}
            visible={currentIndex != -1}
            onClick={onClose}
            style={backdropStyle}
          />
          {overlays}
        </DropdownMenuItemOverlayWrapper>
      </DropdownMenuRoot>
    );
  }
);

export default DropdownMenu;
