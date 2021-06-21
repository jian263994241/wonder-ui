import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { capitalize, css, generateUtilityStyles } from '@wonder-ui/utils';
import { checkboxClasses, useClasses } from './CheckboxClasses';
import { useControlled, useForkRef } from '@wonder-ui/hooks';

export interface CheckboxProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'as' | 'ref'> {
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

const colors = ['primary', 'secondary'] as const;

const CheckboxRoot = styled('input', { name: 'WuiCheckbox', slot: 'Root' })(
  ({ theme }) => ({
    appearance: 'none',
    colorAdjust: 'exact',
    width: '1em',
    height: '1em',
    fontSize: 'inherit',
    verticalAlign: -1,
    outline: 0,
    backgroundColor: theme.palette.background.paper,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    borderRadius: '.25em',
    transition: theme.transitions.create(
      ['border-color', 'background-color', 'box-shadow', 'opacity'],
      { duration: theme.transitions.duration.shortest }
    ),
    '&:disabled': {
      pointerEvents: 'none',
      filter: 'none',
      opacity: 0.5
    },
    [`&.${checkboxClasses.circle}`]: {
      width: '1.2em',
      height: '1.2em',
      borderRadius: '50%'
    },
    'label > & + *': {
      marginLeft: '.3em'
    },
    ...generateUtilityStyles(colors, (styles, color) => {
      const colorName = 'color' + capitalize(color);
      //@ts-expect-error
      styles[`&.${checkboxClasses[colorName]}`] = {
        '&:checked': {
          borderColor: theme.palette[color!].main,
          backgroundColor: theme.palette[color!].main,
          backgroundImage: `url("data:image/svg+xml, ${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="${
              theme.palette[color!].contrastText
            }"  viewBox="0 0 16 16" ><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"></path></svg>`
          )}")`
        },
        [`&.${checkboxClasses.indeterminate}, &:indeterminate`]: {
          borderColor: theme.palette[color!].main,
          backgroundColor: theme.palette[color!].main,
          backgroundImage: `url("data:image/svg+xml, ${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="none" stroke="${
              theme.palette[color!].contrastText
            }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10h8"/></svg>`
          )}")`
        },
        '&:focus': {
          boxShadow: `0 0 0 0.25rem ${alpha(theme.palette[color!].main, 0.25)}`
        }
      };
    })
  })
);

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiCheckbox' });

    const {
      checked: checkedProp,
      circle = false,
      className,
      color = 'primary',
      defaultChecked: defaultCheckedProp = false,
      disabled,
      indeterminate = false,
      onChange,
      ...rest
    } = props;

    const [checked, setChecked] = useControlled({
      value: checkedProp,
      defaultValue: defaultCheckedProp
    });

    const rootRef = React.useRef<HTMLInputElement>(null);
    const hadnleRef = useForkRef(rootRef, ref);

    const styleProps = { ...props, color, circle, indeterminate };

    const classes = useClasses(styleProps);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> =
      React.useCallback(
        (e) => {
          const input = e.target;

          setChecked(input.checked);
          if (onChange) {
            onChange(e);
          }
        },
        [onChange, indeterminate]
      );

    return (
      <CheckboxRoot
        checked={checked}
        className={css(classes.root, className)}
        disabled={disabled}
        onChange={handleChange}
        ref={hadnleRef}
        type="checkbox"
        {...rest}
      />
    );
  }
);

export default Checkbox;
