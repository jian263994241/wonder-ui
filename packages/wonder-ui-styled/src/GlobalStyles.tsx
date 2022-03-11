import * as React from 'react';
import { Global, CSSObject } from '@emotion/react';
import { isEmpty } from './utils';

type Styles = string | CSSObject;
type StylesCallback<Theme> = (theme: Theme) => Styles;

export interface GlobalStylesProps<Theme = object> {
  defaultTheme?: Theme;
  styles?: Styles | StylesCallback<Theme>;
}

export default function GlobalStyles<T>(
  props: GlobalStylesProps<T>
): React.ReactNode {
  const { defaultTheme, styles } = props;

  const globalStyles =
    typeof styles === 'function'
      ? (themeInput: any) =>
          styles(isEmpty(themeInput) ? defaultTheme : themeInput)
      : styles;

  const a = React.useMemo(() => globalStyles, []);

  return <Global styles={a} />;
}
