import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { checkableTagClasses, useClasses } from './CheckableTagClasses';
import { useControlled } from '@wonder-ui/hooks';

export interface CheckableTagProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'onChange'> {
  classes?: Partial<typeof checkableTagClasses>;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  ref?: React.Ref<any>;
}

const CheckableTagRoot = styled('span', {
  name: 'WuiCheckableTag',
  slot: 'Root'
})(({ theme }) => ({
  ...theme.typography.body2,
  boxSizing: 'border-box',
  listStyle: 'none',
  display: 'inline-block',
  padding: '0 7px',
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.primary,
  border: '1px solid',
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  userSelect: 'none',
  verticalAlign: 'middle',
  cursor: 'pointer',
  transition: theme.transitions.create([
    'color',
    'opacity',
    'background-color',
    'border-color'
  ]),
  [`&.${checkableTagClasses.checked}`]: {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  '& + &': {
    marginLeft: 3
  }
}));

const CheckableTag = React.forwardRef<HTMLElement, CheckableTagProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiCheckableTag' });
    const {
      children,
      className,
      checked: checkedProp,
      defaultChecked: defaultCheckedProp = false,
      onClick,
      onChange,
      ...rest
    } = props;

    const [checked, setCheckedIfunControlled] = useControlled<boolean>({
      value: checkedProp,
      defaultValue: defaultCheckedProp
    });

    const handleClick = React.useCallback(
      (e) => {
        const value = !checked;

        setCheckedIfunControlled(value);

        if (onChange) {
          onChange(value);
        }

        if (onClick) {
          onClick(e);
        }
      },
      [checked]
    );

    const styleProps = { ...props, checked };

    const classes = useClasses(styleProps);

    return (
      <CheckableTagRoot
        ref={ref}
        className={css(classes.root, className)}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </CheckableTagRoot>
    );
  }
);

export default CheckableTag;
