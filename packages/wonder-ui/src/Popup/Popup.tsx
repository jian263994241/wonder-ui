import * as React from 'react';
import Modal from '../Modal';
import Page, { PageProps } from '../Page';
import Slide from '../Slide';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './PopupClasses';
import { composeClasses } from '@wonder-ui/utils';
import { css } from '@wonder-ui/utils';
import { useControlled } from '@wonder-ui/hooks';
import type { PopupAction, PopupProps, PopupStyleProps } from './PopupTypes';

const useClasses = (styleProps: PopupStyleProps) => {
  const { classes, autoHeight } = styleProps;

  const slots = {
    root: ['root', autoHeight && 'autoHeight'],
    page: ['page']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const PopupRoot = styled(Modal, {
  name: COMPONENT_NAME,
  slot: 'Root',
  shouldForwardProp: () => true
})(({ theme }) => ({
  zIndex: theme.zIndex.fixed,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  [theme.breakpoints.up('md')]: {
    alignItems: 'center'
  }
}));

const PopupPage = styled(Slide, {
  name: COMPONENT_NAME,
  slot: 'Page'
})<{ styleProps: PopupStyleProps }>(({ theme, styleProps }) => ({
  position: 'fixed',
  overflow: 'hidden',
  outline: 0,

  ...(styleProps.autoHeight && {
    height: 'auto'
  }),

  [theme.breakpoints.up('md')]: {
    borderRadius: theme.shape.borderRadius,
    width: 630,
    maxHeight: 630
  }
}));

const Popup = React.forwardRef<PopupAction, PopupProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiPopup' });
  const {
    autoHeight = false,
    children,
    className,
    visible: visibleProp,
    defaultVisible = false,
    title,
    onClose,
    onExited,
    onBackdropClick,
    keepMounted = false,
    htmlRef,
    ...PageProps
  } = props;

  const [visible, setVisibleIfUnControlled] = useControlled({
    value: visibleProp,
    defaultValue: defaultVisible
  });

  const show = () => {
    setVisibleIfUnControlled(true);
  };

  const hide = () => {
    setVisibleIfUnControlled(false);
  };

  React.useImperativeHandle(ref, () => ({ show, hide }), []);

  const styleProps = { ...props, autoHeight };
  const classes = useClasses(styleProps);

  const handleClose = () => {
    hide();
    onClose?.();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    hide();
    onBackdropClick?.(e);
  };

  return (
    <PopupRoot
      autoFocus
      ref={htmlRef}
      classes={{ root: css(classes.root, className) }}
      visible={visible}
      onBackdropClick={handleBackdropClick}
      keepMounted={keepMounted}
    >
      <PopupPage
        in={visible}
        styleProps={styleProps}
        direction="up"
        onExited={onExited}
        component={Page}
        componentProps={
          {
            className: classes.page,
            showCloseButton: true,
            title,
            onClose: handleClose,
            ...PageProps
          } as PageProps
        }
      >
        {children}
      </PopupPage>
    </PopupRoot>
  );
});

export default Popup;
