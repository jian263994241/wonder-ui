import React from 'react';
import warning from 'warning';
import useStyles from './useStyles';
import { isValidElementType } from 'react-is';

const createStyles = (styles)=>{
  return (WrappedComponent)=>{
    warning(
      isValidElementType(WrappedComponent),
      'WrappedComponent must be validElementType'
    );
    
    return ({classes: _inputClasses, ...rest})=>{
      const initialClasses = useStyles(styles);
      const inputClasses = useStyles(_inputClasses);

      const classes = React.useMemo(()=>({ 
        ...initialClasses, 
        ...inputClasses 
      }), [initialClasses, inputClasses]);
      return <WrappedComponent classes={classes} {...rest}/>
    }
  }
};

export default createStyles;