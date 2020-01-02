import React from 'react';
import PropTypes from 'prop-types';
import DisabledTouchMove from '../DisabledTouchMove';
import styles from './styles';
import withStyles from '../withStyles';
import clsx from 'clsx';

const HeaderBar = React.forwardRef(function HeaderBar(props, ref){
  const {
    classes,
    className,
    title,
    barLeft,
    barRight,
    bordered = true,
    ...rest
  } = props;

  return (
    <DisabledTouchMove ref={ref}>
      <div
        className={clsx(classes.root, { [classes.hairline]: bordered }, className)} 
        {...rest}
      >
        <div className={classes.left}>{barLeft}</div>
        <div className={classes.title}>{title}</div>
        <div  className={classes.right}>{barRight}</div>
      </div>
    </DisabledTouchMove>
  )
});

HeaderBar.propTypes = {
  classes: PropTypes.object,
  barLeft: PropTypes.node,
  barRight: PropTypes.node,
  spacing: PropTypes.number,
  bordered: PropTypes.bool,
};

HeaderBar.displayName = 'HeaderBar';

export default withStyles(styles)(HeaderBar);
