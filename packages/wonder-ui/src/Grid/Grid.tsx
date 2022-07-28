import React from 'react';
import styled from '../styles/styled';
import { addUnit } from '@wonder-ui/utils';
import {
  createCssVars,
  css,
  generateUtilityClasses,
  toString
} from '@wonder-ui/utils';
import { GridItemProps, GridProps } from './GridTypes';

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
    gapHorizontal: cssVars.value('gap', '0px'),
    gapVertical: cssVars.value('gap', '0px')
  }),
  display: 'grid',
  gap: `${cssVars.value('gapHorizontal')} ${cssVars.value('gapVertical')}`,
  gridTemplateColumns: `repeat(${cssVars.value('columns')},minmax(0, 1fr))`,
  alignSelf: 'stretch'
});

const GridItemRoot = styled('div', { name: COMPONENT_NAME, slot: 'Item' })({
  gridColumnEnd: `span ${cssVars.value('itemSpan', '1')}`
});

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (props, ref) => {
    const { children, className, columns, gap, style, ...rest } = props;

    return (
      <GridRoot
        ref={ref}
        className={css(gridClasses.root, className)}
        style={{
          ...cssVars.style({ columns: toString(columns) }),
          ...(Array.isArray(gap)
            ? cssVars.style({
                gapHorizontal: gap[0],
                gapVertical: gap[1]
              })
            : cssVars.style({ gap })),
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
          ...cssVars.style({
            itemSpan: toString(span)
          }),
          ...style
        }}
        {...rest}
      >
        {children}
      </GridItemRoot>
    );
  }
);
