import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { ClassNameMap, PickStyleProps, InProps } from '../styles/types';

type SpaceSize = 'small' | 'medium' | 'large' | number;
export interface SpaceProps {
  /**
   * @description flex alignItems
   * @default center
   */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /**
   * @description css api
   */
  classes?: Partial<ClassNameMap<'root' | 'item'>>;
  /**
   * @description children
   */
  children?: React.ReactNode;
  /**
   * @description Root element
   * @default div
   */
  component?: keyof React.ReactHTML | React.ComponentType;
  /**
   * @description direction
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description gutter size
   * @default medium
   */
  size?: SpaceSize | [SpaceSize, SpaceSize];
  /**
   * @description split node
   */
  split?: React.ReactNode;
  /**
   * @description wrap
   */
  wrap?: boolean;
}

function getNumberSize(theme: any, size: SpaceSize) {
  const sizeConfig = {
    small: theme.spacing(0.5),
    medium: theme.spacing(1),
    large: theme.spacing(2)
  };

  return typeof size != 'number' ? sizeConfig[size] : size || 0;
}

function getSize(
  theme: any,
  options: Pick<SpaceProps, 'size' | 'wrap' | 'direction'>
) {
  let horizontalSize: SpaceSize, verticalSize: SpaceSize;

  if (Array.isArray(options.size)) {
    horizontalSize = options.size[0];
    verticalSize = options.size[1];
  } else {
    let size = options.size || 0;
    horizontalSize = size;
    verticalSize =
      options.wrap && options.direction === 'horizontal' ? size : 0;
  }

  return [
    getNumberSize(theme, horizontalSize),
    getNumberSize(theme, verticalSize)
  ];
}

export const SpaceRoot = styled('div', { name: 'WuiSpace', slot: 'Root' })<
  PickStyleProps<SpaceProps, 'align' | 'size' | 'wrap' | 'direction'>
>(({ theme, styleProps }) => {
  const [, verticalSize] = getSize(theme, styleProps);

  return {
    display: 'inline-flex',
    boxSizing: 'border-box',
    margin: 0,
    ...(styleProps.wrap &&
      styleProps.direction === 'horizontal' && {
        flexWrap: 'wrap',
        marginBottom: -verticalSize
      }),

    ...(styleProps.direction === 'vertical' && {
      flexDirection: 'column',
      width: '100%'
    }),

    alignItems: {
      center: 'center',
      start: 'flex-start',
      end: 'flex-end',
      baseline: 'baseline',
      stretch: 'stretch'
    }[styleProps.align]
  };
});

const SpaceItem = styled('div', { name: 'WuiSpace', slot: 'Item' })<
  PickStyleProps<SpaceProps, 'align' | 'size' | 'wrap' | 'direction'>
>(({ theme, styleProps }) => {
  const [horizontalSize, verticalSize] = getSize(theme, styleProps);

  return {
    marginRight: styleProps.direction === 'horizontal' ? horizontalSize : 0,
    marginBottom:
      styleProps.direction === 'horizontal' ? verticalSize : horizontalSize,

    ...(styleProps.direction === 'vertical' && {
      width: '100%'
    }),

    '&:last-child':
      styleProps.direction === 'horizontal'
        ? {
            marginRight: 0
          }
        : {
            marginBottom: 0
          },
    '&:empty': {
      display: 'none'
    }
  };
});

export default function Space<P extends InProps<SpaceProps>>(inProps: P) {
  const props = useThemeProps({ props: inProps, name: 'WuiSpace' });
  const {
    align = 'center',
    children,
    className,
    classes: classesInput,
    component,
    direction = 'horizontal',
    rootRef,
    size = 'medium',
    split,
    theme,
    wrap = false,
    ...rest
  } = props;

  const childrenArray = React.Children.toArray(children);
  const styleProps = {
    size,
    wrap,
    align,
    direction
  };

  const classes = useClasses({
    ...props,
    styleProps,
    name: 'WuiSpace'
  });

  return (
    <SpaceRoot
      as={component}
      className={classes.root}
      ref={rootRef}
      styleProps={styleProps}
      theme={theme}
      {...rest}
    >
      {childrenArray.map((child, index) => {
        return (
          <React.Fragment key={index}>
            {index != 0 && split && (
              <SpaceItem
                className={classes.item}
                styleProps={styleProps}
                theme={theme}
              >
                {split}
              </SpaceItem>
            )}
            <SpaceItem
              className={classes.item}
              styleProps={styleProps}
              theme={theme}
            >
              {child}
            </SpaceItem>
          </React.Fragment>
        );
      })}
    </SpaceRoot>
  );
}
