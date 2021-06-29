import styled from '../styles/styled';
import { componentName } from './SpaceClasses';
import { getSize, checkFlexGap } from './SpaceUtils';
import type { SpaceStyleProps } from './SpaceTypes';

const nameMap: { [key: string]: string } = {
  start: 'flex-start',
  end: 'flex-end'
};

const supportGap = checkFlexGap();

export const SpaceRoot = styled('div', { name: componentName, slot: 'Root' })<{
  styleProps: SpaceStyleProps;
}>(({ theme, styleProps }) => {
  const { rowGap, columnGap } = getSize(styleProps.gap, theme);
  const horizontal = styleProps.direction === 'horizontal';

  return {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    display: 'flex',

    '& > *': {
      flexShrink: 1,
      textOverflow: 'ellipsis'
    },

    flexWrap: styleProps.nowrap ? 'nowrap' : 'wrap',
    ...(styleProps.verticalAlign && {
      [horizontal ? 'alignItems' : 'justifyContent']:
        nameMap[styleProps.verticalAlign] || styleProps.verticalAlign
    }),
    ...(styleProps.horizontalAlign && {
      [horizontal ? 'justifyContent' : 'alignItems']:
        nameMap[styleProps.horizontalAlign!] || styleProps.horizontalAlign
    }),
    ...(horizontal && {
      flexDirection: styleProps.reversed ? 'row-reverse' : 'row',
      height: styleProps.verticalFill ? '100%' : 'auto'
    }),
    ...(!horizontal && {
      flexDirection: styleProps.reversed ? 'column-reverse' : 'column'
    }),

    ...(supportGap
      ? {
          rowGap,
          columnGap
        }
      : {
          '& > *': {
            ...(horizontal && {
              marginBottom: rowGap
            })
          },
          ...(horizontal && {
            marginBottom: -rowGap
          }),
          [styleProps.reversed
            ? '&> *:not(:first-child)'
            : '&> *:not(:last-child)']: [
            horizontal
              ? {
                  marginRight: columnGap
                }
              : {
                  marginBottom: rowGap
                }
          ]
        })
  };
});

export const SpaceSplit = styled('span', {
  name: componentName,
  slot: 'Split'
})({
  display: 'flex',
  alignSelf: 'stretch',
  alignItems: 'center'
});

export const SpaceItem = styled('span', { name: componentName, slot: 'Item' })(
  {}
);
