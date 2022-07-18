import * as React from 'react';
import QuestionCircle from '../icons/QuestionCircle';
import styled from '../styles/styled';
import Tooltip from '../Tooltip';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './FormLabelClasses';
import { composeClasses, css, forwardRef } from '@wonder-ui/utils';
import type { FormLabelProps, FormLabelStyleProps } from './FormLabelTypes';

const useClasses = (styleProps: FormLabelStyleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root'],
    requiredText: ['requiredText'],
    requiredAsterisk: ['requiredAsterisk'],
    help: ['help']
  };
  return composeClasses(COMPONENT_NAME, slots, classes);
};

const LabelRoot = styled('label', { name: COMPONENT_NAME, slot: 'Root' })<{
  styleProps: FormLabelStyleProps;
}>(({ styleProps, theme }) => ({
  boxSizing: 'border-box',
  color: theme.palette.text.primary,

  ...theme.typography.ellipsis(1),

  ...(styleProps.colon && {
    '&::after': {
      content: '":"',
      margin: '0 8px 0 2px'
    }
  })
}));

const LabelRequiredAsterisk = styled('span', {
  name: COMPONENT_NAME,
  slot: 'RequiredAsterisk'
})(({ theme }) => ({
  fontFamily: 'SimSun,sans-serif',
  color: theme.palette.danger.main,
  paddingRight: 4,
  display: 'inline-block',
  lineHeight: 1
}));

const LabelRequiredText = styled('span', {
  name: COMPONENT_NAME,
  slot: 'RequiredText'
})(({ theme }) => ({
  color: theme.palette.text.secondary
}));

const LabelQuestion = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Question'
})({
  marginLeft: 4,
  cursor: 'pointer',
  fontSize: '0.92em',
  WebkitTapHighlightColor: 'transparent'
});

const Label = forwardRef<HTMLLabelElement, FormLabelProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });

  const {
    className,
    children,
    component,
    colon = false,
    required,
    requiredMark = true,
    requiredMarkType = 'asterisk',
    requiredMarkText = '必填',
    optionalMarkText = '选填',
    help,
    ...rest
  } = props;

  const styleProps = {
    ...props,
    colon,
    required,
    requiredMark,
    requiredMarkType,
    requiredMarkText,
    optionalMarkText
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
      {requiredMarkType === 'asterisk' && requiredMark && required && (
        <LabelRequiredAsterisk className={classes.requiredAsterisk}>
          *
        </LabelRequiredAsterisk>
      )}
      {children}
      {requiredMarkType === 'text-required' && requiredMark && required && (
        <LabelRequiredText className={classes.requiredText}>
          ({requiredMarkText})
        </LabelRequiredText>
      )}
      {requiredMarkType === 'text-optional' && requiredMark && !required && (
        <LabelRequiredText className={classes.requiredText}>
          ({optionalMarkText})
        </LabelRequiredText>
      )}

      {help && (
        <Tooltip title={help} placement="top" arrow>
          <LabelQuestion className={classes.help}>
            <QuestionCircle color="secondary" fontSize="inherit" />
          </LabelQuestion>
        </Tooltip>
      )}
    </LabelRoot>
  );
});

export default Label;
