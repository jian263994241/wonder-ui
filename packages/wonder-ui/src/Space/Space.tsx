import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { checkFlexGap, getSize, SpaceSize, Gap } from './SpaceUtils';
import {
  composeClasses,
  css,
  forwardRef,
  generateUtilityClasses
} from '@wonder-ui/utils';

const COMPONENT_NAME = 'WuiSpace';

export const spaceClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'item',
  'vertical',
  'horizontal',
  'split',
  'nowrap'
]);

const useClasses = (styleProps: SpaceStyleProps) => {
  const { classes, direction, nowrap } = styleProps;

  const slots = {
    root: ['root', direction && direction, nowrap && 'nowrap'],
    item: ['item'],
    split: ['split']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

type Alignment =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'baseline'
  | 'stretch';

export interface SpaceProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Css api
   */
  classes?: Partial<typeof spaceClasses>;
  /**
   * @ignore
   */
  component?: React.ElementType;
  /**
   * Direction
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @ignore
   */
  itemWrap?: boolean;
  /**
   * Defines the spacing between Space items.
   * @default medium
   */
  gap?: Gap;
  /**
   * Horizontal align
   */
  horizontalAlign?: Alignment;
  /**
   * reversed
   * @default false
   */
  reversed?: boolean;
  /**
   * Split node
   */
  split?: React.ReactNode;
  /**
   * Vertical align
   */
  verticalAlign?: Alignment;
  /**
   * height 100%
   */
  verticalFill?: boolean;
  /**
   * Wrap
   */
  nowrap?: boolean;
}

interface SpaceStyleProps extends SpaceProps {}

const nameMap: { [key: string]: string } = {
  start: 'flex-start',
  end: 'flex-end'
};

const supportGap = checkFlexGap();

const SpaceRoot = styled('div', { name: COMPONENT_NAME, slot: 'Root' })<{
  styleProps: SpaceStyleProps;
}>(({ theme, styleProps }) => {
  const { rowGap, columnGap } = getSize(styleProps.gap!, theme);
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

const SpaceSplit = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Split'
})({
  display: 'flex',
  alignSelf: 'stretch',
  alignItems: 'center'
});

export const SpaceItem = styled('span', { name: COMPONENT_NAME, slot: 'Item' })(
  {}
);

const Space = forwardRef<HTMLElement, SpaceProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    children,
    className,
    classes: classesInput,
    component,
    direction = 'horizontal',
    reversed = false,
    gap = 'medium',
    split,
    horizontalAlign,
    verticalAlign = 'center',
    verticalFill = false,
    nowrap = false,
    itemWrap = true,
    ...rest
  } = props;

  const childrenArray = React.Children.toArray(children);
  const styleProps = {
    ...props,
    direction,
    gap,
    nowrap,
    verticalAlign,
    verticalFill,
    horizontalAlign,
    reversed
  };

  const classes = useClasses(styleProps);

  return (
    <SpaceRoot
      as={component}
      className={css(classes.root, className)}
      ref={ref as React.Ref<HTMLDivElement>}
      styleProps={styleProps}
      {...rest}
    >
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {index != 0 && split && (
            <SpaceSplit className={classes.split}>{split}</SpaceSplit>
          )}
          {itemWrap ? (
            <SpaceItem className={classes.item}>{child}</SpaceItem>
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
