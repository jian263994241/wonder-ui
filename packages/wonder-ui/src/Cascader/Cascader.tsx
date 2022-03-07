import * as React from 'react';
import CascaderView from '../CascaderView/CascaderView';
import useThemeProps from '../styles/useThemeProps';
import { CascaderProps } from './CascaderTypes';
import { COMPONENT_NAME } from './CascaderClasses';
import { createChainedFunction } from '@wonder-ui/utils';
import { useControlled } from '@wonder-ui/hooks';
import PickerPopup from '../Picker/PickerPopup';
import useCascader from '../CascaderView/useCascader';

const Cascader = React.forwardRef<HTMLDivElement, CascaderProps>(
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
      visible: visibleProp,
      defaultVisible = false,
      value,
      defaultValue,
      onChange,
      options,
      fieldNames,
      onConfirm,
      onFinish,
      ...rest
    } = props;

    const [visible, setVisibleUnControlled] = useControlled({
      value: visibleProp,
      defaultValue: defaultVisible
    });

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
      setVisibleUnControlled(true);
    };

    const hide = () => {
      setVisibleUnControlled(false);
    };

    const confirm = () => {
      const callback = createChainedFunction(cascader.confirm, hide);

      callback();
    };

    return (
      <React.Fragment>
        {typeof children === 'function'
          ? children({ selected: cascader.selected, show })
          : children}
        <PickerPopup
          visible={visible}
          disableRipple={disableRipple}
          ref={ref}
          className={className}
          style={style}
          title={title}
          subTitle={subTitle}
          cancelText={cancelText}
          confirmText={confirmText}
          onConfirm={confirm}
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
