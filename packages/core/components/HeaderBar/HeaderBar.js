import React from 'react';
import PropTypes from 'prop-types';
import useDisabledRefTouchMove from '@wonder-ui/utils/useDisabledRefTouchMove';
import useForkRef from '@wonder-ui/utils/useForkRef';
import styles from './styles';
import withStyles from '../styles/withStyles';
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
  const rootRef = React.useRef(null);
  const handleRef = useForkRef(rootRef, ref);

  useDisabledRefTouchMove(rootRef);

  return (
    <div 
      className={clsx(classes.root, { [classes.hairline]: bordered }, className)} 
      ref={handleRef} 
      {...rest}
    >
      <div className={classes.left}>{barLeft}</div>
      <div className={classes.title}>{title}</div>
      <div  className={classes.right}>{barRight}</div>
    </div>
  )
});

HeaderBar.propTypes = {
  classes: PropTypes.object,
  barLeft: PropTypes.node,
  barRight: PropTypes.node,
  spacing: PropTypes.number,
  bordered: PropTypes.bool,
}

export default withStyles(styles, {name: 'HeaderBar'})(HeaderBar);
