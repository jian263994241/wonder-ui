import * as React from 'react';
import TextareaAutosize from './TextareaAutosize';
import useThemeProps from '../styles/useThemeProps';
import { componentName, useClasses } from './InputBaseClasses';
import { css } from '@wonder-ui/utils';
import { getInputActions, InputBaseAction } from './utils';
import { GlobalStyles } from '@wonder-ui/styled';
import { InputBaseRoot } from './InputBaseStyled';
import { useForkRef } from '@wonder-ui/hooks';

export type { InputBaseAction };

export interface InputBaseProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'as'> {
  actionRef?: React.Ref<InputBaseAction | null>;
  autoAdjustHeight?: boolean;
  multiline?: boolean;
  rows?: number;
  resizable?: boolean;
  ref?: React.Ref<any>;
}

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: componentName });
    const {
      actionRef,
      autoAdjustHeight = true,
      autoComplete = 'off',
      className,
      disabled = false,
      multiline = false,
      rows,
      resizable = false,
      ...rest
    } = props;

    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleRef = useForkRef(inputRef, ref);

    let InputComponent: React.ElementType = 'input';
    let inputProps: Record<string, any> = {};

    if (multiline) {
      inputProps = { autoAdjustHeight, type: undefined, rows };
      InputComponent = TextareaAutosize;
    }

    React.useImperativeHandle(
      actionRef,
      () => getInputActions(inputRef.current),
      [inputRef]
    );

    const styleProps = {
      ...props,
      autoAdjustHeight,
      multiline,
      disabled,
      resizable
    };

    const classes = useClasses(styleProps);

    return (
      <React.Fragment>
        <GlobalStyles
          styles={{
            '@keyframes auto-fill': {},
            '@keyframes auto-fill-cancel': {}
          }}
        />
        <InputBaseRoot
          autoComplete={autoComplete}
          type="text"
          {...inputProps}
          {...rest}
          styleProps={styleProps}
          className={css(className, classes.root)}
          as={InputComponent}
          disabled={disabled}
          ref={handleRef}
        />
      </React.Fragment>
    );
  }
);

export default InputBase;
