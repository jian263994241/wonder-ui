import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { capitalize, css, generateUtilityStyles } from '@wonder-ui/utils';
import { radioClasses, useClasses } from './RadioClasses';

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
  ref?: React.Ref<any>;
}

const colors = ['primary', 'secondary'] as const;

const RadioRoot = styled('input', { name: 'WuiRadio', slot: 'Root' })(
  ({ theme }) => ({
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
    'label > & + *': {
      marginLeft: '.3em'
    },
    ...generateUtilityStyles(colors, (styles, color) => {
      const colorName = 'color' + capitalize(color);
      //@ts-expect-error
      styles[`&.${radioClasses[colorName]}`] = {
        '&:checked': {
          borderColor: theme.palette[color!].main,
          backgroundColor: theme.palette[color!].main,
          backgroundImage: `url("data:image/svg+xml, ${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='${
              theme.palette[color!].contrastText
            }'/></svg>`
          )}")`
        },
        '&:focus': {
          boxShadow: `0 0 0 0.25rem ${alpha(theme.palette[color!].main, 0.25)}`
        }
      };
    })
  })
);

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiRadio' });
  const { className, color = 'primary', ...rest } = props;

  const styleProps = { ...props, color };

  const classes = useClasses(styleProps);

  return (
    <RadioRoot
      className={css(classes.root, className)}
      ref={ref}
      type="radio"
      {...rest}
    />
  );
});

export default Radio;
