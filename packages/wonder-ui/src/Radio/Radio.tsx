import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { radioClasses, useClasses } from './RadioClasses';
import { css } from '@wonder-ui/utils';

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * @description color
   * @default primary
   */
  color?: 'primary' | 'secondary';
  /**
   * @ignore
   */
  ref?: React.Ref<HTMLInputElement>;
}

export interface RadioStyleProps extends RadioProps {}

const RadioWrapper = styled('label', {
  name: 'WuiCheckbox',
  slot: 'Wrapper'
})<{ styleProps: RadioStyleProps }>(({ theme, styleProps }) => ({
  ...(styleProps.disabled && {
    color: theme.palette.action.disabled
  }),

  [`& > .${radioClasses.root} + span`]: {
    marginLeft: '0.3em'
  }
}));

const RadioRoot = styled('input', { name: 'WuiRadio', slot: 'Root' })<{
  styleProps: RadioStyleProps;
}>(({ theme, styleProps }) => ({
  appearance: 'none',
  margin: 0,
  padding: 0,
  colorAdjust: 'exact',
  width: '1em',
  height: '1em',
  fontSize: 'inherit',
  verticalAlign: 'middle',
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
  '&:checked': {
    borderColor: theme.palette[styleProps.color!].main,
    backgroundColor: theme.palette[styleProps.color!].main,
    backgroundImage: `url("data:image/svg+xml, ${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='${
        theme.palette[styleProps.color!].contrastText
      }'/></svg>`
    )}")`
  },
  '&:focus': {
    boxShadow: `0 0 0 0.25rem ${alpha(
      theme.palette[styleProps.color!].main,
      0.25
    )}`
  },
  '&:disabled': {
    pointerEvents: 'none',
    filter: 'none',
    opacity: theme.palette.action.disabledOpacity
  },
  'label > & + *': {
    marginLeft: '.3em'
  }
}));

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiRadio' });
  const {
    className,
    children,
    color = 'primary',

    ...rest
  } = props;

  const styleProps = { ...props, color };

  const classes = useClasses(styleProps);

  const radioRendered = (
    <RadioRoot
      className={css(classes.root, className)}
      ref={ref}
      type="radio"
      styleProps={styleProps}
      {...rest}
    />
  );

  if (children) {
    return (
      <RadioWrapper className={classes.wrapper} styleProps={styleProps}>
        {radioRendered}
        <span>{children}</span>
      </RadioWrapper>
    );
  }

  return radioRendered;
});

export default Radio;
