import * as React from 'react';
import type { CSSObject } from '@wonder-ui/styled';
import * as transitions from './theme/transitions';
import createPalette, { PaletteOptions } from './theme/createPalette';
import createTypography, { TypographyOptions } from './theme/createTypography';
import createSpacing from './theme/createSpacing';
import variables, { Variables } from './theme/variables';
import { deepmerge } from '@wonder-ui/utils';

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
  palette?: PaletteOptions;
  spacing?: number;
  typography?: TypographyOptions;
  variables?: Partial<Variables>;
}

export interface Theme extends ThemeComponents {
  palette: ReturnType<typeof createPalette>;
  transitions: typeof transitions;
  typography: ReturnType<typeof createTypography>;
  spacing: ReturnType<typeof createSpacing>;
  variables: Readonly<Variables>;
}

export default function createTheme(options: ThemeOptions = {}): Theme {
  const {
    palette: paletteInput,
    spacing = 8,
    typography,
    variables: variablesInput,
    ...rest
  } = options;

  return {
    palette: createPalette(paletteInput),
    typography: createTypography(typography),
    spacing: createSpacing(spacing),
    variables: deepmerge(variables, variablesInput),
    transitions,
    ...rest
  };
}
