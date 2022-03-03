import * as React from 'react';
import Modal, { ModalProps } from '../Modal';
import Slide from '../Slide';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { drawerClasses, useClasses } from './DrawerClasses';
import { Theme } from '../styles/createTheme';
import { TransitionBaseProps } from '../styles/transitions';

export interface DrawerProps {
  role?: string;
  /**
   * 出现的位置
   * @default left
   */
  anchor?: 'bottom' | 'left' | 'right' | 'top';

  className?: string;

  style?: React.CSSProperties;

  children?: React.ReactNode;
  /**
   * css api
   */
  classes?: Partial<typeof drawerClasses>;
  /**
   * 显示
   */
  visible?: boolean;
  /**
   * 关闭时触发事件
   */
  onClose?: ModalProps['onClose'];
  /**
   * Modal props
   */
  ModalProps?: Partial<ModalProps>;
  /**
   * 保持节点存在
   */
  keepMounted?: ModalProps['keepMounted'];
  /**
   * 过度动画时间
   */
  transitionDuration?: TransitionBaseProps['duration'];
}

const DrawerRoot = styled(Modal, {
  name: 'Drawer',
  slot: 'Root',
  shouldForwardProp: () => true
})<ModalProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer
}));

const DrawerPaper = styled(Slide, {
  name: 'Drawer',
  slot: 'Paper',
  shouldForwardProp: () => true
})(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  height: '100%',
  zIndex: theme.zIndex.drawer,
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
  // temporary style
  position: 'fixed',
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,

  [`&.${drawerClasses.anchorLeft}`]: {
    /* Styles applied to the Paper component if `anchor="left"`. */
    left: 0
  },
  [`&.${drawerClasses.anchorTop}`]: {
    /* Styles applied to the Paper component if `anchor="top"`. */
    top: 0,
    left: 0,
    right: 0,
    height: 'auto',
    maxHeight: '100%'
  },
  [`&.${drawerClasses.anchorRight}`]: {
    /* Styles applied to the Paper component if `anchor="right"`. */
    right: 0
  },
  [`&.${drawerClasses.anchorBottom}`]: {
    /* Styles applied to the Paper component if `anchor="bottom"`. */
    top: 'auto',
    left: 0,
    bottom: 0,
    right: 0,
    height: 'auto',
    maxHeight: '100%'
  }
}));

const oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
} as const;

function isHorizontal(anchor?: string): anchor is 'left' | 'right' {
  return ['left', 'right'].indexOf(anchor || '') !== -1;
}

function getAnchor(theme: Theme, anchor: NonNullable<DrawerProps['anchor']>) {
  return theme.direction === 'rtl' && isHorizontal(anchor)
    ? oppositeDirection[anchor]
    : anchor;
}

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiDrawer' });
  const {
    anchor: anchorProp = 'left',
    children,
    className,
    visible = false,
    transitionDuration,
    keepMounted = false,
    ModalProps,
    ...rest
  } = props;

  const theme = props.theme;
  const anchorInvariant = getAnchor(theme, anchorProp);

  const anchor = anchorProp;
  const styleProps = { ...props, anchor };
  const classes = useClasses(styleProps);

  return (
    <DrawerRoot
      hasTransition
      autoFocus
      visible={visible}
      classes={{ root: css(classes.root, classes.modal, className) }}
      keepMounted={keepMounted}
      {...rest}
      {...ModalProps}
    >
      <DrawerPaper
        ref={ref}
        in={visible}
        direction={oppositeDirection[anchorInvariant]}
        duration={transitionDuration}
        className={classes.paper}
      >
        {children}
      </DrawerPaper>
    </DrawerRoot>
  );
});

export default Drawer;
