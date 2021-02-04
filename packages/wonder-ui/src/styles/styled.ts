import styled, { jsx } from '@wonder-ui/styled';
import { DefaultTheme } from './theme/defaultTheme';

declare module '@wonder-ui/styled' {
  export interface Theme extends DefaultTheme {}
}

export default styled;
export * from '@wonder-ui/styled';

export type StyledComponentProps<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = Omit<Partial<React.ComponentProps<T>>, 'as'> & {
  component?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
};
