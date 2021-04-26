import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import type { PickStyleProps } from '../styles/types';
import { alpha } from '../styles/colorManipulator';

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * @description color
   * @default primary
   */
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info';
  /**
   * @description Ref
   */
  ref?: React.Ref<HTMLInputElement>;
}

const RadioRoot = styled('input', { name: 'WuiRadio', slot: 'Root' })<
  PickStyleProps<RadioProps, 'color'>
>(({ theme, styleProps }) => ({
  appearance: 'none',
  colorAdjust: 'exact',
  width: '1em',
  height: '1em',
  fontSize: 'inherit',
  verticalAlign: -1,
  backgroundColor: theme.palette.background.paper,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.palette.divider,
  borderRadius: '50%',
  transition: theme.transitions.create(
    ['border-color', 'background-color', 'box-shadow', 'opacity'],
    {
      duration: theme.transitions.duration.shortest
    }
  ),
  '&:disabled': {
    pointerEvents: 'none',
    filter: 'none',
    opacity: 0.5
  },
  '&:checked': {
    borderColor: theme.palette[styleProps.color || 'primary'].main,
    backgroundColor: theme.palette[styleProps.color || 'primary'].main,
    backgroundImage: `url("data:image/svg+xml, ${encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#fff'/></svg>"
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

const Radio: React.FC<RadioProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiRadio' });
  const { className, color = 'primary', ...rest } = props;

  const styleProps = { color };

  const classes = useClasses({ ...props, styleProps, name: 'WuiRadio' });

  return (
    <RadioRoot
      className={classes.root}
      ref={ref}
      styleProps={styleProps}
      type="radio"
      {...rest}
    />
  );
});

export default Radio;
