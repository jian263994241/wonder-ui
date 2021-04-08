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
import zIndex, { ZIndex } from './theme/zIndex';

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
  palette?: PaletteOptions;
  spacing?: SpacingConfig;
  typography?: TypographyOptions;
  shadows?: string[];
  zIndex?: Partial<ZIndex>;
}

export interface Theme extends ThemeComponents {
  breakpoints: Breakpoints;
  palette: Palette;
  spacing: Spacing;
  transitions: typeof transitions;
  typography: ReturnType<typeof createTypography>;
  shadows: string[];
  zIndex: ZIndex;
}

export default function createTheme(options: ThemeOptions = {}): Theme {
  const {
    palette: paletteInput,
    spacing = 8,
    typography,
    breakpoints: breakpointsInput,
    zIndex: zIndexInput,
    ...rest
  } = options;

  return {
    breakpoints: createBreakpoints(breakpointsInput),
    palette: createPalette(paletteInput),
    spacing: createSpacing(spacing),
    transitions,
    typography: createTypography(typography),
    zIndex: { ...zIndex, ...zIndexInput },
    shadows,
    ...rest
  };
}
