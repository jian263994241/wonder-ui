import * as React from 'react';
import shadows from './shadows';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import {
  createCssVars,
  css,
  forwardRef,
  generateUtilityClasses
} from '@wonder-ui/utils';

const COMPONENT_NAME = 'WuiPaper';

export const paperClasses = generateUtilityClasses(COMPONENT_NAME, ['root']);

const cssVars = createCssVars(COMPONENT_NAME, ['borderRadius', 'elevation']);

const getOverlayAlpha = (elevation: number): number => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return Number((alphaValue / 100).toFixed(2));
};

export interface PaperProps {
  className?: string;
  component?: React.ElementType;
  style?: React.CSSProperties;
  /**
   * 阴影等级
   * @default 0
   */
  elevation?: number;
}

const PaperRoot = styled('div', {
  name: 'WuiPaper',
  slot: 'Root'
})<{ styleProps: PaperProps }>(({ theme, styleProps }) => ({
  ...cssVars.style({
    borderRadius: 0,
    elevation: shadows[styleProps.elevation ?? 0]
  }),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: theme.transitions.create('box-shadow'),
  borderRadius: cssVars.value('borderRadius'),
  boxShadow: cssVars.value('elevation'),

  ...(theme.palette.mode === 'dark' && {
    backgroundImage: `linear-gradient(${alpha(
      theme.palette.common.white,
      getOverlayAlpha(styleProps.elevation ?? 0)
    )}, ${alpha(
      theme.palette.common.white,
      getOverlayAlpha(styleProps.elevation ?? 0)
    )})`
  })
}));

const Paper = forwardRef<HTMLDivElement, PaperProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const { className, component, elevation = 0, ...rest } = props;

  const styleProps = { ...props, elevation };

  return (
    <PaperRoot
      as={component}
      className={css(paperClasses.root, className)}
      styleProps={styleProps}
      ref={ref}
      {...rest}
    />
  );
});

export default Paper;
