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
        <Demo/>
        {children}
      </form>
    </FormContext.Provider>
  )
});


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

  const WrapForm =  craeteForm({
    validateMessages,
    onFieldsChange,
    onValuesChange,
    mapProps,
    mapPropsToFields,
    fieldNameProp,
  })(InternalForm);

  return <WrapForm {...rest} ref={ref}/>
})

Form.propTypes = {
  onSubmit: PropTypes.func,
  form: formShape
};

Form.create = craeteForm;
Form.useForm = useForm;
Form.getHeadError = getHeadError;
Form.displayName = 'displayName';

export default Form;