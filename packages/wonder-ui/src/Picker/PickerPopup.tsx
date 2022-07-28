import * as React from 'react';
import Button from '../Button';
import Navbar from '../Navbar';
import Popup from '../Popup/Popup';
import type { PickerPopupProps } from './PickerTypes';
import type { PopupAction } from '../Popup/PopupTypes';

const PickerPopup = React.forwardRef<PopupAction, PickerPopupProps>(
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
      defaultVisible,
      disableRipple
    } = props;

    return (
      <Popup
        autoHeight
        ref={ref}
        className={className}
        style={style}
        visible={visible}
        defaultVisible={defaultVisible}
        header={
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
        }
      >
        {children}
      </Popup>
    );
  }
);

export default PickerPopup;
