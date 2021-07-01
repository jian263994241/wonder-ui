import * as React from 'react';

export function forwardRef<T, P = {}>(
  render: React.ForwardRefRenderFunction<T, P>
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
> & {
  withComponent<T2 extends React.ElementType>(
    Component: T2,
    propName?: string
  ): React.ComponentType<P & React.ComponentProps<T2>>;
} {
  const Target: any = React.forwardRef(render);

  function TargetWithComponent<T2 extends React.ElementType>(Component: T2) {
    return (props: P & React.ComponentProps<T2>) => {
      const newProps = { component: Component, ...props };

      return <Target {...newProps} />;
    };
  }

  Target.withComponent = TargetWithComponent;

  return Target;
}
