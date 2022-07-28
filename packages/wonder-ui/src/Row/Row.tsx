import * as React from 'react';
import styled from '../styles/styled';
import useRootCssVars from '../styles/useRootCssVars';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME, rowClasses, useClasses } from './RowClasses';
import { createCssVars, css } from '@wonder-ui/utils';
import { makeGridColumns } from './mixins';
import { ResponsiveValue } from './share';

export const cssVars = createCssVars(COMPONENT_NAME, ['gutterX', 'gutterY']);

export interface RowProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  classes?: Partial<typeof rowClasses>;
  component?: React.ElementType;
  /**
   * 设置均分的栅格
   */
  rowCols?: ResponsiveValue;
}

const RowRoot = styled('div', {
  name: 'WuiRow',
  slot: 'Root'
})(({ theme }) => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: `calc(${cssVars.value('gutterY')} * -1)`,
    marginRight: `calc(${cssVars.value('gutterX')} / -2)`,
    marginLeft: `calc(${cssVars.value('gutterX')} / -2)`,

    '& > *': {
      width: '100%',
      maxWidth: '100%',
      boxSizing: 'border-box',
      paddingRight: `calc(${cssVars.value('gutterX')} / 2)`,
      paddingLeft: `calc(${cssVars.value('gutterX')} / 2)`,
      marginTop: cssVars.value('gutterY'),
      flexShrink: 0
    },
    ...makeGridColumns(theme)
  };
});

const Row = React.forwardRef<HTMLElement, RowProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiRow' });
  const { className, component, children, rowCols, ...rest } = props;

  const styleProps = { ...props, rowCols };

  const classes = useClasses(styleProps);

  useRootCssVars(
    cssVars.style({
      gutterX: '0px',
      gutterY: '0px'
    })
  );

  return (
    <RowRoot
      as={component}
      className={css(className, classes.root)}
      ref={ref as React.Ref<HTMLDivElement>}
      {...rest}
    >
      {children}
    </RowRoot>
  );
});

export default Row;
