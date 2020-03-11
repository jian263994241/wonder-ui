import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../Form/useForm';

function FormItem(props) {
  const {
    name,
    children = null,
    ...getFieldDecoratorOptions
  } = props;

  const form = useForm();
  const wrapCompFn = form.getFieldDecorator(name, getFieldDecoratorOptions);

  return wrapCompFn ? wrapCompFn(children): children;
}

FormItem.defaultProps = {
  valuePropName: 'value',
  getValueProps: (value) => ({ value }),
  trigger: 'onChange',
  validateFirst: false,
  hidden: false,
  preserve: false, 
};

FormItem.propTyps = {
  valuePropName: PropTypes.string,
  getValueProps: PropTypes.func,
  getValueFromEvent: PropTypes.func,
  initialValue: PropTypes.any,
  normalize: PropTypes.func,
  trigger: PropTypes.string,
  validateTrigger: PropTypes.string,
  rules: PropTypes.array,
  validateFirst: PropTypes.bool,
  validate: PropTypes.array,
  hidden: PropTypes.bool,
  preserve: PropTypes.bool,
};

export default FormItem;