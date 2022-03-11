import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

interface StyledProvider {
  injectFirst?: boolean;
  children?: NonNullable<React.ReactNode>;
}

// <meta name="emotion-insertion-point" content="">
const emotionInsertionPoint = document.createElement('meta');
emotionInsertionPoint.setAttribute('name', 'emotion-insertion-point');
emotionInsertionPoint.setAttribute('content', '');

export const cache = createCache({
  key: 'css',
  insertionPoint: emotionInsertionPoint
});

export default function StyledEngineProvider(
  props: StyledProvider
): JSX.Element {
  const { injectFirst, children } = props;

  React.useEffect(() => {
    const head = document.querySelector('head');

    if (head && injectFirst) {
      head.appendChild(emotionInsertionPoint);

      return () => {
        head.removeChild(emotionInsertionPoint);
      };
    }
  }, [injectFirst]);

  return (
    <React.Fragment>
      {injectFirst ? (
        <CacheProvider value={cache}>{children}</CacheProvider>
      ) : (
        children
      )}
    </React.Fragment>
  );
}
