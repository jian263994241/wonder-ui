import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { ColsType, getGutter, ResponsiveValue } from './share';
import { css } from '@wonder-ui/utils';
import { makeGridColumns } from './mixins';
import { rowClasses, RowStyleProps, useClasses } from './RowClasses';

export interface RowProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 内容
   */
  children?: React.ReactNode;
  classes?: Partial<typeof rowClasses>;
  /**
   * 节点
   */
  component?: React.ElementType;
  /**
   * 间距
   */
  gutter?: number | [number, number];
  /**
   * 设置均分的栅格
   */
  rowCols?: ResponsiveValue<ColsType>;
}

const RowRoot = styled('div', {
  name: 'WuiRow',
  slot: 'Root'
})<{ styleProps: RowStyleProps }>(({ theme, styleProps }) => {
  const { gutterX, gutterY } = getGutter(styleProps.gutter);

  return makeGridColumns(theme, [gutterX, gutterY]);
});

const Row = React.forwardRef<HTMLElement, RowProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiRow' });
  const {
    className,
    component,
    children,
    gutter = 0,
    rowCols = null,
    ...rest
  } = props;

  const styleProps = { ...props, gutter, rowCols };

  const classes = useClasses(styleProps);

  return (
    <RowRoot
      as={component}
      className={css(className, classes.root)}
      styleProps={styleProps}
      ref={ref as React.Ref<HTMLDivElement>}
      {...rest}
    >
      {children}
    </RowRoot>
  );
});

export default Row;
