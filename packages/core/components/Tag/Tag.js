import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../styles/withStyles';
import clsx from 'clsx';
import styles from './styles';

/**
 * @visibleName Tag 标签
 */
const Tag = React.forwardRef((props, ref)=>{
  const {
    classes,
    className,
    children,
    color,
    outlined,
    clickable,
    ...rest
  } = props;
  
  return (
    <div className={clsx(classes.root, className)} ref={ref} {...rest}>
      <span className={classes.label}>{children}</span>
    </div>
  )
})

Tag.propTypes = {
  /** 标签颜色 `primary`, `secondary`, 或者 自定颜色'#ccc' */
  color: PropTypes.string,
  /** 是否空心标签 */
  outlined: PropTypes.bool,

  clickable: PropTypes.bool,
}

Tag.displayName = 'Tag';

export default withStyles(styles)(Tag);