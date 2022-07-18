import * as React from 'react';
import FormLabel from '../FormLabel';
import ListItem from '../ListItem';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './FormItemClasses';
import { cssVars as listCssVars } from '../List/List';
import { Field } from 'rc-field-form';
import { formLabelClasses } from '../FormLabel/FormLabelClasses';
import { listItemClasses } from '../ListItem/ListItemClasses';
import { useFormContext } from '../Form/FormContext';
import {
  createChainedFunction,
  mergedRef,
  composeClasses,
  css
} from '@wonder-ui/utils';
import type { FormItemProps, FormItemStyleProps } from './FormItemTypes';

const useClasses = (styleProps: FormItemProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    label: ['label'],
    child: ['child'],
    description: ['description'],
    warning: ['warning'],
    error: ['error']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const FormItemRoot = styled(ListItem, {
  name: COMPONENT_NAME,
  slot: 'Root'
})<FormItemStyleProps>(({ styleProps }) => ({
  ...(styleProps.layout === 'horizontal'
    ? {
        ...listCssVars.style({
          alignItems: 'stretch',
          prefixWidth: '6.2em'
        }),
        [`.${listItemClasses.prefix}`]: {
          paddingTop: listCssVars.value('paddingTop'),
          paddingBottom: listCssVars.value('paddingBottom')
        }
      }
    : {
        [`& .${formLabelClasses.root}`]: {
          marginBottom: 4
        }
      })
}));

const FormChild = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Child'
})<FormItemStyleProps>(({ styleProps }) => ({
  width: '100%',

  ...(styleProps.childAlign === 'right' && {
    display: 'flex',
    justifyContent: 'flex-end'
  }),

  [`.${formLabelClasses.root} + &`]: {
    marginTop: 10
  }
}));

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const formContext = useFormContext() || {
      layout: 'horizontal',
      hasFeedback: false
    };

    const {
      arrow,
      label,
      layout = formContext.layout,
      children,
      childAlign = 'left',
      className,
      description,
      disabled = formContext.disabled,
      extra,
      help,
      hasFeedback = formContext.hasFeedback,
      hidden = false,
      required,
      name,
      messageVariables,
      onClick,
      trigger = 'onChange',
      validateTrigger = trigger,
      rules,
      style,
      ...fieldProps
    } = props;

    const styleProps = {
      ...props,
      childAlign,
      layout,
      hasFeedback
    };

    const classes = useClasses(styleProps);

    const isRequired =
      required !== undefined
        ? required
        : rules &&
          rules.some(
            (rule) => !!(rule && typeof rule === 'object' && rule.required)
          );

    const labelElement = label && (
      <FormLabel
        className={classes.label}
        required={isRequired}
        requiredMarkType={formContext.requiredMarkType}
        help={help}
      >
        {label}
      </FormLabel>
    );

    const renderSubText = (data: {
      description?: string;
      error?: string;
      warning?: string;
    }) => {
      return (
        <React.Fragment>
          {data.description && (
            <Typography
              className={classes.description}
              variant="caption"
              color="textSecondary"
            >
              {data.description}
            </Typography>
          )}
          {data.error && (
            <Typography
              className={classes.error}
              variant="caption"
              color="error"
            >
              {data.error}
            </Typography>
          )}
          {data.warning && (
            <Typography
              className={classes.warning}
              variant="caption"
              color="warning"
            >
              {data.warning}
            </Typography>
          )}
        </React.Fragment>
      );
    };

    const childRef = React.useRef<any>();

    return (
      <FormItemRoot
        ref={ref}
        arrow={arrow}
        prefix={layout === 'horizontal' && labelElement}
        extra={extra}
        disabled={disabled}
        onClick={(e) => onClick?.(e, childRef)}
        className={css(classes.root, className)}
        styleProps={styleProps}
        style={style}
        hidden={hidden}
      >
        {layout === 'vertical' && labelElement}

        <Field
          name={name}
          rules={rules}
          trigger={trigger}
          validateTrigger={validateTrigger}
          messageVariables={{
            label: typeof label === 'string' ? label : '',
            ...messageVariables
          }}
          {...fieldProps}
        >
          {(control, meta, context) => {
            const feedbackError = hasFeedback ? meta.errors[0] : undefined;
            const feedbackWarning = hasFeedback ? meta.warnings[0] : undefined;

            const childProps = (
              name !== undefined ? { ...control } : {}
            ) as React.PropsWithRef<any>;
            let childElement: React.ReactNode = null;
            if (React.isValidElement(children)) {
              childProps.ref = mergedRef(childRef, children.props.ref);

              if (trigger) {
                childProps[trigger] = createChainedFunction(
                  children.props[trigger],
                  control[trigger]
                );
              }

              childElement = React.cloneElement(children, childProps);
            } else if (typeof children === 'function') {
              childElement = children(control, meta, context);
            } else {
              childElement = children;
            }

            return (
              <React.Fragment>
                <FormChild styleProps={styleProps} className={classes.child}>
                  {childElement}
                </FormChild>
                {renderSubText({
                  description,
                  error: feedbackError,
                  warning: feedbackWarning
                })}
              </React.Fragment>
            );
          }}
        </Field>
      </FormItemRoot>
    );
  }
);

export default FormItem;
