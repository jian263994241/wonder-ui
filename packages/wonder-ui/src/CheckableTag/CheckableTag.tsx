import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { checkableTagClasses, useClasses } from './CheckableTagClasses';
import { useControlled } from '@wonder-ui/hooks';

export interface CheckableTagProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  classes?: Partial<typeof checkableTagClasses>;
  /**
   * 选中
   */
  checked?: boolean;
  /**
   * 初始选中
   */
  defaultChecked?: boolean;
  /**
   * 值改变时回调
   */
  onChange?: (checked: boolean) => void;
}

const CheckableTagRoot = styled('span', {
  name: 'WuiCheckableTag',
  slot: 'Root'
})(({ theme }) => ({
  ...theme.typography.body2,
  boxSizing: 'border-box',
  listStyle: 'none',
  display: 'inline-block',
  padding: theme.spacing(0, 1),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.primary,
  border: '1px solid',
  borderColor: theme.palette.divider,
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
    marginLeft: theme.spacing(0.5)
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
