import React from 'react';
import PropTypes from 'prop-types';
import useDisabledRefTouchMove from '@wonder-ui/utils/useDisabledRefTouchMove';
import useForkRef from '@wonder-ui/utils/useForkRef';
import { withStyles, classnames } from '@wonder-ui/styles';
import styles from './styles';

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
      className={classnames(classes.root, bordered&&classes.hairline, className)} 
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
