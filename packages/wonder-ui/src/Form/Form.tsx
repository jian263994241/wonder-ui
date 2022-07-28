import * as React from 'react';
import List from '../List/List';
import locales from './locales';
import RcForm from 'rc-field-form';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME, formCssVars, useFormCssVars } from './FormClasses';
import { composeClasses, css, merge } from '@wonder-ui/utils';
import { FormContext } from './FormContext';

import type { FormProps, FormStyleProps, FormInstance } from './FormTypes';

const useClasses = (props: FormStyleProps) => {
  const { classes, layout } = props;

  const slots = {
    root: ['root', layout === 'vertical' ? 'vertical' : 'horizontal'],
    list: ['list'],
    footer: ['footer']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const FormRoot = styled(RcForm, {
  name: COMPONENT_NAME,
  slot: 'Root'
})(() => ({}));

const FormFooter = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Footer'
})({
  padding: `${formCssVars.value('footerVerticalPadding')} ${formCssVars.value(
    'footerHorizontalPadding'
  )}`
});

const Form = React.forwardRef<FormInstance, FormProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    children,
    className,
    hasFeedback = true,
    layout = 'horizontal',
    card = false,
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
    card,
    requiredMarkType
  };

  const classes = useClasses(styleProps);

  useFormCssVars();

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
        <List card={card} className={classes.list}>
          {children}
        </List>
        {footer && <FormFooter className={classes.footer}>{footer}</FormFooter>}
      </FormRoot>
    </FormContext.Provider>
  );
});

export default Form;
