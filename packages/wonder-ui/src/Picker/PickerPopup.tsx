import * as React from 'react';
import Button from '../Button';
import Drawer from '../Drawer';
import Navbar from '../Navbar';
import type { PickerPopupProps } from './PickerTypes';

const PickerPopup = React.forwardRef<HTMLDivElement, PickerPopupProps>(
  (props, ref) => {
    const {
      children,
      className,
      style,
      title,
      subTitle,
      cancelText = '取消',
      confirmText = '确定',
      onCancel,
      onConfirm,
      visible,
      disableRipple
    } = props;

    return (
      <Drawer
        ref={ref}
        anchor="bottom"
        className={className}
        style={style}
        visible={visible}
        onClose={onCancel}
      >
        <Navbar
          title={title}
          subTitle={subTitle}
          left={
            <Button
              disableRipple={disableRipple}
              variant="text"
              onClick={onCancel}
            >
              {cancelText}
            </Button>
          }
          right={
            <Button
              disableRipple={disableRipple}
              variant="text"
              onClick={onConfirm}
            >
              {confirmText}
            </Button>
          }
        />
        {children}
      </Drawer>
    );
  }
);

export default PickerPopup;
