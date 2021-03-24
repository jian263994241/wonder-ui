import * as React from 'react';
import createFCWithTheme from '../styles/createFCWithTheme';
import styled from '../styles/styled';
import type { StyleProps } from '../styles/types';
import { alpha } from '../styles/colorManipulator';
import { useForkRef, useControlled } from '@wonder-ui/hooks';

export interface SwitchStyleProps {
  checked?: boolean;
  circle?: boolean;
  color?: 'primary' | 'secondary';
}

const CheckboxRoot = styled('input', { name: 'WuiCheckbox', slot: 'Root' })<
  StyleProps<SwitchStyleProps>
>(({ theme, styleProps }) => ({
  appearance: 'none',
  colorAdjust: 'exact',
  width: styleProps.circle ? '1.3em' : '1em',
  height: styleProps.circle ? '1.3em' : '1em',
  fontSize: 'inherit',
  verticalAlign: -1,
  backgroundColor: theme.palette.background.paper,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.palette.divider,
  borderRadius: styleProps.circle ? '50%' : '.25em',
  '&:disabled': {
    pointerEvents: 'none',
    filter: 'none',
    opacity: 0.5
  },
  '&:checked': {
    borderColor: theme.palette[styleProps.color || 'primary'].main,
    backgroundColor: theme.palette[styleProps.color || 'primary'].main,
    backgroundImage: `url("data:image/svg+xml, ${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" fill="#fff"  viewBox="0 0 16 16" ><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"></path></svg>'
    )}")`
  },
  '&:indeterminate': {
    borderColor: theme.palette[styleProps.color || 'primary'].main,
    backgroundColor: theme.palette[styleProps.color || 'primary'].main,
    backgroundImage: `url("data:image/svg+xml, ${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10h8"/></svg>'
    )}")`
  },
  '&:focus': {
    outline: 0,
    boxShadow: `0 0 0 0.25rem ${alpha(
      theme.palette[styleProps.color || 'primary'].main,
      0.25
    )}`
  },
  'label > & + *': {
    marginLeft: '.3em'
  }
}));

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * @description shape
   * @default false
   */
  circle?: boolean;
  /**
   * @description color
   * @default primary
   */
  color?: 'primary' | 'secondary';
  /**
   * @description indeterminate
   * @default false
   */
  indeterminate?: boolean;
}

const Checkbox = createFCWithTheme<CheckboxProps>(
  'WuiCheckbox',
  (props, ref) => {
    const {
      checked: checkedProp,
      circle = false,
      color = 'primary',
      component,
      defaultChecked: defaultCheckedProp = false,
      disabled,
      indeterminate = false,
      onChange,
      ...rest
    } = props;
    const [checked, setChecked] = useControlled({
      name: 'WuiCheckbox',
      value: checkedProp,
      defaultValue: defaultCheckedProp
    });

    const rootRef = React.useRef<HTMLInputElement>(null);
    const hadnleRef = useForkRef(rootRef, ref);

    const styleProps = { color, disabled, circle };

    React.useEffect(() => {
      if (rootRef.current) {
        rootRef.current.indeterminate = checked ? false : indeterminate;
      }
    }, [indeterminate, checked]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
      (e) => {
        const input = e.target;

        setChecked(input.checked);
        if (onChange) {
          onChange(e);
        }
      },
      [onChange]
    );

    return (
      <CheckboxRoot
        as={component}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        type="checkbox"
        styleProps={styleProps}
        ref={hadnleRef}
        {...rest}
      />
    );
  }
);

export default Checkbox;
