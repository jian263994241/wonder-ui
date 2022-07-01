import * as React from 'react';
import CascaderView from '../CascaderView/CascaderView';
import useThemeProps from '../styles/useThemeProps';
import { CascaderProps, CascaderAction } from './CascaderTypes';
import { COMPONENT_NAME } from './CascaderClasses';
import { createChainedFunction, nextTick } from '@wonder-ui/utils';
import PickerPopup from '../Picker/PickerPopup';
import useCascader from '../CascaderView/useCascader';
import type { PopupAction } from '../Popup/PopupTypes';

const Cascader = React.forwardRef<CascaderAction, CascaderProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      className,
      style,
      title,
      subTitle,
      classes,
      cancelText,
      confirmText,
      disableRipple,
      children,
      visible,
      defaultVisible,
      value,
      defaultValue,
      onChange,
      options,
      fieldNames,
      onConfirm,
      onFinish,
      onCancel,
      ...rest
    } = props;

    const popActionRef = React.useRef<PopupAction>(null);

    const cascader = useCascader({
      value,
      defaultValue,
      options,
      fieldNames,
      onChange,
      onFinish,
      onConfirm
    });

    const show = () => {
      popActionRef.current?.show();
    };

    const hide = () => {
      popActionRef.current?.hide();
      onCancel?.();
    };

    const handleConfirm = createChainedFunction(cascader.confirm, hide);

    React.useImperativeHandle(ref, () => ({ show, hide, confirm }), []);

    return (
      <React.Fragment>
        {typeof children === 'function'
          ? children({ selected: cascader.selected, show })
          : children}
        <PickerPopup
          ref={popActionRef}
          visible={visible}
          defaultVisible={defaultVisible}
          disableRipple={disableRipple}
          className={className}
          style={style}
          title={title}
          subTitle={subTitle}
          cancelText={cancelText}
          confirmText={confirmText}
          onConfirm={handleConfirm}
          onCancel={hide}
        >
          <CascaderView
            disableRipple={disableRipple}
            value={value}
            defaultValue={defaultValue}
            {...rest}
            cascader={cascader}
          />
        </PickerPopup>
      </React.Fragment>
    );
  }
);

export default Cascader;
