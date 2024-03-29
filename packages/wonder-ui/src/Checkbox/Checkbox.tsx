import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { checkboxClasses, useClasses } from './CheckboxClasses';
import { css } from '@wonder-ui/utils';
import { useControlled, useForkRef } from '@wonder-ui/hooks';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * @description 圆形
   * @default false
   */
  circle?: boolean;
  /**
   * @description 颜色
   * @default primary
   */
  color?: 'primary' | 'secondary';
  /**
   * 选中
   */
  checked?: boolean;
  /**
   * 默认选中
   */
  defaultChecked?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * @description 不明确的
   * @default false
   */
  indeterminate?: boolean;
}

export interface CheckboxStyleProps extends CheckboxProps {}

const CheckboxWrapper = styled('label', {
  name: 'WuiCheckbox',
  slot: 'Wrapper'
})<{ styleProps: CheckboxStyleProps }>(({ theme, styleProps }) => ({
  display: 'inline-flex',
  alignItems: 'baseline',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  ...(styleProps.disabled && {
    color: theme.palette.action.disabled,
    cursor: 'not-allowed'
  }),

  [`& .${checkboxClasses.input}`]: {
    top: 2
  },

  [`& > span`]: {
    paddingLeft: '.3em'
  }
}));

const CheckboxRoot = styled('input', { name: 'WuiCheckbox', slot: 'Root' })<{
  styleProps: CheckboxStyleProps;
}>(({ theme, styleProps }) => ({
  appearance: 'none',
  padding: 0,
  margin: 0,
  colorAdjust: 'exact',
  width: `var(--checkbox-size, 1em)`,
  height: `var(--checkbox-size, 1em)`,
  fontSize: 'inherit',
  outline: 0,
  verticalAlign: 'middle',
  position: 'relative',
  backgroundColor: `var(--checkobx-bg-color, ${theme.palette.background.paper})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: `var(--checkbox-border-color, ${theme.palette.divider})`,
  borderRadius: '.25em',
  cursor: 'pointer',
  transition: theme.transitions.create(
    ['border-color', 'background-color', 'box-shadow', 'opacity'],
    { duration: theme.transitions.duration.shortest }
  ),
  '&:checked': {
    borderColor: `var(--checkbox-${styleProps.color}-color, ${
      theme.palette[styleProps.color!].main
    })`,
    backgroundColor: `var(--checkbox-${styleProps.color}-color, ${
      theme.palette[styleProps.color!].main
    })`,
    backgroundImage: `url("data:image/svg+xml, ${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" fill="${
        theme.palette[styleProps.color!].contrastText
      }"  viewBox="0 0 16 16" ><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"></path></svg>`
    )}")`
  },
  [`&.${checkboxClasses.indeterminate}, &:indeterminate`]: {
    borderColor: `var(--checkbox-${styleProps.color}-color, ${
      theme.palette[styleProps.color!].main
    })`,
    backgroundColor: `var(--checkbox-${styleProps.color}-color, ${
      theme.palette[styleProps.color!].main
    })`,
    backgroundImage: `url("data:image/svg+xml, ${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="none" stroke="${
        theme.palette[styleProps.color!].contrastText
      }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10h8"/></svg>`
    )}")`
  },
  '&:disabled': {
    pointerEvents: 'none',
    cursor: 'not-allowed',
    filter: 'none',
    opacity: theme.palette.action.disabledOpacity
  },
  [`&.${checkboxClasses.circle}`]: {
    width: 20,
    height: 20,
    borderRadius: '50%'
  }
}));

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiCheckbox' });

    const {
      children,
      checked: checkedProp,
      circle = false,
      className,
      color = 'primary',
      defaultChecked: defaultCheckedProp = false,
      disabled,
      indeterminate = false,
      onChange,
      style,
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

    if (children) {
      return (
        <CheckboxWrapper
          className={css(classes.root, className)}
          styleProps={styleProps}
          style={style}
        >
          <CheckboxRoot
            checked={checked}
            className={classes.input}
            disabled={disabled}
            onChange={handleChange}
            ref={hadnleRef}
            type="checkbox"
            styleProps={styleProps}
            {...rest}
          />
          <span>{children}</span>
        </CheckboxWrapper>
      );
    }

    return (
      <CheckboxRoot
        checked={checked}
        className={css(classes.root, className)}
        disabled={disabled}
        onChange={handleChange}
        ref={hadnleRef}
        type="checkbox"
        styleProps={styleProps}
        style={style}
        {...rest}
      />
    );
  }
);

export default Checkbox;
