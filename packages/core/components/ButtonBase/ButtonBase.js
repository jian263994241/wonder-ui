import React from 'react';
import clsx from 'clsx';
import styles from './styles';
import withStyles from '../withStyles';
import TouchFeedback from '../TouchFeedback';

const ButtonBase = React.forwardRef(function ButtonBase(props, ref){
  const { classes, className, ...rest } = props;
  return (
    <TouchFeedback>
      <button 
        className={clsx(classes.root, className)} 
        role="button" 
        type="button" 
        ref={ref} 
        {...rest}
      />
    </TouchFeedback>
    
  )
});

ButtonBase.displayName = 'ButtonBase';

export default withStyles(styles)(ButtonBase);