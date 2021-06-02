import * as React from 'react';
import Backdrop from '../Backdrop';
import Slide from '../Slide';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  allowScrollOnElement,
  disableBodyScroll,
  enableBodyScroll,
  StackManager
} from '@wonder-ui/utils';
import { createChainedFunction, css } from '@wonder-ui/utils';
import { dropdownMenuClasses, useClasses } from './DropdownMenuClasses';

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
  height: 48,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: '0 2px 12px rgb(100 101 102 / 12%)',
  position: 'relative',
  zIndex: 2
}));

const DropdownMenuItemOverlay = styled('div', {
  name: 'WuiDropdownMenuItem',
  slot: 'Overlay',
  shouldForwardProp: () => true
})(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: '100%',
  position: 'absolute'
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
  zIndex: 1,
  overflow: 'hidden'
});

export interface DropdownMenuProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as'> {
  classes?: Partial<typeof dropdownMenuClasses>;
  component?: React.ElementType;
  ref?: React.Ref<any>;
}

const manager = new StackManager();

const defaultTimeout = 400;

const DropdownMenu = React.forwardRef<HTMLElement, DropdownMenuProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiDropdownMenu' });
    const {
      component = 'div',
      className,
      children: childrenProp,
      ...rest
    } = props;

    const [currentIndex, setCurrent] = React.useState<number>(-1);

    const [expanded, setExpanded] = React.useState(false);

    const [wrapStyles, setWrapStyles] = React.useState({});

    const styleProps = { ...props, expanded };

    const classes = useClasses(styleProps);

    const handleEnter = React.useCallback(
      (node) => {
        setWrapStyles({ height: node.scrollHeight });

        if (!expanded) {
          setExpanded(true);
          disableBodyScroll();
        }
      },
      [expanded]
    );

    const handleExited = React.useCallback(() => {
      if (currentIndex === -1) {
        setExpanded(false);
        enableBodyScroll();
        setWrapStyles({});
      }
    }, [currentIndex]);

    const onClose = () => {
      setCurrent(-1);
    };

    const handleClick = (index: number) => {
      manager.run((next) => {
        if (currentIndex === index) {
          onClose();
        } else {
          setCurrent(index);
        }

        setTimeout(next, defaultTimeout);
      });
    };

    const overlays = React.Children.map(childrenProp, (child, index) => {
      if (React.isValidElement(child) && child.props.overlay) {
        return (
          <Slide
            direction="down"
            in={currentIndex === index}
            onEnter={handleEnter}
            onExited={handleExited}
            timeout={defaultTimeout}
          >
            <DropdownMenuItemOverlay
              className={classes.overlay}
              key={index}
              ref={(node) => {
                allowScrollOnElement(node);
              }}
            >
              {typeof child.props.overlay === 'function'
                ? child.props.overlay({ onClose })
                : child.props.overlay}
            </DropdownMenuItemOverlay>
          </Slide>
        );
      }
      return null;
    });

    const children = React.Children.map(childrenProp, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          active: currentIndex === index,
          onClick: createChainedFunction(
            () => handleClick(index),
            child.props.onClick
          )
        });
      }
      return null;
    });

    return (
      <DropdownMenuRoot
        as={component}
        className={css(classes.root, className)}
        ref={ref as React.Ref<HTMLDivElement>}
        {...rest}
      >
        <DropdownMenuBar className={classes.bar}>{children}</DropdownMenuBar>
        <Backdrop
          classes={{ root: classes.backdrop }}
          visible={currentIndex != -1}
          onClick={onClose}
        />
        <DropdownMenuItemOverlayWrapper
          className={classes.overlayWrapper}
          style={wrapStyles}
        >
          {overlays}
        </DropdownMenuItemOverlayWrapper>
      </DropdownMenuRoot>
    );
  }
);

export default DropdownMenu;
