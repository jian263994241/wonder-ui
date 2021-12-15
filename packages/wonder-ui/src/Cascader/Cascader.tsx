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
import { COMPONENT_NAME } from './CascaderClasses';
import { createChainedFunction } from '@wonder-ui/utils';
import { useControlled } from '@wonder-ui/hooks';

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
      title,
      classes,
      cancelText,
      separator = ',',
      value,
      disableRipple,
      children,
      onClose,
      visible: visibleProp,
      defaultVisible = false,
      onOptionsChange: onOptionsChangeProp,
      textKey = 'label',
      valueKey = 'value',
      keepMounted,
      onChange,
      onSelect,
      onRenderChildren,
      ...rest
    } = props;

    const [visible, setVisibleUnControlled] = useControlled({
      value: visibleProp,
      defaultValue: defaultVisible
    });

    const [displayText, setDisplayText] = React.useState('');

    const show = () => {
      setVisibleUnControlled(true);
    };

    const cancel = () => {
      setVisibleUnControlled(false);
      onClose?.();
    };

    const optionsChangeHandler: typeof onOptionsChangeProp = (options = []) => {
      const lastOption = options[options.length - 1];

      if (
        lastOption &&
        (!lastOption.children || lastOption.children.length === 0)
      ) {
        setDisplayText(options.map((item) => item[textKey]).join(separator));

        onChange?.(options.map((item) => item[valueKey]));

        cancel();
      }
    };

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
          onRenderChildren({ displayText, onClick: show })}
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
              disableRipple={disableRipple}
              textKey={textKey}
              valueKey={valueKey}
              onChange={onSelect}
              onOptionsChange={optionsChangeHandler}
              {...rest}
            />
          </CascaderRoot>
        </Drawer>
      </React.Fragment>
    );
  }
);

export default Cascader;
