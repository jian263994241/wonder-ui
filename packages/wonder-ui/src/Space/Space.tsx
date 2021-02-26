import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type {
  StyledComponentProps,
  StyleProps,
  ClassNameMap
} from '../styles/types';

type SpaceSize = 'small' | 'medium' | 'large' | number;

export interface SpaceStyleProps {
  direction: 'horizontal' | 'vertical';
  align: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  size: SpaceSize | [SpaceSize, SpaceSize];
  wrap: boolean;
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
  options: Pick<SpaceStyleProps, 'size' | 'wrap' | 'direction'>
) {
  let horizontalSize: SpaceSize, verticalSize: SpaceSize;

  if (Array.isArray(options.size)) {
    horizontalSize = options.size[0];
    verticalSize = options.size[1];
  } else {
    horizontalSize = options.size;

    verticalSize =
      options.wrap && options.direction === 'horizontal' ? options.size : 0;
  }

  return [
    getNumberSize(theme, horizontalSize),
    getNumberSize(theme, verticalSize)
  ];
}

export const SpaceRoot = styled('div', { name: 'WuiSpace', slot: 'Root' })<
  StyleProps<SpaceStyleProps>
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
      flexDirection: 'column'
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
  StyleProps<SpaceStyleProps>
>(({ theme, styleProps }) => {
  const [horizontalSize, verticalSize] = getSize(theme, styleProps);

  return {
    marginRight: styleProps.direction === 'horizontal' ? horizontalSize : 0,
    marginBottom:
      styleProps.direction === 'horizontal' ? verticalSize : horizontalSize,

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

export interface SpaceProps extends StyledComponentProps<typeof SpaceRoot> {
  split?: React.ReactNode;
  classes?: Partial<ClassNameMap<'root' | 'item'>>;
}

const Space: React.FC<SpaceProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'Space' });
  const {
    align = 'center',
    children,
    classes: classesInput,
    className,
    component,
    direction = 'horizontal',
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
    styleProps,
    className,
    name: 'Space',
    classes: classesInput
  });

  return (
    <SpaceRoot
      as={component}
      className={classes.root}
      ref={ref}
      theme={theme}
      styleProps={styleProps}
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
});

Space.displayName = 'Space';

export default Space;
