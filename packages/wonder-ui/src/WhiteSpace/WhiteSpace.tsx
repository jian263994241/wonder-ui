import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { capitalize, composeClasses } from '@wonder-ui/utils';
import {
  COMPONENT_NAME,
  useWhiteSpaceCssVars,
  WhiteSpaceClassesType,
  whiteSpaceCssVars
} from './WhiteSpaceClasses';
import { css } from '@wonder-ui/utils';

const useClasses = (styleProps: WhiteSpaceProps) => {
  const { classes, size } = styleProps;

  const slots = {
    root: ['root', typeof size === 'string' && `size${capitalize(size)}`]
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

export interface WhiteSpaceProps {
  classes?: Partial<WhiteSpaceClassesType>;
  className?: string;
  component?: React.ElementType;
  style?: React.CSSProperties;
  /**
   * @description 尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large' | number;
}

const WhiteSpaceRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  height: whiteSpaceCssVars.value('size'),
  width: '100%',
  overflow: 'hidden'
});

const WhiteSpace = React.forwardRef<HTMLElement, WhiteSpaceProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiWhiteSpace' });
    const { size = 'medium', className, component, style, ...rest } = props;

    const styleProps = { ...props, size };

    const classes = useClasses(styleProps);

    useWhiteSpaceCssVars();

    return (
      <WhiteSpaceRoot
        as={component}
        className={css(classes.root, className)}
        ref={ref as React.Ref<HTMLDivElement>}
        style={{
          ...whiteSpaceCssVars.style({
            size:
              typeof size === 'number'
                ? size
                : whiteSpaceCssVars.value(`size${capitalize(size)}` as any)
          }),
          ...style
        }}
        {...rest}
      />
    );
  }
);

export default WhiteSpace;
