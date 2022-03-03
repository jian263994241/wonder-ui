import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { css, forwardRef } from '@wonder-ui/utils';
import { paperClasses, PaperStyleProps, useClasses } from './PaperClasses';

const getOverlayAlpha = (elevation: number): number => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return Number((alphaValue / 100).toFixed(2));
};

export interface PaperProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  classes?: Partial<typeof paperClasses>;
  component?: React.ElementType;
  elevation?: number;
  square?: boolean;
  variant?: 'elevation' | 'outlined';
  ref?: React.Ref<any>;
}

const PaperRoot = styled('div', {
  name: 'WuiPaper',
  slot: 'Root'
})<{ styleProps: PaperStyleProps }>(({ theme, styleProps }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: theme.transitions.create('box-shadow'),
  borderRadius: `var(--paper-border-radius, ${theme.shape.borderRadius}px)`,

  [`&.${paperClasses.square}`]: {
    borderRadius: 0
  },

  [`&.${paperClasses.outlined}`]: {
    border: `thin solid ${theme.palette.divider}`
  },

  [`&.${paperClasses.elevation}`]: {
    boxShadow: theme.shadows[styleProps.elevation!],
    ...(theme.palette.mode === 'dark' && {
      backgroundImage: `linear-gradient(${alpha(
        '#fff',
        getOverlayAlpha(styleProps.elevation!)
      )}, ${alpha('#fff', getOverlayAlpha(styleProps.elevation!))})`
    })
  }
}));

const Paper = forwardRef<HTMLDivElement, PaperProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiPaper' });
  const {
    className,
    component = 'div',
    elevation = 0,
    square = false,
    variant = 'elevation',
    ...rest
  } = props;

  const styleProps = { ...props, elevation, square, variant };

  const classes = useClasses(styleProps);

  return (
    <PaperRoot
      as={component}
      className={css(classes.root, className)}
      styleProps={styleProps}
      ref={ref}
      {...rest}
    />
  );
});

export default Paper;
