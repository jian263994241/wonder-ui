import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { ColsType, ResponsiveValue } from '../Row/share';
import { css } from '@wonder-ui/utils';
import { useClasses } from './ColClasses';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 占位格
   */
  col?: ResponsiveValue<ColsType>;
  /**
   * 节点
   */
  component?: React.ElementType;
  /**
   * 偏移宫格
   */
  offset?: ResponsiveValue<number>;
}

const ColRoot = styled('div', { name: 'WuiCol', slot: 'Root' })({
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
      className={css(className, classes.root)}
      ref={ref as React.Ref<HTMLDivElement>}
      {...rest}
    >
      {children}
    </ColRoot>
  );
});

export default Col;
