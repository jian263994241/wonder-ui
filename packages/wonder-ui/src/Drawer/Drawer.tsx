import * as React from 'react';
import Modal, { ModalProps } from '../Modal';
import Paper, { PaperProps } from '../Paper';
import Slide from '../Slide';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import { BaseTransitionProps, TransitionTimeout } from '../Transition';
import { css } from '@wonder-ui/utils';
import { DefaultTheme } from '../styles/defaultTheme';
import { duration } from '../styles/transitions';
import type { BaseProps, ClassNameMap, PickStyleProps } from '../styles/types';

export interface DrawerProps extends BaseProps {
  /**
   * 出现的位置
   * @default left
   */
  anchor?: 'bottom' | 'left' | 'right' | 'top';
  /**
   * css api
   */
  classes?: ClassNameMap<'root' | 'modal' | 'docked' | 'paper'>;
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
  PaperProps?: PaperProps;
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
   * onClose
   */
  onClose?: ModalProps['onClose'];
  /**
   * Modal props
   */
  ModalProps?: ModalProps;
}

const DrawerRoot = styled(Modal, { name: 'Drawer', slot: 'Root' })(
  ({ theme }) => ({
    zIndex: theme.zIndex.drawer
  })
);

const DrawerDockedRoot = styled('div', {
  name: 'Drawer',
  slot: 'Docked'
})({
  flex: '0 0 auto'
});

const DrawerPaper = styled(Paper, {
  name: 'Drawer',
  slot: 'Paper'
})<PickStyleProps<DrawerProps, 'anchor' | 'variant'>>(
  ({ theme, styleProps }) => ({
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: '1 0 auto',
    zIndex: theme.zIndex.drawer,
    WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
    // temporary style
    position: 'fixed',
    top: 0,
    // We disable the focus ring for mouse, touch and keyboard users.
    // At some point, it would be better to keep it for keyboard users.
    // :focus-ring CSS pseudo-class will help.
    outline: 0,
    ...(styleProps.anchor === 'left' && {
      /* Styles applied to the Paper component if `anchor="left"`. */
      left: 0
    }),
    ...(styleProps.anchor === 'top' && {
      /* Styles applied to the Paper component if `anchor="top"`. */
      top: 0,
      left: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    }),
    ...(styleProps.anchor === 'right' && {
      /* Styles applied to the Paper component if `anchor="right"`. */
      right: 0
    }),
    ...(styleProps.anchor === 'bottom' && {
      /* Styles applied to the Paper component if `anchor="bottom"`. */
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    }),
    ...(styleProps.anchor === 'left' &&
      styleProps.variant !== 'temporary' && {
        /* Styles applied to the Paper component if `anchor="left"` and `variant` is not "temporary". */
        borderRight: `1px solid ${theme.palette.divider}`
      }),
    ...(styleProps.anchor === 'top' &&
      styleProps.variant !== 'temporary' && {
        /* Styles applied to the Paper component if `anchor="top"` and `variant` is not "temporary". */
        borderBottom: `1px solid ${theme.palette.divider}`
      }),
    ...(styleProps.anchor === 'right' &&
      styleProps.variant !== 'temporary' && {
        /* Styles applied to the Paper component if `anchor="right"` and `variant` is not "temporary". */
        borderLeft: `1px solid ${theme.palette.divider}`
      }),
    ...(styleProps.anchor === 'bottom' &&
      styleProps.variant !== 'temporary' && {
        /* Styles applied to the Paper component if `anchor="bottom"` and `variant` is not "temporary". */
        borderTop: `1px solid ${theme.palette.divider}`
      })
  })
);

const oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
} as const;

export function isHorizontal(anchor?: string): anchor is 'left' | 'right' {
  return ['left', 'right'].indexOf(anchor || '') !== -1;
}

export function getAnchor(
  theme: DefaultTheme,
  anchor: NonNullable<DrawerProps['anchor']>
) {
  return theme.direction === 'rtl' && isHorizontal(anchor)
    ? oppositeDirection[anchor]
    : anchor;
}

const defaultTransitionDuration = duration.area.medium;

const Drawer: React.FC<DrawerProps> = React.forwardRef((inProps, ref) => {
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
    ...rest
  } = props;

  const theme = props.theme;
  const anchorInvariant = getAnchor(theme, anchorProp);

  const mounted = React.useRef(false);
  React.useEffect(() => {
    mounted.current = true;
  }, []);
  const anchor = anchorProp;
  const styleProps = { anchor, variant };

  const classes = useClasses({ ...props, styleProps, name: 'WuiDrawer' });

  const drawer = (
    <DrawerPaper
      elevation={variant === 'temporary' ? elevation : 0}
      square
      {...PaperProps}
      className={css(classes.paper, PaperProps.className)}
      styleProps={styleProps}
    >
      {children}
    </DrawerPaper>
  );

  if (variant === 'permanent') {
    return (
      <DrawerDockedRoot
        className={css(classes.root, classes.docked)}
        ref={ref}
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
        className={css(classes.root, classes.docked)}
        ref={ref}
        {...rest}
      >
        {slidingDrawer}
      </DrawerDockedRoot>
    );
  }

  // variant === temporary
  return (
    <DrawerRoot
      visible={visible}
      className={css(classes.root, classes.modal)}
      ref={ref}
      {...rest}
    >
      {slidingDrawer}
    </DrawerRoot>
  );
});

export default Drawer;
