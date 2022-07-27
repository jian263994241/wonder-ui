import * as transitions from './transitions';
import createBreakpoints, {
  Breakpoints,
  BreakpointsOptions
} from './theme/createBreakpoints';
import createPalette, { Palette, PaletteOptions } from './theme/createPalette';
import createSpacing, { Spacing, SpacingConfig } from './theme/createSpacing';
import createTypography, {
  Typography,
  TypographyOptions
} from './theme/createTypography';
import React from 'react';
import shape, { Shape } from './theme/shape';
import zIndex, { ZIndex } from './theme/zIndex';
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

type Direction = 'ltr' | 'rtl';

interface ThemeOptions extends ThemeComponents {
  breakpoints?: BreakpointsOptions;
  direction?: Direction;
  palette?: PaletteOptions;
  spacing?: SpacingConfig;
  typography?: TypographyOptions;
  shape?: Partial<Shape>;
  zIndex?: Partial<ZIndex>;
}

export interface Theme extends ThemeComponents {
  breakpoints: Breakpoints;
  direction: Direction;
  palette: Palette;
  spacing: Spacing;
  transitions: typeof transitions;
  typography: Typography;
  shape: Shape;
  zIndex: ZIndex;
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

  const newTheme = {
    breakpoints: createBreakpoints(breakpointsInput),
    direction,
    palette: createPalette(paletteInput),
    shape: { ...shape, ...shapeInput },
    spacing: createSpacing(spacing),
    transitions,
    typography: createTypography(typography),
    zIndex: { ...zIndex, ...zIndexInput },
    ...rest
  };

  return newTheme;
}

export default createTheme;

export const defaultTheme = createTheme();
