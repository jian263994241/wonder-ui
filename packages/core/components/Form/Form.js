import React from 'react';
import PropTypes from 'prop-types';
import createDOMForm from 'rc-form/lib/createDOMForm';
import useEventCallback from '@wonder-ui/utils/useEventCallback';
import { FIELD_META_PROP, FIELD_DATA_PROP } from './constants';
import getFirstError from './getFirstError';

const Form = React.forwardRef((props, ref)=>{
  const {
    children,
    autoComplete = 'off',
    onSubmit,
    ...rest
  } = props;
  
  const handleSubmit = useEventCallback((e)=>{
    e.preventDefault();
    onSubmit && onSubmit(e);
  });

  return (
    <form 
      ref={ref}
      autoComplete={autoComplete}
      onSubmit={handleSubmit}
      {...rest}
    >
      {children}
    </form>
  )
});

Form.propTypes = {
  onSubmit: PropTypes.func
};

Form.create = options => createDOMForm({
  fieldNameProp: 'id',
  ...options,
  fieldMetaProp: FIELD_META_PROP,
  fieldDataProp: FIELD_DATA_PROP
});

Form.getFirstError = getFirstError;

export default Form;