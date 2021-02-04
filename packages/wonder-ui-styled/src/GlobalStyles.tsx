import * as React from 'react';
import { Global, CSSObject } from '@emotion/react';
import { isEmpty } from './utils';

type Styles = string | CSSObject;
type StylesCallback<Theme> = (theme: Theme) => Styles;

interface GlobalStylesProps<Theme = object> {
  defaultTheme?: Theme;
  styles?: Styles | StylesCallback<Theme>;
}

export default function GlobalStyles(props: GlobalStylesProps) {
  const { defaultTheme, styles } = props;

  const globalStyles =
    typeof styles === 'function'
      ? (themeInput: any) =>
          styles(isEmpty(themeInput) ? defaultTheme : themeInput)
      : styles;

  return <Global styles={globalStyles} />;
}
