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
   * 设置如何将 event 的值转换成字段值
   */
  getValueFromEvent: PropTypes.func,
  /**
   * Get the component props according to field value.
   * @ignore
   */
  getValueProps: PropTypes.func,
  /**
   * 验证或获取字段时忽略当前字段
   */
  hidden: PropTypes.bool,
  /**
   * 子节点的初始值，类型、可选值均由子节点决定
   */
  initialValue: PropTypes.any,
  /**
   * 转换默认的 value 给控件
   * function(value, prevValue, allValues): any
   */
  normalize: PropTypes.func,
  /**
   * 字段名
   */
  name: PropTypes.string,
  /**
   * 即便字段不再使用，也保留该字段的值
   */
  preserve: PropTypes.bool,
  /**
   * 校验规则，参考下方文档: [async-validator](https://github.com/yiminghe/async-validator)
   */
  rules: PropTypes.array,
  /**
   * 收集子节点的值的时机
   * `onChange`
   */
  trigger: PropTypes.string,
  /**
   * @ignore
   */
  validate: PropTypes.array,
  /**
   * 当某一规则校验不通过时，是否停止剩下的规则的校验
   */
  validateFirst: PropTypes.bool,
  /**
   * 校验子节点值的时机
   */
  validateTrigger: PropTypes.string,
  /**
   * 子节点的值的属性，如 Switch 的是 `checked`
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

