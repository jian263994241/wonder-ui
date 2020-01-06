import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import InputBase from '../InputBase';
import styles from './styles';
import withStyles from '../withStyles';

const InputItem = React.forwardRef(function InputItem(props, ref) {
  const { 
    alignRight,
    children,
    classes,
    className,
    clearButton = true,
    extra,
    labelNumber = 5,
    onExtraClick,
    ...rest
  } = props;
  
  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.line}>
        {children && 
          <div className={clsx( classes.label, `label-size-${labelNumber}` )} >
            {children}
          </div>
        }
        <InputBase
          fullWidth
          clearButton={clearButton}
          alignRight={alignRight}
          classes={{input: classes.input}}
          {...rest}
        />
        {extra && ( 
          <div className={classes.extra} onClick={onExtraClick} > {extra} </div> 
        )}
      </div>
    </div>
  )
});


InputItem.displayName = 'InputItem';

InputItem.propTypes = {
  alignRight: PropTypes.bool,
  children: PropTypes.any,
  /**
   * @ignore
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  clearButton: PropTypes.bool,
  extra: PropTypes.any,
  labelNumber: PropTypes.number,
  onExtraClick: PropTypes.func,
}


export default withStyles(styles)(InputItem);