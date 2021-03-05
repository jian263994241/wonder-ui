import * as React from 'react';
import type { CSSObject } from '@wonder-ui/styled';
import * as transitions from './transitions';
import createPalette, { PaletteOptions } from './theme/createPalette';
import createTypography, { TypographyOptions } from './theme/createTypography';
import createSpacing from './theme/createSpacing';
import containerMaxWidths from './theme/containerMaxWidths';
import breakpoints from './theme/breakpoints';
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
  breakpoints?: Partial<typeof breakpoints>;
  containerMaxWidths?: Partial<typeof containerMaxWidths>;
  palette?: PaletteOptions;
  spacing?: number;
  typography?: TypographyOptions;
  zIndex?: Partial<typeof zIndex>;
}

export interface Theme extends ThemeComponents {
  breakpoints: typeof breakpoints;
  containerMaxWidths: typeof containerMaxWidths;
  palette: ReturnType<typeof createPalette>;
  spacing: ReturnType<typeof createSpacing>;
  transitions: typeof transitions;
  typography: ReturnType<typeof createTypography>;
  zIndex: typeof zIndex;
}

export default function createTheme(options: ThemeOptions = {}): Theme {
  const {
    palette: paletteInput,
    spacing = 8,
    typography,
    containerMaxWidths: containerMaxWidthsInput,
    breakpoints: breakpointsInput,
    zIndex: zIndexInput,
    ...rest
  } = options;

  return {
    breakpoints: { ...breakpoints, ...breakpointsInput },
    containerMaxWidths: { ...containerMaxWidths, ...containerMaxWidthsInput },
    palette: createPalette(paletteInput),
    spacing: createSpacing(spacing),
    transitions,
    typography: createTypography(typography),
    zIndex: { ...zIndex, ...zIndexInput },
    ...rest
  };
}
