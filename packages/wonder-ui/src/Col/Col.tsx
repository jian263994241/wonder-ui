import * as React from 'react';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyledComponentProps, StyleProps } from '../styles/types';
import GridContext from '../Row/GridContext';
import type { ContextProps } from '../Row/GridContext';
import { breakpointsKeys } from '../styles/theme/breakpoints';
import { getGutter, getResponsiveValue, ResponsiveValue } from '../Row/utils';
import theme from '../styles/defaultTheme';

export interface ColStyleProps {
  /** flex 对齐 */
  alignSelf?: ResponsiveValue<
    'start' | 'end' | 'center' | 'baseline' | 'stretch'
  >;
  /** 占位格 */
  cols?: ResponsiveValue<'auto' | boolean | number>;
  /** flex order */
  order?: ResponsiveValue<number>;
  /** 偏移宫格 */
  offset?: ResponsiveValue<number>;

  /**
   * @ignore
   */
  columns: ContextProps['columns'];
  /**
   * @ignore
   */
  gutter?: ContextProps['gutter'];

  /**
   * @ignore
   */
  rowCols?: ContextProps['rowCols'];
}

export const ColRoot = styled('div', { name: 'WuiCol', slot: 'root' })<
  StyleProps<ColStyleProps>
>(
  ({ theme, styleProps }) => {
    const { gutterX, gutterY } = getGutter(styleProps.gutter);
    return {
      boxSizing: 'border-box',
      flexShrink: 0,
      width: '100%',
      maxWidth: '100%',
      paddingRight: `calc(${theme.spacing(gutterX)}px / 2)`,
      paddingLeft: `calc(${theme.spacing(gutterX)}px / 2)`,
      marginTop: theme.spacing(gutterY)
    };
  },
  ({ styleProps }) => {
    const makeyCols = (n: number) =>
      n === 0
        ? { display: 'none' }
        : {
            flex: '0 0 auto',
            width: `${(100 / styleProps.columns) * n}%`
          };

    const makeRowCols = (n: number) =>
      n === 0
        ? { display: 'none' }
        : {
            flex: '0 0 auto',
            width: `${100 / n}%`
          };

    const breakpoints = theme.breakpoints;
    const rowColsProp = getResponsiveValue(styleProps.rowCols);
    const colsProp = getResponsiveValue(styleProps.cols);
    const offsetProp = getResponsiveValue(styleProps.offset);
    const alignSelfProp = getResponsiveValue(styleProps.alignSelf);
    const orderProp = getResponsiveValue(styleProps.order);

    const styles: any = {};

    breakpointsKeys.forEach((key) => {
      const mediaQueryKey = `@media (min-width: ${breakpoints[key]}px)`;
      const rowCols = rowColsProp[key];
      const cols = colsProp[key];
      const offset = offsetProp[key];
      const alignSelf = alignSelfProp[key];
      const order = orderProp[key];

      styles[mediaQueryKey] = {
        /** Styles applied to the root element if `cols="auto"` */
        ...((rowCols === 'auto' || cols === 'auto') && {
          flex: '0 0 auto',
          width: 'auto'
        }),
        /** Styles applied to the root element if `cols={true}` */
        ...((cols === true || rowCols === true) && { flex: '1 0 0%' }),

        /** Styles applied to the Row element if `rowCols={number}` */
        ...(typeof rowCols === 'number' && makeRowCols(rowCols)),

        /** Styles applied to the root element if `cols={number}` */
        ...(typeof cols === 'number' && makeyCols(cols)),

        ...(typeof offset === 'number' &&
          offset != 0 && {
            marginLeft: `${(100 / styleProps.columns) * offset}%`
          }),

        ...(typeof order === 'number' && { order }),

        ...(alignSelf && {
          alignItems: ({
            center: 'center',
            start: 'flex-start',
            end: 'flex-end',
            baseline: 'baseline',
            stretch: 'stretch'
          } as any)[alignSelf]
        })
      };
    });

    return styles;
  }
);

type FliterProps<T> = Omit<T, keyof ContextProps>;

export interface ColProps
  extends FliterProps<StyledComponentProps<typeof ColRoot>> {}

const Col = createFCWithTheme<ColProps>('WuiCol', (props, ref) => {
  const {
    className,
    cols,
    component,
    offset,
    order,
    children,
    ...rest
  } = props;

  const { gutter, columns, rowCols } = React.useContext(GridContext);

  const styleProps = {
    gutter,
    columns,
    cols,
    offset,
    order,
    rowCols
  };

  const classes = useClasses({ ...props, styleProps, name: 'WuiCol' });

  return (
    <ColRoot
      as={component}
      className={classes.root}
      styleProps={styleProps}
      ref={ref}
      {...rest}
    >
      {children}
    </ColRoot>
  );
});

export default Col;
