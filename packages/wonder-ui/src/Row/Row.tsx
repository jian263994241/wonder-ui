import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type {
  StyledComponentProps,
  StyleProps,
  ClassNameMap
} from '../styles/types';
import GridContext from './GridContext';
import Container from '../Container';
import defaultBreakpoints from './breakpoints';
import type { BreakpointsSize } from './breakpoints';

export interface RowStyleProps {
  gutterX: number;
  gutterY: number;
  nowrap?: boolean;
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  justifyContent?: 'start' | 'end' | 'center' | 'around' | 'between' | 'evenly';
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
}

export const RowRoot = styled('div', {
  name: 'WuiRow',
  slot: 'root'
})<StyleProps<RowStyleProps>>(
  ({ theme, styleProps }) => ({
    display: 'flex',
    flexWrap: styleProps.nowrap ? 'nowrap' : 'wrap',
    marginTop: `calc(${theme.spacing(styleProps.gutterY)}px * -1)`,
    marginRight: `calc(${theme.spacing(styleProps.gutterX)}px * -2)`,
    marginLeft: `calc(${theme.spacing(styleProps.gutterX)}px * -2)`,
    /** Styles applied to the root element if alignItem={} */
    ...(styleProps.alignItems && {
      alignItems: {
        center: 'center',
        start: 'flex-start',
        end: 'flex-end',
        baseline: 'baseline',
        stretch: 'stretch'
      }[styleProps.alignItems]
    }),
    /** Styles applied to the root element if justifyContent={} */
    ...(styleProps.justifyContent && {
      justifyContent: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        between: 'space-between',
        around: 'space-around',
        evenly: 'space-evenly'
      }[styleProps.justifyContent]
    }),
    /** Styles applied to the root element if alignContent={} */
    ...(styleProps.alignContent && {
      alignContent: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        between: 'space-between',
        around: 'space-around',
        stretch: 'stretch'
      }[styleProps.alignContent]
    })
  }),
  ({ styleProps }) => ({})
);

export interface RowProps extends StyledComponentProps<typeof RowRoot> {
  columns?: number;
  rowCols?: 'auto' | number;
  rowColsXs?: 'auto' | number;
  rowColsSm?: 'auto' | number;
  rowColsMd?: 'auto' | number;
  rowColsLg?: 'auto' | number;
  rowColsXl?: 'auto' | number;
  rowColsXxl?: 'auto' | number;
  breakpoints?: Record<BreakpointsSize, number>;
  classes?: Partial<ClassNameMap<'root' | 'container'>>;
}

const Row: React.FC<RowProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiRow' });
  const {
    alignContent,
    alignItems,
    justifyContent,
    breakpoints = defaultBreakpoints,
    className,
    classes: classesInput,
    columns = 12,
    children,
    nowrap = false,
    gutterX = 2,
    gutterY = 0,
    rowCols,
    rowColsXs,
    rowColsSm,
    rowColsMd,
    rowColsLg,
    rowColsXl,
    rowColsXxl,
    ...rest
  } = props;

  const styleProps = {
    alignContent,
    alignItems,
    justifyContent,
    gutterX,
    gutterY,
    nowrap
  };

  const classes = useClasses({
    styleProps,
    className,
    name: 'WuiRow',
    classes: classesInput
  });

  return (
    <GridContext.Provider
      value={{
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
      }}
    >
      <Container gutter={gutterX} className={classes.container}>
        <RowRoot
          className={classes.root}
          styleProps={styleProps}
          ref={ref}
          {...rest}
        >
          {children}
        </RowRoot>
      </Container>
    </GridContext.Provider>
  );
});

Row.displayName = 'WuiRow';

export default Row;
