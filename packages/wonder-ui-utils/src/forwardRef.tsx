import * as React from 'react';

export function forwardRef<T, P = {}>(
  render: React.ForwardRefRenderFunction<T, P>
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
> & {
  withComponent<T2 extends React.ElementType>(
    Component: T2
  ): React.ComponentType<P & React.ComponentProps<T2>>;
} {
  const Target: any = React.forwardRef(render);

  Target.withComponent = function TargetWithComponent<
    T2 extends React.ElementType
  >(Component: T2) {
    return (props: P & React.ComponentProps<T2>) => (
      <Target component={Component} {...props} />
    );
  };

  return Target;
}
