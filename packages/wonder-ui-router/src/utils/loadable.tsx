import * as React from 'react';

export interface LoadableComponentProps {
  lazy: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: NonNullable<React.ReactNode> | null;
  props?: object;
  element?: boolean;
}

function LoadableComponent(props: LoadableComponentProps) {
  const { fallback = null, lazy, ...rest } = props;

  const LazyComponent = React.useMemo(() => {
    return React.lazy(lazy);
  }, [lazy]);

  return (
    <React.Suspense fallback={fallback}>
      <LazyComponent {...rest} />
    </React.Suspense>
  );
}

export default function loadable<P>(data: LoadableComponentProps) {
  const {
    lazy,
    fallback,
    props: defaultProps,
    element: returnElement = true
  } = data;

  if (returnElement) {
    return (
      <LoadableComponent {...defaultProps} lazy={lazy} fallback={fallback} />
    );
  }

  return function AsyncComponent(props: P) {
    return (
      <LoadableComponent
        {...defaultProps}
        {...props}
        lazy={lazy}
        fallback={fallback}
      />
    );
  };
}
