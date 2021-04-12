import * as React from 'react';
import Dialog, { DialogButtonProps } from '../Dialog';

export interface DialogAlertProps {
  children?: React.ReactElement;
  title?: React.ReactChild;
  text?: React.ReactChild;
  onOk?: () => void;
  okText?: string;
  onCancel?: () => void;
  cancelText?: string;
  confirm?: boolean;
}

const DialogAlert: React.FC<DialogAlertProps> = React.forwardRef(
  (props, ref) => {
    const {
      okText = '确定',
      cancelText = '取消',
      onOk,
      onCancel,
      confirm = false,
      ...rest
    } = props;

    const buttons: DialogButtonProps[] = confirm
      ? [
          {
            children: cancelText,
            onClick: onCancel
          },
          {
            children: okText,
            onClick: onOk,
            primary: true
          }
        ]
      : [
          {
            children: okText,
            onClick: onOk,
            primary: true
          }
        ];

    return <Dialog ref={ref} buttons={buttons} {...rest} />;
  }
);

export default DialogAlert;
