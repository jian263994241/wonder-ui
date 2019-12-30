import React from 'react';
import PropTypes from 'prop-types';
import TouchFeedback from '../TouchFeedback';
import withStyles from '../styles/withStyles';
import clsx from 'clsx';


const CheckableTag = React.forwardRef(function CheckableTag(props, ref) {
  const { classes, className, checked, onChange, onClick, ...rest } = props;

  const handleClick = React.useCallback(()=>{
    if (onChange) {
      onChange(!checked);
    }
  }, [checked, onChange]);


  return (
    <TouchFeedback>
      <span 
        className={clsx(
          classes.root,
          {
            [classes.checked]: checked
          },
          className
        )}
        ref={ref} 
        onClick={handleClick} 
        {...rest}
      />
    </TouchFeedback>
  )
}); 

CheckableTag.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  /**
   * @ignore
   */
  classes: PropTypes.object
};

CheckableTag.displayName = 'CheckableTag';


export default withStyles(theme=>({
  root: {
    ...theme.typography.body2,
    ...theme.typography.ellipsis,
    display: 'inline-block',
    padding: '0 7px',
    cursor: 'default',
    verticalAlign: 'middle',
    opacity: 1,
    border: '1px solid #ddd',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary.main,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    transition: theme.transitions.create('all'),
    '&.active-state': {
      opacity: 0.8,
    },
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  checked: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  }
}))(CheckableTag);