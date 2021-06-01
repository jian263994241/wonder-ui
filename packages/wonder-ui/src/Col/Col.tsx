import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { ColsType, ResponsiveValue } from '../Row/share';
import { css } from '@wonder-ui/utils';
import { useClasses } from './ColClasses';

export interface ColProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'ref'> {
  /** 占位格 */
  col?: ResponsiveValue<ColsType>;
  /** as  */
  component?: React.ElementType;
  /** 偏移宫格 */
  offset?: ResponsiveValue<number>;
}

export const ColRoot = styled('div', { name: 'WuiCol', slot: 'Root' })({
  flex: '1 0 0%'
});

const Col = React.forwardRef<HTMLElement, ColProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiCol' });
  const {
    children,
    className,
    col = null,
    component,
    offset = 0,
    ...rest
  } = props;

  const styleProps = { ...props, col, offset };
  const classes = useClasses(styleProps);

  return (
    <ColRoot
      as={component}
      className={css(classes.root, className)}
      ref={ref as React.Ref<HTMLDivElement>}
      {...rest}
    >
      {children}
    </ColRoot>
  );
});

export default Col;
