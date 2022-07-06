import * as React from 'react';
import List from '../List';
import locales from './locales';
import RcForm from 'rc-field-form';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { createCssVars, merge, composeClasses, css } from '@wonder-ui/utils';
import { FormContext } from './FormContext';
import type { FormProps, FormStyleProps, FormInstance } from './FormTypes';

const COMPONENT_NAME = 'WuiForm';

const useClasses = (props: FormStyleProps) => {
  const { classes, layout } = props;

  const slots = {
    root: ['root', layout === 'vertical' ? 'vertical' : 'horizontal'],
    list: ['list'],
    footer: ['footer']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const cssVars = createCssVars(COMPONENT_NAME, [
  'footerVerticalPadding',
  'footerHorizontalPadding'
]);

const FormRoot = styled(RcForm, { name: COMPONENT_NAME, slot: 'Root' })(() => ({
  ...cssVars.style({
    footerVerticalPadding: 20,
    footerHorizontalPadding: 12
  })
}));

const FormFooter = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Footer'
})({
  paddingTop: cssVars.value('footerVerticalPadding'),
  paddingBottom: cssVars.value('footerVerticalPadding'),
  paddingLeft: cssVars.value('footerHorizontalPadding'),
  paddingRight: cssVars.value('footerHorizontalPadding')
});

const Form = React.forwardRef<FormInstance, FormProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    children,
    className,
    hasFeedback = true,
    layout = 'horizontal',
    mode = 'list',
    requiredMarkType = 'asterisk',
    footer,
    disabled = false,
    validateMessages: validateMessagesProp,
    ...rest
  } = props;

  const styleProps = {
    ...props,
    disabled,
    hasFeedback,
    layout,
    mode,
    requiredMarkType
  };

  const classes = useClasses(styleProps);

  const validateMessages = React.useMemo(
    () => merge({}, locales.defaultValidateMessages, validateMessagesProp),
    [validateMessagesProp]
  );

  return (
    <FormContext.Provider value={styleProps}>
      <FormRoot
        {...rest}
        validateMessages={validateMessages}
        className={css(classes.root, className)}
        ref={ref}
      >
        <List mode={mode} className={classes.list}>
          {children}
        </List>
        {footer && <FormFooter className={classes.footer}>{footer}</FormFooter>}
      </FormRoot>
    </FormContext.Provider>
  );
});

export default Form;
