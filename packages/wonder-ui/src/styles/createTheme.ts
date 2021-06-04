import * as React from 'react';
import type { CSSObject } from '@wonder-ui/styled';
import * as transitions from './transitions';
import createPalette, { PaletteOptions, Palette } from './theme/createPalette';
import createTypography, { TypographyOptions } from './theme/createTypography';
import createSpacing, { SpacingConfig, Spacing } from './theme/createSpacing';
import createBreakpoints, {
  Breakpoints,
  BreakpointsOptions
} from './theme/createBreakpoints';
import shadows from './theme/shadows';
import shape, { Shape } from './theme/shape';
import zIndex from './theme/zIndex';

interface ThemeComponents {
  components?: {
    [name: string]: {
      defaultProps?: React.ComponentProps<any>;
      styleOverrides?: {
        [slot: string]: CSSObject;
      };
    };
  };
}

interface ThemeOptions extends ThemeComponents {
  breakpoints?: BreakpointsOptions;
  direction?: 'ltr' | 'rtl';
  palette?: PaletteOptions;
  spacing?: SpacingConfig;
  typography?: TypographyOptions;
  shadows?: string[];
  shape?: Shape;
  zIndex?: Partial<typeof zIndex>;
}

export interface Theme extends ThemeComponents {
  breakpoints: Breakpoints;
  direction: 'ltr' | 'rtl';
  palette: Palette;
  spacing: Spacing;
  transitions: typeof transitions;
  typography: ReturnType<typeof createTypography>;
  shadows: string[];
  shape: Shape;
  zIndex: typeof zIndex;
}

export function createTheme(options: ThemeOptions = {}): Theme {
  const {
    breakpoints: breakpointsInput,
    direction = 'ltr',
    palette: paletteInput,
    shape: shapeInput,
    spacing = 8,
    typography,
    zIndex: zIndexInput,
    ...rest
  } = options;

  return {
    breakpoints: createBreakpoints(breakpointsInput),
    direction,
    palette: createPalette(paletteInput),
    shadows,
    shape: { ...shape, ...shapeInput },
    spacing: createSpacing(spacing),
    transitions,
    typography: createTypography(typography),
    zIndex: { ...zIndex, ...zIndexInput },
    ...rest
  };
}

export default createTheme;
