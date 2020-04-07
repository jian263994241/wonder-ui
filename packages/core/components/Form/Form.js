import React from 'react';
import PropTypes from 'prop-types';
import getHeadError from './getHeadError';
import useEventCallback from '@wonder-ui/utils/useEventCallback';
import craeteForm, { formShape } from './createForm';
import FormContext from './FormContext';
import useForm from './useForm';

const InternalForm = React.forwardRef(function InternalForm(props, ref) {
  const {
    autoComplete = 'off',
    children,
    onSubmit,
    onFinish,
    onFinishFailed,
    form,
    ...rest
  } = props;
  
  const handleSubmit = useEventCallback((e)=>{
    e.preventDefault();
    if(onSubmit){
      return onSubmit(e);
    }

    form.validateFields((errors, values)=>{
      if(errors){
        const headError = getHeadError(errors);
        onFinishFailed && onFinishFailed(values, headError, errors);
      }else{
        onFinish && onFinish(values);
      }
    });
  });  

  return (
    <FormContext.Provider value={form}>
      <form 
        ref={ref}
        autoComplete={autoComplete}
        {...rest}
        onSubmit={handleSubmit}
      >
        {typeof children === 'function' ? children({ form }): children }
      </form>
    </FormContext.Provider>
  )
});


/**
 * 带验证的表单组件
 * @visibleName Form 表单
 */
const Form = React.forwardRef(function Form (props, ref) {
  const { 
    validateMessages,
    onFieldsChange,
    onValuesChange,
    mapProps,
    mapPropsToFields,
    fieldNameProp,
    ...rest
  } = props;

  const formOpts = {
    validateMessages,
    onFieldsChange,
    onValuesChange,
    mapProps,
    mapPropsToFields,
    fieldNameProp,
  };

  const WrapForm =  React.useMemo(
    () => craeteForm(formOpts)(InternalForm), Object.values(formOpts));

  return <WrapForm {...rest} ref={ref}/>
})

Form.propTypes = {
  /**
   * Where to store the name argument of getFieldProps.
   * @ignore
   */
  fieldNameProp: PropTypes.func,
  /**
   * @ignore
   */
  form: formShape,
  /**
   * Get new props transferred to WrappedComponent.
   * 
   */
  mapProps: PropTypes.func,
  /**
   * Convert value from props to fields. Used for read fields from redux store.
   * 
   */
  mapPropsToFields: PropTypes.func,
  /**
   * 字段更新时触发回调事件
   */
  onFieldsChange: PropTypes.func,
  /**
   * 提交表单且数据验证成功后回调事件
   */
  onFinish: PropTypes.func,
  /**
   * 提交表单且数据验证失败后回调事件
   */
  onFinishFailed: PropTypes.func,
  /**
   * @ignore
   */
  onSubmit: PropTypes.func,
  /**
   * 值更改时调用
   */
  onValuesChange: PropTypes.func,
  /**
   * Preseted messages of [async-validator](https://github.com/yiminghe/async-validator)
   * @ignore
   */
  validateMessages: PropTypes.func,
};

Form.create = craeteForm;
Form.useForm = useForm;
Form.getHeadError = getHeadError;

export default Form;