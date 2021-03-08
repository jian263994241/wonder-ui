import * as React from 'react';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type {
  StyledComponentProps,
  StyleProps,
  ClassNameMap
} from '../styles/types';
import GridContext from './GridContext';
import Container, { ContainerProps } from '../Container';
import { getGutter, getResponsiveValue, ResponsiveValue } from './utils';
import { breakpointsKeys } from '../styles/theme/breakpoints';

export interface RowStyleProps {
  /** 间距, x| [x, y] */
  gutter: number | [number, number];
  /** 换行 */
  nowrap?: boolean;
  /** flex */
  alignItems?: ResponsiveValue<
    'start' | 'end' | 'center' | 'baseline' | 'stretch'
  >;
  /** flex */
  alignContent?: ResponsiveValue<
    'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
  >;
  /** flex */
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
      boxSizing: 'border-box',
      flexWrap: styleProps.nowrap ? 'nowrap' : 'wrap',
      marginTop: `calc(${theme.spacing(gutterY)}px * -1)`,
      marginRight: `calc(${theme.spacing(gutterX)}px / -2)`,
      marginLeft: `calc(${theme.spacing(gutterX)}px / -2)`
    };
  },
  ({ theme, styleProps }) => {
    const breakpoints = theme.breakpoints;
    const alignItemsProp = getResponsiveValue(styleProps.alignItems);
    const alignContentProp = getResponsiveValue(styleProps.alignContent);
    const justifyContentProp = getResponsiveValue(styleProps.justifyContent);

    const styles: any = {};

    breakpointsKeys.forEach((key) => {
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
  rowCols?: ResponsiveValue<'auto' | boolean | number>;
  classes?: Partial<ClassNameMap<'root' | 'container'>>;
  ContainerProps?: ContainerProps;
}

const Row = createFCWithTheme<RowProps>('WuiRow', (props, ref) => {
  const {
    alignContent,
    alignItems,
    justifyContent,
    className,
    columns = 12,
    component,
    children,
    ContainerProps,
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
    ...props,
    styleProps,
    name: 'WuiRow'
  });

  const { gutterX } = getGutter(styleProps.gutter);

  return (
    <GridContext.Provider
      value={{
        gutter,
        columns,
        rowCols
      }}
    >
      <Container
        size="fluid"
        gutter={gutterX / 2}
        className={classes.container}
        {...ContainerProps}
      >
        <RowRoot
          as={component}
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

export default Row;
