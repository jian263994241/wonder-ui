import * as React from 'react';
import Button from '../Button';
import Drawer from '../Drawer';
import Navbar from '../Navbar';
import type { PickerPopupProps } from './PickerTypes';
import { useMount } from '@wonder-ui/hooks';

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
      visible
    } = props;

    const isMounted = useMount();

    return (
      <Drawer
        keepMounted={!isMounted}
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
            <Button variant="text" onClick={onCancel}>
              {cancelText}
            </Button>
          }
          right={
            <Button variant="text" onClick={onConfirm}>
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
