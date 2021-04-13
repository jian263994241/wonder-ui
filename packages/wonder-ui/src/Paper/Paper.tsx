import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import { alpha } from '../styles/colorManipulator';
import type { BaseProps, PickStyleProps } from '../styles/types';

const getOverlayAlpha = (elevation: number): number => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return Number((alphaValue / 100).toFixed(2));
};

export interface PaperProps extends BaseProps {
  elevation?: number;
  square?: boolean;
  variant?: 'elevation' | 'outlined';
}

const PaperRoot = styled('div', {
  name: 'WuiPaper',
  slot: 'Root'
})<PickStyleProps<PaperProps, 'elevation' | 'square' | 'variant'>>(
  ({ theme, styleProps }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    transition: theme.transitions.create('box-shadow'),
    ...(!styleProps.square && {
      borderRadius: theme.shape.borderRadius
    }),
    ...(styleProps.variant === 'outlined' && {
      border: `1px solid ${theme.palette.divider}`
    }),
    ...(styleProps.variant === 'elevation' && {
      boxShadow: theme.shadows[styleProps.elevation],
      ...(theme.palette.mode === 'dark' && {
        backgroundImage: `linear-gradient(${alpha(
          '#fff',
          getOverlayAlpha(styleProps.elevation)
        )}, ${alpha('#fff', getOverlayAlpha(styleProps.elevation))})`
      })
    })
  })
);

const Paper: React.FC<PaperProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiPaper' });
  const {
    className,
    component = 'div',
    elevation = 1,
    square = false,
    variant = 'elevation',
    ...rest
  } = props;

  const styleProps = { elevation, square, variant };

  const classes = useClasses({ ...props, styleProps, name: 'WuiPaper' });

  return (
    <PaperRoot
      as={component}
      className={classes.root}
      styleProps={styleProps}
      ref={ref}
      {...rest}
    />
  );
});

export default Paper;
