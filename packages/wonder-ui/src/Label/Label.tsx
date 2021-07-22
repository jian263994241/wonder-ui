import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  css,
  forwardRef,
  generateUtilityClasses,
  composeClasses
} from '@wonder-ui/utils';

const COMPONENT_NAME = 'WuiLabel';

const labelClasses = generateUtilityClasses(COMPONENT_NAME, ['root']);

const useClasses = (styleProps: LabelStyleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root']
  };
  return composeClasses(COMPONENT_NAME, slots, classes);
};

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
  classes?: Partial<typeof labelClasses>;
  colon?: boolean;
  component?: React.ElementType;
  disalbed?: boolean;
  labelAlign?: 'left' | 'right';
  required?: boolean;
  requiredMark?: boolean;
  width?: number;
  htmlFor?: string;
}

interface LabelStyleProps extends LabelProps {
  requiredMarkPosition?: 'before' | 'after';
}

const LabelRoot = styled('label', { name: COMPONENT_NAME, slot: 'Root' })<{
  styleProps: LabelStyleProps;
}>(({ styleProps, theme }) => ({
  font: 'inherit',
  lineHeight: 'inherit',
  boxSizing: 'border-box',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  justifyContent: {
    left: 'flex-start',
    right: 'flex-end'
  }[styleProps.labelAlign || 'left'],
  width: styleProps.width ? `${styleProps.width}em` : 'auto',
  ...(styleProps.required &&
    styleProps.requiredMark &&
    styleProps.requiredMarkPosition === 'after' && {
      '&::after': {
        content: '" *"',
        color: theme.palette.danger.main,
        paddingRight: 8
      }
    }),
  ...(styleProps.required &&
    styleProps.requiredMark &&
    styleProps.requiredMarkPosition === 'before' && {
      '&::before': {
        content: '"* "',
        color: theme.palette.danger.main,
        paddingLeft: 8
      }
    }),

  ...(styleProps.colon && {
    '&::after': {
      content: '" :"',
      paddingRight: 8
    }
  }),

  ...(styleProps.disalbed && {
    color: theme.palette.text.disabled,
    cursor: 'not-allowed'
  })
}));

const Label = forwardRef<HTMLLabelElement, LabelProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });

  const {
    className,
    children,
    component,
    labelAlign = 'left',
    colon = false,
    disalbed,
    required,
    requiredMark = true,
    ...rest
  } = props;

  const styleProps = {
    ...props,
    labelAlign,
    colon,
    disalbed,
    required,
    requiredMark,
    requiredMarkPosition:
      (labelAlign === 'right' || colon) && requiredMark
        ? ('before' as 'before')
        : ('after' as 'after')
  };

  const classes = useClasses(styleProps);

  return (
    <LabelRoot
      as={component}
      className={css(classes.root, className)}
      styleProps={styleProps}
      ref={ref}
      {...rest}
    >
      {children}
    </LabelRoot>
  );
});

export default Label;
