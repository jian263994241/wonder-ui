import React from 'react';

const warningFunc = () => {
  console.warn('Can not find FormContext. Please make sure you wrap Field under Form.');
};

const FormContext = React.createContext({
  getFieldsValue: warningFunc,
  getFieldValue: warningFunc,
  getFieldInstance: warningFunc,
  setFieldsValue: warningFunc,
  setFields: warningFunc,
  setFieldsInitialValue: warningFunc,
  getFieldDecorator: warningFunc,
  getFieldProps: warningFunc,
  getFieldsError: warningFunc,
  getFieldError: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isSubmitting: warningFunc,
  submit: warningFunc,
  validateFields: warningFunc,
  resetFields: warningFunc,
  validateFieldsAndScroll: warningFunc,
});

export default FormContext;