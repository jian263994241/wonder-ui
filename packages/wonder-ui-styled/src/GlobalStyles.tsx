import React from 'react';
import { Global, GlobalProps, Theme } from '@emotion/react';
import { isEmpty } from './utils';

export interface GlobalStylesProps extends GlobalProps {
  defaultTheme?: Theme;
}

export default function GlobalStyles(props: GlobalStylesProps) {
  const { defaultTheme = {}, styles } = props;

  const globalStyles =
    typeof styles === 'function'
      ? (contextTheme: Theme) =>
          styles(isEmpty(contextTheme) ? defaultTheme : contextTheme)
      : styles;

  return <Global styles={globalStyles} />;
}
