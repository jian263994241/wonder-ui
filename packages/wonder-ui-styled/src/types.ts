import type { Theme, CSSObject, PropsOf } from '@emotion/react';
import type {
  CreateStyledComponent,
  FilteringStyledOptions,
  StyledOptions
} from '@emotion/styled/base';

export type { CSSObject, PropsOf, Theme };

/**
 * @desc
 * This function accepts a React component or tag ('div', 'a' etc).
 *
 * @example styled(MyComponent)({ width: 100 })
 * @example styled(MyComponent)(myComponentProps => ({ width: myComponentProps.width })
 * @example styled('div')({ width: 100 })
 * @example styled('div')<Props>(props => ({ width: props.width })
 */
export interface CreateStyled<AdditionOptions extends Object = {}> {
  <
    C extends React.ComponentClass<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps> &
      AdditionOptions
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme;
      as?: React.ElementType;
    },
    {},
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;

  <C extends React.ComponentClass<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React.ComponentProps<C>> & AdditionOptions
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
      as?: React.ElementType;
    },
    {},
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;

  <
    C extends React.ComponentType<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps> &
      AdditionOptions
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme;
      as?: React.ElementType;
    }
  >;

  <C extends React.ComponentType<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React.ComponentProps<C>> & AdditionOptions
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
      as?: React.ElementType;
    }
  >;

  <
    Tag extends keyof JSX.IntrinsicElements,
    ForwardedProps extends keyof JSX.IntrinsicElements[Tag] = keyof JSX.IntrinsicElements[Tag]
  >(
    tag: Tag,
    options: FilteringStyledOptions<
      JSX.IntrinsicElements[Tag],
      ForwardedProps
    > &
      AdditionOptions
  ): CreateStyledComponent<
    { theme?: Theme; as?: React.ElementType },
    Pick<JSX.IntrinsicElements[Tag], ForwardedProps>
  >;

  <Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
    options?: StyledOptions<JSX.IntrinsicElements[Tag]> & AdditionOptions
  ): CreateStyledComponent<
    { theme?: Theme; as?: React.ElementType },
    JSX.IntrinsicElements[Tag]
  >;
}
