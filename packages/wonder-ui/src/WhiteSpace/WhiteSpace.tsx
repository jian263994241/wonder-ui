import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { BaseProps, PickStyleProps } from '../styles/types';

export interface WhiteSpaceProps extends BaseProps {
  /**
   * @description 尺寸
   * @default md
   */
  size?: 'sm' | 'md' | 'lg';
}

const WhiteSpaceRoot = styled('div', {
  name: 'WuiWhiteSpace',
  slot: 'Root'
})<PickStyleProps<WhiteSpaceProps, 'size'>>(({ theme, styleProps }) => ({
  width: '100%',
  boxSizing: 'border-box',
  height: theme.spacing(
    {
      sm: 1,
      md: 2,
      lg: 3
    }[styleProps.size]
  )
}));

const WhiteSpace: React.FC<WhiteSpaceProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiWhiteSpace' });
    const { size = 'md', children, className, component, ...rest } = props;

    const styleProps = { size };

    const classes = useClasses({
      ...props,
      styleProps,
      name: 'WuiWhiteSpace'
    });

    return (
      <WhiteSpaceRoot
        as={component}
        className={classes.root}
        styleProps={styleProps}
        ref={ref}
        {...rest}
      >
        {children}
      </WhiteSpaceRoot>
    );
  }
);

export default WhiteSpace;
