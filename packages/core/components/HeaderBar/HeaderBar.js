import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIosOutlined from '../icons/ArrowBackIosOutlined';
import CloseOutlined from '../icons/CloseOutlined';
import clsx from 'clsx';
import DisabledTouchMove from '../DisabledTouchMove';
import styles from './styles';
import withStyles from '../withStyles';

const HeaderBar = React.forwardRef(function HeaderBar(props, ref){
  const {
    barLeft,
    barRight,
    bordered = true,
    classes,
    className,
    onBack,
    onClose,
    showBack,
    showClose,
    title,
    ...rest
  } = props;

  return (
    <DisabledTouchMove ref={ref}>
      <div
        className={clsx(classes.root, { [classes.hairline]: bordered }, className)} 
        {...rest}
      >
        <div className={classes.left}>
          {showBack && <ArrowBackIosOutlined className={classes.defaultIcon} fontSize="small" onClick={onBack}/>}
          {showClose && <CloseOutlined className={classes.defaultIcon} fontSize="small" onClick={onClose}/>}
          {barLeft}
        </div>
        <div className={classes.title}>{title}</div>
        <div  className={classes.right}>{barRight}</div>
      </div>
    </DisabledTouchMove>
  )
});

HeaderBar.propTypes = {
  barLeft: PropTypes.node,
  barRight: PropTypes.node,
  bordered: PropTypes.bool,
  classes: PropTypes.object,
  onBack: PropTypes.func,
  spacing: PropTypes.number,
};

HeaderBar.displayName = 'HeaderBar';

export default withStyles(styles)(HeaderBar);
