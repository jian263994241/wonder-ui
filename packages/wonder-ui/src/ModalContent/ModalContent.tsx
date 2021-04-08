import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import type { BaseProps, PickStyleProps } from '../styles/types';
import Typography, { TypographyProps } from '../Typography';
import Button, { ButtonProps } from '../Button';
import CloseButton from '../CloseButton';
import Space from '../Space';

export interface ModalContentProps extends BaseProps {
  /**
   * Cancel button props
   */
  cancelButtonProps?: ButtonProps;
  /**
   * Cancel button text
   */
  cancelText?: string;
  /**
   * Align center
   */
  centered?: boolean;
  /**
   * Children
   */
  children?: React.ReactNode;
  /**
   * Footer
   */
  footer?: React.ReactNode;
  /**
   * Header
   */
  header?: React.ReactNode;
  /**
   * Ok button props
   */
  okButtonProps?: ButtonProps;
  /**
   * Ok button text
   */
  okText?: string;
  /**
   * Click event
   */
  onCancel?: ButtonProps['onClick'];
  /**
   * Click event
   */
  onClose?: ButtonProps['onClick'];
  /**
   * Click event
   */
  onOk?: ButtonProps['onClick'];
  /**
   * Title text
   */
  title?: string;
  /**
   * Title TypographyProps
   */
  titleTypographyProps?: TypographyProps;
}

const ModalContentRoot = styled('div', {
  name: 'ModalContent',
  slot: 'Root'
})<PickStyleProps<ModalContentProps, 'centered'>>(({ theme, styleProps }) => ({
  boxSizing: 'border-box',
  outline: 0,
  position: 'relative',
  top: 100,
  margin: '0 auto',
  backgroundColor: theme.palette.background.paper,
  borderRadius: 2,
  boxShadow: theme.shadows[5],
  width: 580,
  ...(styleProps.centered && {
    display: 'block',
    textAlign: 'left',
    top: '50%',
    transform: 'translateY(-50%)'
  }),
  [theme.breakpoints.down('sm')]: {
    width: `calc(100vw - 16px)`,
    margin: '8px auto'
  }
}));

const ModalContentBody = styled('div', {
  name: 'ModalContent',
  slot: 'Body'
})(() => ({
  padding: 24,
  wordWrap: 'break-word'
}));

const ModalContentHeader = styled('div', {
  name: 'ModalContent',
  slot: 'Header'
})(({ theme }) => ({
  padding: '10px 24px',
  background: theme.palette.background.paper,
  borderBottom: 'thin solid #f0f0f0',
  borderRadius: '2px 2px 0 0',
  textAlign: 'left',
  '&:empty': {
    display: 'none'
  }
}));

const ModalContentFooter = styled('div', {
  name: 'ModalContent',
  slot: 'Footer'
})(() => ({
  padding: '10px 16px',
  textAlign: 'right',
  borderTop: 'thin solid #f0f0f0',
  borderRadius: '0 0 2px 2px',
  '&:empty': {
    display: 'none'
  }
}));

const ModalContent: React.FC<ModalContentProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'ModalContent' });
    const {
      children,
      className,
      centered = false,
      title,
      header,
      okText = '确定',
      cancelText = '取消',
      onCancel,
      onOk,
      onClose,
      okButtonProps,
      cancelButtonProps,
      titleTypographyProps,
      footer = null,
      ...rest
    } = props;

    const styleProps = { centered };

    const classes = useClasses({ ...props, styleProps, name: 'ModalContent' });

    return (
      <ModalContentRoot
        styleProps={styleProps}
        className={classes.root}
        ref={ref}
        {...rest}
      >
        {onClose && (
          <CloseButton
            size="medium"
            onClick={onClose}
            style={{ position: 'absolute', right: 0, top: 0 }}
          />
        )}

        <ModalContentHeader>
          {header
            ? header
            : title && (
                <Typography variant="subtitle1" {...titleTypographyProps}>
                  {title}
                </Typography>
              )}
        </ModalContentHeader>
        <ModalContentBody>{children}</ModalContentBody>
        <ModalContentFooter>
          {footer
            ? footer
            : (onCancel || onOk) && (
                <Space>
                  {onCancel && (
                    <Button
                      onClick={onCancel}
                      variant="outlined"
                      {...cancelButtonProps}
                    >
                      {cancelText}
                    </Button>
                  )}
                  {onOk && (
                    <Button onClick={onOk} {...okButtonProps}>
                      {okText}
                    </Button>
                  )}
                </Space>
              )}
        </ModalContentFooter>
      </ModalContentRoot>
    );
  }
);

export default ModalContent;
