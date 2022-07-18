import * as React from 'react';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import { checkableTagClasses, useClasses } from './CheckableTagClasses';
import { css } from '@wonder-ui/utils';
import { useControlled } from '@wonder-ui/hooks';

export interface CheckableTagProps {
  className?: string;
  classes?: Partial<typeof checkableTagClasses>;
  children?: React.ReactNode;
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

  onClick?: React.MouseEventHandler;
}

const CheckableTagRoot = styled(Typography, {
  name: 'WuiCheckableTag',
  slot: 'Root'
})(({ theme }) => ({
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
      (e: React.MouseEvent<HTMLDivElement>) => {
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
        variant="body2"
      >
        {children}
      </CheckableTagRoot>
    );
  }
);

export default CheckableTag;
