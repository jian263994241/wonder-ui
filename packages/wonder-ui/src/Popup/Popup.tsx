import * as React from 'react';
import Modal, { ModalProps } from '../Modal';
import Page, { PageProps } from '../Page';
import Slide from '../Slide';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { TransitionDuration, TransitionBaseProps } from '../styles/transitions';
import { css } from '@wonder-ui/utils';
import { popupClasses, useClasses } from './PopupClasses';

export interface PopupProps {
  ModalProps?: Partial<ModalProps>;
  PageProps?: Partial<PageProps>;
  TransitionComponent?: React.ComponentType<TransitionBaseProps>;
  TransitionProps?: TransitionBaseProps;
  /**
   * 内容
   */
  children?: React.ReactNode;
  className?: string;
  classes?: Partial<typeof popupClasses>;
  /**
   * 关闭时触发事件
   */
  onClose?: () => void;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 过渡时长(ms)
   */
  duration?: TransitionDuration;
  /**
   * 显示隐藏
   * @default false
   */
  visible?: boolean;
  /**
   * 保持节点
   */
  keepMounted?: ModalProps['keepMounted'];
}

const PopupRoot = styled(Modal, {
  name: 'WuiPopup',
  slot: 'Root',
  shouldForwardProp: () => true
})<ModalProps>(({ theme }) => ({
  zIndex: theme.zIndex.fixed,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const PopupPage = styled(Page.withComponent(Slide), {
  name: 'WuiPopup',
  slot: 'Page',
  shouldForwardProp: () => true
})<PageProps>(({ theme }) => ({
  // position: 'fixed',
  outline: 0,
  [theme.breakpoints.up('md')]: {
    borderRadius: theme.shape.borderRadius,
    width: 630,
    maxHeight: 630
  }
}));

const Popup = React.forwardRef<HTMLDivElement, PopupProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiPopup' });
  const {
    ModalProps,
    PageProps,
    children,
    className,
    visible = false,
    title,
    onClose,
    TransitionComponent = Slide,
    TransitionProps,
    duration,
    keepMounted = false,
    ...rest
  } = props;

  const styleProps = { ...props };

  const classes = useClasses(styleProps);

  return (
    <PopupRoot
      autoFocus
      visible={visible}
      onClose={onClose}
      ref={ref}
      keepMounted={keepMounted}
      {...ModalProps}
      {...rest}
      BackdropProps={ModalProps?.BackdropProps}
      classes={{ root: css(classes.root, className) }}
    >
      <PopupPage
        direction="up"
        in={visible}
        duration={duration}
        showCloseButton
        title={title}
        onClose={onClose}
        classes={{ root: css(classes.page, PageProps?.className) }}
        {...PageProps}
      >
        {children}
      </PopupPage>
    </PopupRoot>
  );
});

export default Popup;
