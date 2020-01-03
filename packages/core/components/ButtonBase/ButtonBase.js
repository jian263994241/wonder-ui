import React from 'react';
import clsx from 'clsx';
import styles from './styles';
import withStyles from '../withStyles'

const ButtonBase = React.forwardRef(function ButtonBase(props, ref){
  const { classes, className, ...rest } = props;
  return (
    <button 
      className={clsx(classes.root, className)} 
      role="button" 
      type="button" 
      ref={ref} 
      {...rest}
    />
  )
});

ButtonBase.displayName = 'ButtonBase';

export default withStyles(styles)(ButtonBase);