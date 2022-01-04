import * as React from 'react';
import Modal, { ModalProps } from '../Modal';
import Paper, { PaperProps } from '../Paper';
import Slide from '../Slide';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { BaseTransitionProps, TransitionTimeout } from '../Transition';
import { css } from '@wonder-ui/utils';
import { drawerClasses, useClasses } from './DrawerClasses';
import { duration } from '../styles/transitions';
import { Theme } from '../styles/createTheme';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 出现的位置
   * @default left
   */
  anchor?: 'bottom' | 'left' | 'right' | 'top';
  /**
   * css api
   */
  classes?: Partial<typeof drawerClasses>;
  /**
   * 阴影
   */
  elevation?: number;
  /**
   * 变量
   * @default temporary
   */
  variant?: 'permanent' | 'persistent' | 'temporary';
  /**
   * 显示
   */
  visible?: boolean;
  /**
   * PaperProps
   */
  PaperProps?: Partial<PaperProps>;
  /**
   * @ignore
   */
  transitionDuration?: TransitionTimeout;
  /**
   * @ignore
   */
  TransitionComponent?: React.ComponentType<BaseTransitionProps>;
  /**
   * @ignore
   */
  TransitionProps?: BaseTransitionProps;
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
}

const DrawerRoot = styled(Modal, {
  name: 'Drawer',
  slot: 'Root',
  shouldForwardProp: () => true
})<ModalProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer
}));

const DrawerDockedRoot = styled('div', {
  name: 'Drawer',
  slot: 'Docked'
})({
  flex: '0 0 auto'
});

const DrawerPaper = styled(Paper, {
  name: 'Drawer',
  slot: 'Paper',
  shouldForwardProp: () => true
})(({ theme }) => ({
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
    left: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  [`&.${drawerClasses.anchorTop}`]: {
    /* Styles applied to the Paper component if `anchor="top"`. */
    top: 0,
    left: 0,
    right: 0,
    height: 'auto',
    maxHeight: '100%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  [`&.${drawerClasses.anchorRight}`]: {
    /* Styles applied to the Paper component if `anchor="right"`. */
    right: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  [`&.${drawerClasses.anchorBottom}`]: {
    /* Styles applied to the Paper component if `anchor="bottom"`. */
    top: 'auto',
    left: 0,
    bottom: 0,
    right: 0,
    height: 'auto',
    maxHeight: '100%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  [`&.${drawerClasses.temporaryAnchorLeft}`]: {
    /* Styles applied to the Paper component if `anchor="left"` and `variant` is not "temporary". */
    borderRight: `1px solid ${theme.palette.divider}`
  },
  [`&.${drawerClasses.temporaryAnchorTop}`]: {
    /* Styles applied to the Paper component if `anchor="top"` and `variant` is not "temporary". */
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [`&.${drawerClasses.temporaryAnchorRight}`]: {
    /* Styles applied to the Paper component if `anchor="right"` and `variant` is not "temporary". */
    borderLeft: `1px solid ${theme.palette.divider}`
  },
  [`&.${drawerClasses.temporaryAnchorBottom}`]: {
    /* Styles applied to the Paper component if `anchor="bottom"` and `variant` is not "temporary". */
    borderTop: `1px solid ${theme.palette.divider}`
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

const defaultTransitionDuration = duration.area.medium;

const Drawer = React.forwardRef<HTMLElement, DrawerProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiDrawer' });
  const {
    PaperProps = {},
    TransitionComponent = Slide,
    TransitionProps,
    anchor: anchorProp = 'left',
    children,
    className,
    elevation = 16,
    variant = 'temporary',
    visible = false,
    transitionDuration = defaultTransitionDuration,
    keepMounted = false,
    ModalProps,
    ...rest
  } = props;

  const theme = props.theme;
  const anchorInvariant = getAnchor(theme, anchorProp);

  const mounted = React.useRef(false);
  React.useEffect(() => {
    mounted.current = true;
  }, []);
  const anchor = anchorProp;
  const styleProps = { ...props, anchor, variant };

  const classes = useClasses(styleProps);

  const drawer = (
    <DrawerPaper
      ref={ref}
      elevation={variant === 'temporary' ? elevation : 0}
      {...PaperProps}
      classes={{ root: css(classes.paper, PaperProps.className) }}
    >
      {children}
    </DrawerPaper>
  );

  if (variant === 'permanent') {
    return (
      <DrawerDockedRoot
        className={css(classes.root, classes.docked, className)}
        ref={ref as React.Ref<HTMLDivElement>}
        {...rest}
      >
        {drawer}
      </DrawerDockedRoot>
    );
  }

  const slidingDrawer = (
    <TransitionComponent
      in={visible}
      direction={oppositeDirection[anchorInvariant]}
      timeout={transitionDuration}
      appear={mounted.current}
      {...TransitionProps}
    >
      {drawer}
    </TransitionComponent>
  );

  if (variant === 'persistent') {
    return (
      <DrawerDockedRoot
        className={css(classes.root, classes.docked, className)}
        ref={ref as React.Ref<HTMLDivElement>}
        {...rest}
      >
        {slidingDrawer}
      </DrawerDockedRoot>
    );
  }

  // variant === temporary
  return (
    <DrawerRoot
      autoFocus
      visible={visible}
      classes={{ root: css(classes.root, classes.modal, className) }}
      keepMounted={keepMounted}
      {...rest}
      {...ModalProps}
    >
      {slidingDrawer}
    </DrawerRoot>
  );
});

export default Drawer;
