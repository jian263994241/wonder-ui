import React from 'react';
import PropTypes from 'prop-types';
import { FIELD_META_PROP, FIELD_DATA_PROP } from '../Form/constants';
import clsx from 'clsx';
import Dialog from '../Dialog';
import IconInfoOutlined from '../icons/InfoOutlined';
import InputBase from '../InputBase';
import styles from './styles';
import withStyles from '../withStyles';

const InputItem = React.forwardRef(function InputItem(props, ref) {
  const { 
    [FIELD_DATA_PROP]: fieldData = {},
    [FIELD_META_PROP]: fieldMeta,
    alignRight,
    children,
    classes,
    className,
    clearButton = true,
    extra,
    labelNumber = 5,
    multiline,
    onExtraClick,
    renderInput,
    rootRef,
    ...rest
  } = props;

  const error = React.useMemo(()=>{
    if(fieldData.errors){
      return fieldData.errors[0];
    }
    return {};
  }, [fieldData.errors]);

  
  return (
    <div 
      ref={rootRef}
      className={clsx(
        classes.root, 
        multiline && classes.multiline,
        className
      )}
    >
      <label className={classes.line}>
        {children && 
          <div className={clsx( classes.label, `label-size-${labelNumber}` )} >
            {children}
          </div>
        }
        {
          renderInput ? renderInput(props, ref) : (
            <InputBase
              ref={ref}
              fullWidth
              multiline={multiline}
              clearButton={clearButton && !multiline}
              alignRight={alignRight}
              classes={{root: classes.input}}
              {...rest}
            />
          )
        }
        {extra && ( 
          <div className={classes.extra} onClick={onExtraClick} > {extra} </div> 
        )}
        {
          error.message && <IconInfoOutlined color="error" onClick={Dialog.toast.bind(null, error.message)}/>
        }
      </label>
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
  labelNumber: PropTypes.oneOf([1,2,3,4,5,6,7]),
  onExtraClick: PropTypes.func,
  renderInput: PropTypes.func,
};

export default withStyles(styles)(InputItem);