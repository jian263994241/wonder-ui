import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../Form/useForm';

/**
 * 带验证的表单内字段 对`rc-form`的`getFieldDecorator`封装
 * @visibleName FormItem 表单字段
 */
export default function FormItem(props) {
  const {
    name,
    children = null,
    ...getFieldDecoratorOptions
  } = props;

  const form = useForm();
  const wrapCompFn = form.getFieldDecorator(name, getFieldDecoratorOptions);

  return (
    <React.Fragment>
      {wrapCompFn ? wrapCompFn(children): children}
    </React.Fragment>
  );
}

FormItem.propTypes = {
  /**
   * Specify how to get value from event.
   */
  getValueFromEvent: PropTypes.func,
  /**
   * Get the component props according to field value.
   */
  getValueProps: PropTypes.func,
  /**
   * Ignore current field while validating or gettting fields
   */
  hidden: PropTypes.bool,
  /**
   * Initial value of current component.
   */
  initialValue: PropTypes.any,
  /**
   * Return normalized value.
   */
  normalize: PropTypes.func,
  /**
   * Whether to preserve the value. That will remain the value when the field be unmounted and be mounted again
   */
  preserve: PropTypes.bool,
  /**
   * Validator rules. see: [async-validator](https://github.com/yiminghe/async-validator)
   */
  rules: PropTypes.array,
  /**
   * Event which is listened to collect form data.
   */
  trigger: PropTypes.string,
  /**
   * 
   */
  validate: PropTypes.array,
  /**
   * Whether stop validate on first rule of error for this field.
   */
  validateFirst: PropTypes.bool,
  /**
   * Event which is listened to validate. Set to falsy to only validate when call props.validateFields.
   */
  validateTrigger: PropTypes.string,
  /**
   * Prop name of component's value field, eg: checkbox should be set to checked
   */
  valuePropName: PropTypes.string,
};

FormItem.defaultProps = {
  valuePropName: 'value',
  getValueProps: (value) => ({ value }),
  trigger: 'onChange',
  validateFirst: false,
  hidden: false,
  preserve: false, 
};

