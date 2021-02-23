import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyledComponentProps, StyleProps } from '../styles/types';
import GridContext from '../Row/GridContext';
import type { ContextProps } from '../Row/GridContext';
import { foreach, isObject } from '@wonder-ui/utils';
import type { BreakpointsSize } from '../Row/breakpoints';

type ResponseProps =
  | {
      alignSelf?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
      cols?: 'auto' | number;
      order?: number;
      offset?: number;
    }
  | 'auto'
  | number;

export interface ColStyleProps {
  alignSelf?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  cols?: 'auto' | number;
  order?: number;
  xs?: ResponseProps;
  sm?: ResponseProps;
  md?: ResponseProps;
  lg?: ResponseProps;
  xl?: ResponseProps;
  xxl?: ResponseProps;

  /**
   * @ignore
   */
  columns: ContextProps['columns'];
  /**
   * @ignore
   */
  gutterX: ContextProps['gutterX'];
  /**
   * @ignore
   */
  gutterY: ContextProps['gutterY'];
  /**
   * @description 偏移宫格
   */
  offset?: number;
  /**
   * @ignore
   */
  rowCols?: ContextProps['rowCols'];
  /**
   * @ignore
   */
  rowColsXs?: ContextProps['rowColsXs'];
  /**
   * @ignore
   */
  rowColsSm?: ContextProps['rowColsSm'];
  /**
   * @ignore
   */
  rowColsMd?: ContextProps['rowColsMd'];
  /**
   * @ignore
   */
  rowColsLg?: ContextProps['rowColsLg'];
  /**
   * @ignore
   */
  rowColsXl?: ContextProps['rowColsXl'];
  /**
   * @ignore
   */
  rowColsXxl?: ContextProps['rowColsXxl'];
  /**
   * @ignore
   */
  breakpoints: ContextProps['breakpoints'];
}

export const ColRoot = styled('div', { name: 'WuiCol', slot: 'root' })<
  StyleProps<ColStyleProps>
>(
  ({ theme, styleProps }) => ({
    boxSizing: 'border-box',
    flexShrink: 0,
    width: '100%',
    maxWidth: '100%',
    flex: '1 0 0%',
    paddingRight: `calc(${theme.spacing(styleProps.gutterX)}px / 2)`,
    paddingLeft: `calc(${theme.spacing(styleProps.gutterX)}px / 2)`,
    marginTop: theme.spacing(styleProps.gutterY),
    order: styleProps.order,

    /** Styles applied to the root element if `offset={number}` */
    ...(typeof styleProps.offset === 'number' &&
      styleProps.offset != 0 && {
        marginLeft: `${(100 / styleProps.columns) * styleProps.offset}%`
      }),

    /** Styles applied to the root element if alignItem={} */
    ...(styleProps.alignSelf && {
      alignItems: {
        center: 'center',
        start: 'flex-start',
        end: 'flex-end',
        baseline: 'baseline',
        stretch: 'stretch'
      }[styleProps.alignSelf]
    })
  }),
  ({ styleProps }) => {
    const autoCols = (isTrue: boolean) =>
      isTrue && {
        flex: '0 0 auto',
        width: 'auto'
      };
    const cols = (n: number) =>
      n === 0
        ? { display: 'none' }
        : {
            flex: '0 0 auto',
            width: `${(100 / styleProps.columns) * n}%`
          };

    const rowCols = (n: number) =>
      n === 0
        ? { display: 'none' }
        : {
            flex: '0 0 auto',
            width: `${100 / n}%`
          };

    const makeCols = (rowColsProp: any, colsProp: any = {}) => ({
      /** Styles applied to the root element if `cols="auto"` */
      ...autoCols(
        colsProp.cols === 'auto' ||
          colsProp === 'auto' ||
          rowColsProp === 'auto'
      ),

      /** Styles applied to the Row element if `rowCols={number}` */
      ...(typeof rowColsProp === 'number' && rowCols(rowColsProp)),

      /** Styles applied to the root element if `cols={number}` */
      ...(typeof colsProp === 'number' && cols(colsProp)),

      ...(isObject(colsProp) && {
        ...(colsProp.cols === 'number' && cols(colsProp)),
        ...(typeof colsProp.offset === 'number' &&
          colsProp.offset != 0 && {
            marginLeft: `${(100 / styleProps.columns) * colsProp.offset}%`
          }),

        ...(colsProp.order != undefined && {
          order: colsProp.order
        }),

        ...(colsProp.alignSelf && {
          alignItems: {
            center: 'center',
            start: 'flex-start',
            end: 'flex-end',
            baseline: 'baseline',
            stretch: 'stretch'
          }[colsProp.alignSelf as NonNullable<ColStyleProps['alignSelf']>]
        })
      })
    });

    const bq = {} as Record<BreakpointsSize, string>;

    foreach(styleProps.breakpoints, (value, key) => {
      bq[key as BreakpointsSize] = `@media (min-width: ${value}px)`;
    });

    return {
      ...makeCols(styleProps.rowCols, styleProps.cols),

      ...((styleProps.rowColsXs || styleProps.xs) && {
        [bq.xs]: {
          ...makeCols(styleProps.rowColsXs, styleProps.xs)
        }
      }),

      ...((styleProps.rowColsSm || styleProps.sm) && {
        [bq.sm]: {
          ...makeCols(styleProps.rowColsSm, styleProps.sm)
        }
      }),

      ...((styleProps.rowColsMd || styleProps.md) && {
        [bq.md]: {
          ...makeCols(styleProps.rowColsMd, styleProps.md)
        }
      }),

      ...((styleProps.rowColsLg || styleProps.lg) && {
        [bq.lg]: {
          ...makeCols(styleProps.rowColsLg, styleProps.lg)
        }
      }),

      ...((styleProps.rowColsXl || styleProps.xl) && {
        [bq.xl]: {
          ...makeCols(styleProps.rowColsXl, styleProps.xl)
        }
      }),

      ...((styleProps.rowColsXxl || styleProps.xxl) && {
        [bq.xxl]: {
          ...makeCols(styleProps.rowColsXxl, styleProps.xxl)
        }
      })
    };
  }
);

type FliterProps<T> = Omit<T, keyof ContextProps>;

export interface ColProps
  extends FliterProps<StyledComponentProps<typeof ColRoot>> {}

const Col: React.FC<ColProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiCol' });

  const { className, cols, offset = 0, order = 0, children, ...rest } = props;

  const {
    gutterX,
    gutterY,
    columns,
    rowCols,
    rowColsXs,
    rowColsSm,
    rowColsMd,
    rowColsLg,
    rowColsXl,
    rowColsXxl,
    breakpoints
  } = React.useContext(GridContext);

  const styleProps = {
    gutterX,
    gutterY,
    columns,
    cols,
    offset,
    order,
    rowCols,
    rowColsXs,
    rowColsSm,
    rowColsMd,
    rowColsLg,
    rowColsXl,
    rowColsXxl,
    breakpoints
  };

  const classes = useClasses({ styleProps, className, name: 'WuiCol' });

  return (
    <ColRoot
      className={classes.root}
      styleProps={styleProps}
      ref={ref}
      {...rest}
    >
      {children}
    </ColRoot>
  );
});

Col.displayName = 'WuiCol';

export default Col;
