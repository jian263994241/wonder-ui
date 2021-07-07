import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { SpaceItem, SpaceRoot, SpaceSplit } from './SpaceStyled';
import { useClasses } from './SpaceClasses';
import type { SpaceProps } from './SpaceTypes';

const Space = React.forwardRef<HTMLElement, SpaceProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiSpace' });
  const {
    children,
    className,
    classes: classesInput,
    component,
    direction = 'horizontal',
    reversed = false,
    gap = 'medium',
    split,
    theme,
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
      theme={theme}
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
