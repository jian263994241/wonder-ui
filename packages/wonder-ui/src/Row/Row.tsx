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
import Container, { ContainerSize } from '../Container';
import {
  getGutter,
  getResponsiveValue,
  ResponsiveValue,
  ResponsivePropsValue
} from './utils';
import { gridBreakpointsKeys } from '../styles/theme/variables';

export interface RowStyleProps {
  gutter: number | [number, number];
  nowrap?: boolean;
  alignItems?: ResponsiveValue<
    'start' | 'end' | 'center' | 'baseline' | 'stretch'
  >;
  alignContent?: ResponsiveValue<
    'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
  >;
  justifyContent?: ResponsiveValue<
    'start' | 'end' | 'center' | 'around' | 'between' | 'evenly'
  >;
}

export const RowRoot = styled('div', {
  name: 'WuiRow',
  slot: 'root'
})<StyleProps<RowStyleProps>>(
  ({ theme, styleProps }) => {
    const { gutterX, gutterY } = getGutter(styleProps.gutter);

    return {
      display: 'flex',
      flexWrap: styleProps.nowrap ? 'nowrap' : 'wrap',
      marginTop: `calc(${theme.spacing(gutterY)}px * -1)`,
      marginRight: `calc(${theme.spacing(gutterX)}px * -2)`,
      marginLeft: `calc(${theme.spacing(gutterX)}px * -2)`
    };
  },
  ({ theme, styleProps }) => {
    const breakpoints = theme.variables.gridBreakpoints;
    const alignItemsProp = getResponsiveValue(styleProps.alignItems);
    const alignContentProp = getResponsiveValue(styleProps.alignContent);
    const justifyContentProp = getResponsiveValue(styleProps.justifyContent);

    const styles: any = {};

    gridBreakpointsKeys.forEach((key) => {
      const mediaQueryKey = `@media (min-width: ${breakpoints[key]}px)`;
      const alignItems = alignItemsProp[key];
      const alignContent = alignContentProp[key];
      const justifyContent = justifyContentProp[key];

      styles[mediaQueryKey] = {
        /** Styles applied to the root element if alignItem={} */
        ...(alignItems && {
          alignItems: ({
            center: 'center',
            start: 'flex-start',
            end: 'flex-end',
            baseline: 'baseline',
            stretch: 'stretch'
          } as any)[alignItems as string]
        }),
        /** Styles applied to the root element if justifyContent={} */
        ...(justifyContent && {
          justifyContent: ({
            start: 'flex-start',
            end: 'flex-end',
            center: 'center',
            between: 'space-between',
            around: 'space-around',
            evenly: 'space-evenly'
          } as any)[justifyContent]
        }),
        /** Styles applied to the root element if alignContent={} */
        ...(alignContent && {
          alignContent: ({
            start: 'flex-start',
            end: 'flex-end',
            center: 'center',
            between: 'space-between',
            around: 'space-around',
            stretch: 'stretch'
          } as any)[alignContent]
        })
      };
    });

    return styles;
  }
);

export interface RowProps extends StyledComponentProps<typeof RowRoot> {
  columns?: number;
  rowCols?: ResponsiveValue<'auto' | number>;
  classes?: Partial<ClassNameMap<'root' | 'container'>>;
  containerSize?: ContainerSize;
}

const Row: React.FC<RowProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiRow' });
  const {
    alignContent,
    alignItems,
    justifyContent,
    className,
    classes: classesInput,
    columns = 12,
    containerSize = 'fluid',
    children,
    nowrap = false,
    gutter = 2,
    rowCols,
    ...rest
  } = props;

  const styleProps = {
    alignContent,
    alignItems,
    justifyContent,
    gutter,
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
        gutter,
        columns,
        rowCols
      }}
    >
      <Container
        size={containerSize}
        gutter={Array.isArray(gutter) ? gutter[0] : gutter}
        className={classes.container}
      >
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
