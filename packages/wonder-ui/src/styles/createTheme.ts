import * as React from 'react';
import * as transitions from './transitions';
import createBreakpoints, {
  Breakpoints,
  BreakpointsOptions
} from './theme/createBreakpoints';
import createPalette, { Palette, PaletteOptions } from './theme/createPalette';
import createSpacing, { Spacing, SpacingConfig } from './theme/createSpacing';
import createTypography, { TypographyOptions } from './theme/createTypography';
import shadows from './theme/shadows';
import shape, { Shape } from './theme/shape';
import zIndex from './theme/zIndex';
import type { CSSObject } from '@wonder-ui/styled';

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
  shape?: Partial<Shape>;
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

export const defaultTheme = {} as Theme;

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

  const newTheme = {
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

  Object.assign(defaultTheme, newTheme);

  return newTheme;
}

export default createTheme;
