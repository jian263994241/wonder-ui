import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import styled from '../styles/styled';

type SpaceSize = 'small' | 'medium' | 'large' | number;

interface SpaceStyleProps {
  direction: 'horizontal' | 'vertical';
  align: 'start' | 'end' | 'center' | 'baseline';
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

const SpaceRoot = styled.div<{ styleProps: SpaceStyleProps }>(
  ({ theme, styleProps }) => {
    const [, verticalSize] = getSize(theme, styleProps);

    return {
      display: 'inline-flex',
      boxSizing: 'border-box',

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
        baseline: 'baseline'
      }[styleProps.align]
    };
  }
);

const SpaceItem = styled.div<{ styleProps: SpaceStyleProps }>(
  ({ theme, styleProps }) => {
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
  }
);

export interface SpaceProps extends Partial<SpaceStyleProps> {
  children?: any;
  className?: string;
  ref?: React.Ref<any>;
  split?: React.ReactNode;
  style?: React.CSSProperties;
}

const Space: React.FC<SpaceProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'Space' });
  const {
    align = 'center',
    children,
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

  return (
    <SpaceRoot ref={ref} theme={theme} styleProps={styleProps} {...rest}>
      {childrenArray.map((child, index) => {
        return (
          <React.Fragment key={index}>
            {index != 0 && split && (
              <SpaceItem styleProps={styleProps} theme={theme}>
                {split}
              </SpaceItem>
            )}
            <SpaceItem styleProps={styleProps} theme={theme}>
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
