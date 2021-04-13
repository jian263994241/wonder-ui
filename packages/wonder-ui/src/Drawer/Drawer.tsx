import * as React from 'react';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import type { BaseProps, ClassNameMap, PickStyleProps } from '../styles/types';
import styled from '../styles/styled';
import Modal, { ModalProps } from '../Modal';
import Paper, { PaperProps } from '../Paper';
import Slide, { SlideProps } from '../Slide';
import clsx from 'clsx';
import { duration } from '../styles/transitions';
import { DefaultTheme } from '../styles/defaultTheme';
import { BaseTransitionProps } from '../Transition';

export interface DrawerProps extends BaseProps {
  anchor?: 'bottom' | 'left' | 'right' | 'top';
  classes?: ClassNameMap<'root' | 'modal' | 'docked' | 'paper'>;
  elevation?: number;
  position?: 'bottom' | 'left' | 'right' | 'top';
  variant?: 'permanent' | 'persistent' | 'temporary';
  visible?: boolean;
  PaperProps?: PaperProps;
  TransitionComponent?: React.ComponentType<BaseTransitionProps>;
  transitionDuration?: SlideProps['timeout'];
  SlideProps?: SlideProps;
  onClose?: ModalProps['onClose'];
}

const DrawerRoot = styled(Modal, { name: 'Drawer', slot: 'Root' })(
  ({ theme }) => ({
    zIndex: theme.zIndex.drawer
  })
);

const DrawerDockedRoot = styled('div', {
  name: 'Drawer',
  slot: 'Docked'
})(() => ({
  flex: '0 0 auto'
}));

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

const defaultTransitionDuration = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};

const Drawer: React.FC<DrawerProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiDrawer' });
  const {
    PaperProps = {},
    TransitionComponent = Slide,
    SlideProps,
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
      className={clsx(classes.paper, PaperProps.className)}
      styleProps={styleProps}
    >
      {children}
    </DrawerPaper>
  );

  if (variant === 'permanent') {
    return (
      <DrawerDockedRoot
        className={clsx(classes.root, classes.docked)}
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
      {...SlideProps}
    >
      {drawer}
    </TransitionComponent>
  );

  if (variant === 'persistent') {
    return (
      <DrawerDockedRoot
        className={clsx(classes.root, classes.docked)}
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
      className={clsx(classes.root, classes.modal)}
      ref={ref}
      {...rest}
    >
      {slidingDrawer}
    </DrawerRoot>
  );
});

export default Drawer;
