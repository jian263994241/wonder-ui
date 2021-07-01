import * as React from 'react';
import InputBase, { InputProps, InputAction } from '../Input';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css, composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

const componentName = 'WuiTextField';

export const textFieldClasses = generateUtilityClasses(componentName, [
  'root',
  'wrapper',
  'label',
  'fieldGroup',
  'prefix',
  'input',
  'suffix',
  'icon',
  'required',
  'disabled',
  'focused',
  'errorMessage',
  'description'
]);

export type TextFieldClasses = typeof textFieldClasses;

export type TextFieldAction = InputAction;

export interface TextFieldProps {
  actionRef?: React.Ref<TextFieldAction>;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  autoComplete?: string;
  borderless?: boolean;
  canRevealPassword?: boolean;
  className?: string;
  classes?: Partial<TextFieldClasses>;
  defaultValue?: any;
  description?: React.ReactNode;
  disabled?: boolean;
  errorMessage?: React.ReactNode;
  inputProps?: InputProps;
  label?: React.ReactNode;
  maxLength?: number;
  multiline?: boolean;
  onChange?(newValue: any): void;
  onRenderDescription?(props: TextFieldProps): React.ReactNode;
  onRenderLabel?(props: TextFieldProps): React.ReactNode;
  onRenderPrefix?(props: TextFieldProps): React.ReactNode;
  onRenderSuffix?(props: TextFieldProps): React.ReactNode;
  placeholder?: string;
  prefix?: React.ReactNode;
  readOnly?: boolean;
  ref?: React.Ref<HTMLDivElement>;
  required?: boolean;
  resizable?: boolean;
  rows?: number;
  style?: React.CSSProperties;
  suffix?: React.ReactNode;
  type?: string;
  value?: any;
}

export interface TextFieldStyleProps extends TextFieldProps {
  focused?: boolean;
}

const useClasses = (styleProps: TextFieldStyleProps) => {
  const { classes, disabled, focused, required, readOnly } = styleProps;

  const slots = {
    root: [
      'root',
      required && 'required',
      disabled && 'disabled',
      focused && 'focused',
      readOnly && 'readOnly'
    ],
    wrapper: ['wrapper'],
    label: ['label'],
    input: ['input'],
    prefix: ['prefix'],
    suffix: ['suffix'],
    errorMessage: ['errorMessage'],
    description: ['description']
  };

  return composeClasses(componentName, slots, classes);
};

const TextFieldRoot = styled('div', {
  name: componentName,
  slot: 'Root'
})({
  position: 'relative',
  boxSizing: 'border-box',
  padding: 0,
  margin: 0
});

const TextFieldWrapper = styled('div', {
  name: componentName,
  slot: 'Wrapper'
})({});

const TextFieldInput = styled(InputBase, {
  name: componentName,
  slot: 'Input'
})({
  height: 32
});

const TextFieldPrefix = styled('span', {
  name: componentName,
  slot: 'Prefix'
})({});

const TextFieldSuffix = styled('span', {
  name: componentName,
  slot: 'Suffix'
})({});

const TextFieldLabel = styled('div', {
  name: componentName,
  slot: 'Label'
})({});

const TextFieldDescription = styled('div', {
  name: componentName,
  slot: 'Description'
})({});

const TextFieldErrorMessage = styled('div', {
  name: componentName,
  slot: 'ErrorMessage'
})({});

const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: componentName });
    const {
      ariaLabel,
      ariaLabelledBy,
      autoComplete,
      borderless = false,
      canRevealPassword,
      className,
      defaultValue,
      description,
      disabled = false,
      errorMessage,
      inputProps,
      label,
      maxLength,
      multiline = false,
      onChange,
      onRenderDescription,
      onRenderLabel,
      onRenderPrefix,
      onRenderSuffix,
      placeholder,
      prefix,
      readOnly = false,
      required = false,
      resizable = false,
      rows,
      suffix,
      type,
      value,
      ...rest
    } = props;

    const styleProps = { ...props, borderless, disabled, required, readOnly };

    const classes = useClasses(styleProps);

    return (
      <TextFieldRoot
        className={css(classes.root, className)}
        ref={ref}
        {...rest}
      >
        <TextFieldWrapper className={classes.wrapper}>
          {(label || onRenderLabel) && (
            <TextFieldLabel className={classes.label}>
              {onRenderLabel ? onRenderLabel(styleProps) : label}
            </TextFieldLabel>
          )}

          <TextFieldInput
            maxLength={maxLength}
            placeholder={placeholder}
            autoComplete={autoComplete}
            {...inputProps}
            aria-labelledby={ariaLabelledBy}
            aria-label={ariaLabel}
            aria-invalid={!!errorMessage}
            className={css(classes.input, inputProps?.className)}
            readOnly={readOnly}
            disabled={disabled}
            multiline={multiline}
            resizable={resizable}
            type={type}
            prefix={
              (prefix || onRenderPrefix) && (
                <TextFieldPrefix className={classes.prefix}>
                  {onRenderPrefix ? onRenderPrefix(styleProps) : prefix}
                </TextFieldPrefix>
              )
            }
            suffix={
              (suffix || onRenderSuffix) && (
                <TextFieldSuffix className={classes.suffix}>
                  {onRenderSuffix ? onRenderSuffix(styleProps) : onRenderSuffix}
                </TextFieldSuffix>
              )
            }
          />
        </TextFieldWrapper>
        {(description || onRenderDescription) && (
          <TextFieldDescription className={classes.description}>
            {onRenderDescription
              ? onRenderDescription(styleProps)
              : description}
          </TextFieldDescription>
        )}

        {errorMessage && (
          <TextFieldErrorMessage className={classes.errorMessage}>
            {errorMessage}
          </TextFieldErrorMessage>
        )}
      </TextFieldRoot>
    );
  }
);

export default TextField;
