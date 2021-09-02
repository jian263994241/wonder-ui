import * as React from 'react';
import Portal, { PortalProps } from '../Portal';
import useThemeProps from '../styles/useThemeProps';
import {
  createPopper,
  Instance as PopperInstance,
  Modifier,
  ModifierArguments,
  OptionsGeneric,
  State as PopperState
} from '@popperjs/core';
import { ownerDocument, nextTick, setRef } from '@wonder-ui/utils';
import { TransitionProps } from '../Transition';
import { useEnhancedEffect, useForkRef, useSafeState } from '@wonder-ui/hooks';

type AnchorEl = HTMLElement | null | (() => HTMLElement | null);
type BasePlacement = 'top' | 'bottom' | 'right' | 'left';
type AutoPlacement = 'auto' | 'auto-start' | 'auto-end';
type VariationPlacement =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';
type Placement = AutoPlacement | BasePlacement | VariationPlacement;

function getAnchorEl(anchorEl?: AnchorEl) {
  return (typeof anchorEl === 'function'
    ? anchorEl()
    : anchorEl) as HTMLElement;
}

function flipPlacement(placement: Placement, theme: any) {
  const direction = (theme && theme.direction) || 'ltr';

  if (direction === 'ltr') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}

export interface PopperProps<
  TModifier extends Partial<Modifier<any, any>> = Partial<Modifier<any, any>>
> extends React.HTMLAttributes<HTMLElement> {
  anchorEl: AnchorEl;
  children: (childProps: {
    placement: Placement;
    TransitionProps?: Pick<TransitionProps, 'in' | 'onEnter' | 'onExited'>;
    attributes: PopperState['attributes'];
    styles: {
      arrow?: any;
    };
  }) => React.ReactNode;
  container?: PortalProps['container'];
  disablePortal?: boolean;
  keepMounted?: boolean;
  modifiers?: Array<TModifier>;
  placement?: Placement;
  popperOptions?: Partial<OptionsGeneric<TModifier>>;
  popperRef?: React.Ref<PopperInstance>;
  transition?: boolean;
  visible?: boolean;
  ref?: React.Ref<any>;
}

const Popper = React.forwardRef<HTMLElement, PopperProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiPopper' });
  const {
    anchorEl,
    children,
    container: containerProp,
    disablePortal = false,
    keepMounted = false,
    modifiers,
    placement: initialPlacement = 'bottom',
    popperOptions,
    popperRef: popperRefProp,
    theme,
    transition = false,
    visible: open,
    style,
    ...rest
  } = props;

  const [, forceUpdate] = React.useState({});
  const tooltipRef = React.useRef<HTMLElement>(null);
  const ownRef = useForkRef(tooltipRef, ref);

  const popperRef = React.useRef<PopperInstance>(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = React.useRef(handlePopperRef);
  useEnhancedEffect(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React.useImperativeHandle(
    popperRefProp,
    () => popperRef.current as PopperInstance,
    []
  );

  const [exited, setExited] = useSafeState(true);

  const rtlPlacement = flipPlacement(initialPlacement, theme);
  const [placement, setPlacement] = useSafeState(rtlPlacement);

  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });

  const handleOpen = React.useCallback(() => {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }

    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }

    const handlePopperUpdate = (data: PopperState) => {
      setPlacement(data.placement);
    };

    let popperModifiers: typeof modifiers = [
      {
        name: 'preventOverflow',
        options: {
          altBoundary: disablePortal
        }
      },
      {
        name: 'flip',
        options: {
          altBoundary: disablePortal
        }
      },
      {
        name: 'onUpdate',
        enabled: true,
        phase: 'afterWrite',
        fn: ({ state }: ModifierArguments<any>) => {
          handlePopperUpdate(state);
        }
      }
    ];

    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }

    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }

    const referenceElement = getAnchorEl(anchorEl);
    const tooltipElement = tooltipRef.current;

    if (referenceElement) {
      const popper = createPopper(referenceElement, tooltipElement, {
        placement: rtlPlacement,
        ...popperOptions,
        modifiers: popperModifiers
      });

      handlePopperRefRef.current(popper);

      nextTick(() => {
        forceUpdate({});
      });
    }
  }, [anchorEl, disablePortal, modifiers, open, rtlPlacement, popperOptions]);

  const handleRef = React.useCallback(
    (node) => {
      setRef(ownRef, node);
      handleOpen();
    },
    [ownRef, handleOpen]
  );

  const handleEnter = () => {
    setExited(false);
  };

  const handleClose = () => {
    if (!popperRef.current) {
      return;
    }

    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };

  const handleExited = () => {
    setExited(true);
    handleClose();
  };

  React.useEffect(() => {
    return () => {
      handleClose();
    };
  }, []);

  React.useEffect(() => {
    if (!open && !transition) {
      // Otherwise handleExited will call this.
      handleClose();
    }
  }, [open, transition]);

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  const popper = popperRef.current;

  const { popper: popperStyles, ...styles } = popper?.state.styles || {};
  const attributes = popper?.state.attributes || {};

  const childProps: any = { placement, attributes, styles };

  if (transition) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }

  const container =
    containerProp ||
    (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : undefined);

  return (
    <Portal disablePortal={disablePortal} container={container}>
      <div
        ref={handleRef}
        role="tooltip"
        {...rest}
        style={{
          // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
          position: 'fixed',
          // Fix Popper.js display issue
          top: 0,
          left: 0,
          display: !open && keepMounted && !transition ? 'none' : null,
          ...(popperStyles as any),
          ...style
        }}
      >
        {children && children(childProps)}
      </div>
    </Portal>
  );
});

export default Popper;
