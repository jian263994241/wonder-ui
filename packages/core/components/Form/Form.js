import React from 'react';
import PropTypes from 'prop-types';
import getHeadError from './getHeadError';
import useEventCallback from '@wonder-ui/utils/useEventCallback';
import craeteForm from './createForm';

const Form = React.forwardRef((props, ref)=>{
  const {
    autoComplete = 'off',
    children,
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

Form.create = craeteForm;

Form.getHeadError = getHeadError;

Form.displayName = 'displayName';

export default Form;