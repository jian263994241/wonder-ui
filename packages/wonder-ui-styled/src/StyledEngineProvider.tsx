import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

interface StyledProvider {
  injectFirst?: boolean;
  children?: NonNullable<React.ReactNode>;
}

export const cache = createCache({ key: 'css', prepend: true });

export default function StyledEngineProvider(props: StyledProvider) {
  const { injectFirst, children } = props;
  return injectFirst ? (
    <CacheProvider value={cache}>{children}</CacheProvider>
  ) : (
    children
  );
}
