import * as React from 'react';
import Button from '../Button';
import CascaderView from '../CascaderView/CascaderView';
import Drawer from '../Drawer';
import IconButton from '../IconButton';
import Navbar from '../Navbar';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import X from '../icons/X';
import { CascaderProps } from './CascaderTypes';
import {
  CascaderAction,
  CascaderOption
} from '../CascaderView/CascaderViewTypes';
import { COMPONENT_NAME } from './CascaderClasses';
import { createChainedFunction, isControlled } from '@wonder-ui/utils';
import { useControlled, useCreation, useForkRef } from '@wonder-ui/hooks';

const CascaderRoot = styled('div', { name: COMPONENT_NAME, slot: 'Root' })(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    paddingBottom: 'env(safe-area-inset-bottom)'
  })
);

const Cascader = React.forwardRef<HTMLDivElement, CascaderProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      actionRef: actionRefProp,
      title,
      classes,
      cancelText,
      separator = ',',
      disableRipple,
      children,
      onClose,
      visible: visibleProp,
      defaultVisible = false,
      textKey = 'label',
      valueKey = 'value',
      keepMounted,
      value,
      defaultValue,
      onChange,
      onRenderChildren,
      ...rest
    } = props;

    const actionRef = React.useRef<CascaderAction>(null);
    const handleRef = useForkRef(actionRef, actionRefProp);

    const [visible, setVisibleUnControlled] = useControlled({
      value: visibleProp,
      defaultValue: defaultVisible
    });

    const [options, setOptions] = React.useState<CascaderOption[]>([]);

    const show = () => {
      setVisibleUnControlled(true);
    };

    const cancel = () => {
      setVisibleUnControlled(false);
      onClose?.();
    };

    React.useEffect(() => {
      if (actionRef.current) {
        if (isControlled(props, 'value') || defaultValue) {
          const val = value ?? defaultValue;
          const options = actionRef.current.getOptions(val);
          setOptions(options);
        }
      }
    }, [defaultValue, value]);

    const handleChange = (values: CascaderOption[]) => {
      if (!isControlled(props, 'value')) {
        setOptions(options);
      }

      onChange?.(values);

      cancel();
    };

    const displayText = useCreation(() => {
      return options.map((item) => item[textKey]).join(separator);
    }, [options, separator, textKey]);

    return (
      <React.Fragment>
        {children &&
          React.isValidElement(children) &&
          React.cloneElement(children as JSX.Element, {
            value: displayText,
            onClick: createChainedFunction(
              show,
              (children.props as any).onClick
            )
          })}
        {!children &&
          onRenderChildren &&
          onRenderChildren({ displayText, onClick: show, options })}
        <Drawer
          keepMounted={keepMounted}
          visible={visible}
          anchor="bottom"
          onClose={cancel}
        >
          <CascaderRoot ref={ref}>
            <Navbar
              title={title}
              left={
                cancelText ? (
                  <Button disableRipple={disableRipple} onClick={cancel}>
                    {cancelText}
                  </Button>
                ) : (
                  <IconButton disableRipple={disableRipple} onClick={cancel}>
                    <X />
                  </IconButton>
                )
              }
            />
            <CascaderView
              actionRef={handleRef}
              disableRipple={disableRipple}
              textKey={textKey}
              valueKey={valueKey}
              onChange={handleChange}
              value={value}
              defaultValue={defaultValue}
              {...rest}
            />
          </CascaderRoot>
        </Drawer>
      </React.Fragment>
    );
  }
);

export default Cascader;
