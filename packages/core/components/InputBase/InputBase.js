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
import useEnhancedEffect from '@wonder-ui/utils/useEnhancedEffect';
import { isFilled } from './utils';

const InputBase = React.forwardRef(function InputBase(props, ref) {
  const {
    'aria-describedby': ariaDescribedby,
    alignRight = false,
    autoComplete,
    autoFocus,
    classes,
    className,
    clearButton = false,
    color,
    defaultValue,
    disabled,
    endAdornment,
    error,
    fullWidth = false,
    id,
    inputComponent = 'input',
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    margin,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    rowsMax,
    rowsMin,
    startAdornment,
    type = 'text',
    value: valueProp,
    ...rest
  } = props;

  let value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const { current: isControlled } = React.useRef(!!onChange || !!value);

  if(isControlled){
    value = value || '';
  }

  const inputRef = React.useRef();
  const handleInputRefProp = useForkRef(inputRefProp, inputPropsProp.ref);
  const handleInputRef = useForkRef(inputRef, handleInputRefProp);
  const [focused, setFocused] = React.useState(false);
  const [clearButtonVisible, setClearButtonVisibled] = React.useState(false);

  const muiFormControl = null;
  
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled'],
  });

  // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.
  React.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;

  const checkDirty = React.useCallback(
    obj => {
      if (isFilled(obj)) {
        if (onFilled) {
          onFilled();
        }
      } else if (onEmpty) {
        onEmpty();
      }
    },
    [onFilled, onEmpty],
  );

  useEnhancedEffect(() => {
    if (isControlled) {
      checkDirty({ value }); 
    }
  }, [value, checkDirty, isControlled]);

  const showClearButton = (element) => {
    if(readOnly) return ;
    const _value = element.value;
    if(_value && _value.length > 0){
      setClearButtonVisibled(true);
    }else{
      setClearButtonVisibled(false);
    }
  };

  const hideClearButtonTimeOut = React.useRef();

  useEnhancedEffect(()=>{
    const element = inputRef.current;
    if(focused){
      clearTimeout(hideClearButtonTimeOut.current);
      showClearButton(element);
    }else{
      hideClearButtonTimeOut.current = setTimeout(() => {
        setClearButtonVisibled(false);
      }, 132);
    }
  }, [focused]);

  const handleFocus = event => {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  const handleChange = (event, ...args) => {
    const element = event.target || inputRef.current;
    if (!isControlled) {
      if (element == null) {
        throw new TypeError( 'Expected valid input target. ');
      }

      checkDirty({
        value: element.value,
      });
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(element.value);
    }

    // Perform in the willUpdate
    if (onChange) {
      onChange(element.value);
    }

    showClearButton(event.target);
  };

  // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).
  React.useEffect(() => {
    checkDirty(inputRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = event => {
    if (
      inputRef.current 
      // && event.currentTarget === event.target
      && event.currentTarget.contains(event.target)
    ) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

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

  const handleAutoFill = event => {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(
      event.animationName.indexOf('auto-fill-cancel') !== -1 ? inputRef.current : { value: 'x' },
    );
  };

  const handleClear = event => {
    const element = inputRef.current;
    
    if(!isControlled){

      element.value = '';

      checkDirty({ value: '' });
    }

    element.focus();

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange('');
    }

    if (onChange) {
      onChange('');
    }
  }
  
  React.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);

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
          [classes.formControl]: muiFormControl,
          [classes.marginDense]: fcs.margin === 'dense',
          [classes.multiline]: multiline,
          [classes.adornedStart]: startAdornment,
          [classes.adornedEnd]: endAdornment,
        },
        className,
      )}
      onClick={handleClick}
      ref={ref}
      {...rest}
    >
      {startAdornment}
      <InputComponent
        aria-invalid={fcs.error}
        aria-describedby={ariaDescribedby}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={fcs.disabled}
        id={id}
        onAnimationStart={handleAutoFill}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        required={fcs.required}
        rows={rows}
        value={value}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        {...inputProps}
        className={clsx(
          classes.input,
          {
            [classes.disabled]: fcs.disabled,
            [classes.inputTypeSearch]: type === 'search',
            [classes.inputMultiline]: multiline,
            [classes.inputMarginDense]: fcs.margin === 'dense',
            [classes.inputHiddenLabel]: fcs.hiddenLabel,
            [classes.inputAdornedStart]: startAdornment,
            [classes.inputAdornedEnd]: endAdornment,
            [classes.textAlignRight]: alignRight
          },
          inputPropsProp.className,
        )}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      {clearButton && clearButtonVisible && <i className={classes.iconClear} onClick={handleClear}></i>}
      {endAdornment}
      {renderSuffix
        ? renderSuffix({
            ...fcs,
            startAdornment,
          })
        : null}
    </div>
  );
});

InputBase.propTypes = {
  /**
   * @ignore
   */
  'aria-describedby': PropTypes.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The CSS class name of the wrapper element.
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes.node,
  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: PropTypes.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(['dense', 'none']),
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the input is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes.bool,
  /**
   * @ignore
   */
  renderSuffix: PropTypes.func,
  /**
   * If `true`, the `input` element will be required.
   */
  required: PropTypes.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  rowsMin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: PropTypes.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.any,
};

InputBase.displayName = 'InputBase';


export default withStyles(styles)(InputBase);