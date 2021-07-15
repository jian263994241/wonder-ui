import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { useClasses, whiteSpaceClasses } from './WhiteSpaceClasses';

export interface WhiteSpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Css api
   */
  classes?: Partial<typeof whiteSpaceClasses>;
  /**
   * @ignore
   */
  component?: React.ElementType;
  /**
   * @description 尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * @ignore
   */
  ref?: React.Ref<any>;
}

const WhiteSpaceRoot = styled('div', {
  name: 'WuiWhiteSpace',
  slot: 'Root'
})(({ theme }) => ({
  width: '100%',
  boxSizing: 'border-box',
  [`&.${whiteSpaceClasses.sizeSmall}`]: {
    height: theme.spacing(1)
  },
  [`&.${whiteSpaceClasses.sizeMedium}`]: {
    height: theme.spacing(2)
  },
  [`&.${whiteSpaceClasses.sizeLarge}`]: {
    height: theme.spacing(3)
  }
}));

const WhiteSpace = React.forwardRef<HTMLElement, WhiteSpaceProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiWhiteSpace' });
    const { size = 'medium', children, className, component, ...rest } = props;

    const styleProps = { ...props, size };

    const classes = useClasses(styleProps);

    return (
      <WhiteSpaceRoot
        as={component}
        className={css(classes.root, className)}
        ref={ref as React.Ref<HTMLDivElement>}
        {...rest}
      >
        {children}
      </WhiteSpaceRoot>
    );
  }
);

export default WhiteSpace;
