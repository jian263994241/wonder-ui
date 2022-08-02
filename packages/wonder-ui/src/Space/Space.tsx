import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { composeClasses, css, forwardRef } from '@wonder-ui/utils';
import { checkFlexGap } from './SpaceUtils';
import { COMPONENT_NAME, spaceClasses, spaceCssVars } from './SpaceClasses';
import type { SpaceProps } from './SpaceTypes';

const useClasses = (styleProps: SpaceProps) => {
  const { classes, direction, nowrap } = styleProps;

  const slots = {
    root: ['root', direction && direction, nowrap && 'nowrap'],
    item: ['item'],
    split: ['split']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const nameMap: { [key: string]: string } = {
  start: 'flex-start',
  end: 'flex-end'
};

const supportGap = checkFlexGap();

const SpaceRoot = styled('div', { name: COMPONENT_NAME, slot: 'Root' })<{
  styleProps: SpaceProps;
}>(({ styleProps }) => {
  const isHorizontal = styleProps.direction === 'horizontal';

  return {
    ...spaceCssVars.style({
      gapHorizontal: spaceCssVars.value('gap', '0px'),
      gapVertical: spaceCssVars.value('gap', '0px')
    }),
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexWrap: styleProps.reversed ? 'wrap-reverse' : 'wrap',

    '& > *': {
      flexShrink: 0
    },

    [`&.${spaceClasses.nowrap}`]: {
      flexWrap: 'nowrap'
    },

    ...(styleProps.verticalAlign && {
      [isHorizontal ? 'alignItems' : 'justifyContent']:
        nameMap[styleProps.verticalAlign] || styleProps.verticalAlign
    }),
    ...(styleProps.horizontalAlign && {
      [isHorizontal ? 'justifyContent' : 'alignItems']:
        nameMap[styleProps.horizontalAlign!] || styleProps.horizontalAlign
    }),
    ...(isHorizontal && {
      flexDirection: styleProps.reversed ? 'row-reverse' : 'row',
      height: styleProps.verticalFill ? '100%' : 'auto'
    }),
    ...(!isHorizontal && {
      flexDirection: styleProps.reversed ? 'column-reverse' : 'column'
    }),

    ...(supportGap
      ? {
          rowGap: spaceCssVars.value('gapVertical'),
          columnGap: spaceCssVars.value('gapHorizontal')
        }
      : {
          '& > *': {
            ...(isHorizontal && {
              marginBottom: spaceCssVars.value('gapVertical')
            })
          },
          ...(isHorizontal && {
            marginBottom: `calc( 0px - ${spaceCssVars.getName('gapVertical')})`
          }),
          [styleProps.reversed
            ? '&> *:not(:first-child)'
            : '&> *:not(:last-of-type)']: [
            isHorizontal
              ? {
                  marginRight: spaceCssVars.value('gapHorizontal')
                }
              : {
                  marginBottom: spaceCssVars.value('gapVertical')
                }
          ]
        })
  };
});

const SpaceItem = styled('div', { name: COMPONENT_NAME, slot: 'Item' })<{
  styleProps: SpaceProps;
}>(({ styleProps }) => ({
  ...(styleProps.itemEqual && {
    flex: 1
  })
}));

const SpaceSplit = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Split'
})({
  display: 'flex',
  alignSelf: 'stretch'
});

const Space = forwardRef<HTMLElement, SpaceProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    children,
    className,
    classes: classesInput,
    component,
    direction = 'horizontal',
    reversed = false,
    theme,
    gap = theme.spacing(1),
    split,
    horizontalAlign,
    verticalAlign = 'center',
    verticalFill = false,
    nowrap = false,
    itemWrap = true,
    itemEqual = false,
    style,
    ...rest
  } = props;

  const childrenArray = React.Children.toArray(children);
  const styleProps = {
    ...props,
    direction,
    nowrap,
    verticalAlign,
    verticalFill,
    horizontalAlign,
    reversed,
    itemEqual
  };

  const classes = useClasses(styleProps);

  return (
    <SpaceRoot
      as={component}
      className={css(className, classes.root)}
      ref={ref as React.Ref<HTMLDivElement>}
      styleProps={styleProps}
      style={{
        ...(Array.isArray(gap)
          ? spaceCssVars.style({
              gapHorizontal: gap[0],
              gapVertical: gap[1]
            })
          : spaceCssVars.style({ gap })),
        ...style
      }}
      {...rest}
    >
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {index != 0 && split && (
            <SpaceSplit className={classes.split}>{split}</SpaceSplit>
          )}
          {itemWrap ? (
            <SpaceItem className={classes.item} styleProps={styleProps}>
              {child}
            </SpaceItem>
          ) : React.isValidElement(child) ? (
            React.cloneElement(child, {
              className: css(classes.item, child.props.className)
            })
          ) : (
            child
          )}
        </React.Fragment>
      ))}
    </SpaceRoot>
  );
});

export default Space;
