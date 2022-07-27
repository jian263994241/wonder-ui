import React from 'react';
import styled from '../styles/styled';
import { addUnit } from '@wonder-ui/utils';
import { createCssVars, css, generateUtilityClasses } from '@wonder-ui/utils';
import { GridItemProps, GridProps } from './GridTypes';
import useRootCssVars from '../styles/useRootCssVars';

const COMPONENT_NAME = 'WuiGrid';

const cssVars = createCssVars(COMPONENT_NAME, [
  'columns',
  'gap',
  'gapHorizontal',
  'gapVertical',
  'itemSpan'
]);

const gridClasses = generateUtilityClasses(COMPONENT_NAME, ['root', 'item']);

const GridRoot = styled('div', { name: COMPONENT_NAME, slot: 'Root' })({
  ...cssVars.style({
    gapHorizontal: cssVars.value('gap'),
    gapVertical: cssVars.value('gap')
  }),
  display: 'grid',
  gap: `${cssVars.value('gapHorizontal')} ${cssVars.value('gapVertical')}`,
  gridTemplateColumns: `repeat(${cssVars.value('columns')},minmax(0, 1fr))`,
  alignSelf: 'stretch'
});

const GridItemRoot = styled('div', { name: COMPONENT_NAME, slot: 'Item' })({
  gridColumnEnd: `span ${cssVars.value('itemSpan')}`
});

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (props, ref) => {
    const { children, className, columns, gap, style, ...rest } = props;

    useRootCssVars(cssVars.style({ gap: 0 }));

    return (
      <GridRoot
        ref={ref}
        className={css(gridClasses.root, className)}
        style={{
          [cssVars.getName('columns')]: columns,
          ...(Array.isArray(gap)
            ? {
                [cssVars.getName('gapHorizontal')]: addUnit(gap[0]),
                [cssVars.getName('gapVertical')]: addUnit(gap[1])
              }
            : {
                [cssVars.getName('gap')]: addUnit(gap)
              }),
          ...style
        }}
        {...rest}
      >
        {children}
      </GridRoot>
    );
  }
);

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (props, ref) => {
    const { children, className, span = 1, style, ...rest } = props;
    return (
      <GridItemRoot
        ref={ref}
        className={css(gridClasses.item, className)}
        style={{
          [cssVars.getName('itemSpan')]: span,
          ...style
        }}
        {...rest}
      >
        {children}
      </GridItemRoot>
    );
  }
);
