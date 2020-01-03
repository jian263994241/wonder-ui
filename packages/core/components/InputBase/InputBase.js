import React from 'react';
import PropTypes from 'prop-types';
import capitalize from '@wonder-ui/utils/capitalize';
import clsx from 'clsx';
import refType from '@wonder-ui/utils/refType';
import styles from './styles';
import TextareaAutosize from '../TextareaAutosize';
import useForkRef from '@wonder-ui/utils/useForkRef';
import withStyles from '../withStyles';
import formControlState from './formControlState';

const InputBase = React.forwardRef(function InputBase(props, ref) {
  const {
    classes,
    className,
    fullWidth = false,
    inputComponent = 'input',
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    multiline = false,
    rows,
    rowsMax,
    rowsMin,
    type = 'text',
    value: valueProp,
  } = props;

  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const { current: isControlled } = React.useRef(value != null);
  const inputRef = React.useRef();
  const handleInputRefProp = useForkRef(inputRefProp, inputPropsProp.ref);
  const handleInputRef = useForkRef(inputRef, handleInputRefProp);
  
  const [focused, setFocused] = React.useState(false);
  const uiFormControl = null;

  const fcs = formControlState({
    props,
    uiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled'],
  });

  
  let InputComponent = inputComponent;
  let inputProps = {
    ...inputPropsProp,
    ref: handleInputRef,
  };

  if (typeof InputComponent !== 'string') {
    inputProps = {
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type,
      ...inputProps,
      ref: null,
    };
  } else if (multiline) {
    if (rows && !rowsMax && !rowsMin) {
      InputComponent = 'textarea';
    } else {
      inputProps = {
        rows,
        rowsMax,
        ...inputProps,
      };
      InputComponent = TextareaAutosize;
    }
  } else {
    inputProps = {
      type,
      ...inputProps,
    };
  }

  return (
    <div
      className={clsx(
        classes.root,
        classes[`color${capitalize(fcs.color || 'primary')}`],
        {
          [classes.disabled]: fcs.disabled,
          [classes.error]: fcs.error,
          [classes.fullWidth]: fullWidth,
          [classes.focused]: fcs.focused,
          [classes.formControl]: uiFormControl,
          [classes.marginDense]: fcs.margin === 'dense',
          [classes.multiline]: multiline,
          // [classes.adornedStart]: startAdornment,
          // [classes.adornedEnd]: endAdornment,
        },
        className,
      )}
    >
      <InputComponent
        {...inputProps}
        className={clsx(
          classes.input,
          {
            [classes.disabled]: fcs.disabled,
            [classes.inputTypeSearch]: type === 'search',
            [classes.inputMultiline]: multiline,
            [classes.inputMarginDense]: fcs.margin === 'dense',
            [classes.inputHiddenLabel]: fcs.hiddenLabel,
          //   [classes.inputAdornedStart]: startAdornment,
          //   [classes.inputAdornedEnd]: endAdornment,
          },
          inputPropsProp.className,
        )}
      />
    </div>
  );
});


InputBase.displayName = 'InputBase';


export default withStyles(styles)(InputBase);