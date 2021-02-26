import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyleProps } from '../styles/types';

export interface WhiteSpaceStyleProps {
  /**
   * @description 尺寸
   * @default md
   */
  size?: 'sm' | 'md' | 'lg';
}

const WhiteSpaceRoot = styled('div', {
  name: 'WuiWhiteSpace',
  slot: 'Root'
})<StyleProps<WhiteSpaceStyleProps>>(({ theme, styleProps }) => ({
  width: '100%',
  boxSizing: 'border-box',
  height: theme.spacing(
    {
      sm: 1,
      md: 2,
      lg: 3
    }[styleProps.size || 'md']
  )
}));

export interface WhiteSpaceProps extends WhiteSpaceStyleProps {
  ref?: React.Ref<any>;
  className?: string;
  style?: React.CSSProperties;
}

const WhiteSpace: React.FC<WhiteSpaceProps> = React.forwardRef(
  (inPorps, ref) => {
    const props = useThemeProps({ props: inPorps, name: 'WuiWhiteSpace' });
    const { size = 'md', children, className, ...rest } = props;

    const styleProps = { size };

    const classes = useClasses({
      styleProps,
      name: 'WuiWhiteSpace',
      className
    });

    return (
      <WhiteSpaceRoot
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

WhiteSpace.displayName = 'WuiWhiteSpace';

export default WhiteSpace;
