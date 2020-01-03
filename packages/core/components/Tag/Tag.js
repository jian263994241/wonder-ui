import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles, { createColor } from './styles';
import withStyles from '../withStyles';

/**
 * @visibleName Tag 标签
 */
const Tag = React.forwardRef((props, ref)=>{
  const {
    checked,
    children,
    classes,
    className,
    clickable,
    color,
    style,
    ...rest
  } = props;

  const customColor = React.useMemo(()=> createColor(color), [color]);
  
  return (
    <span className={clsx(
        classes.root, 
        {
          [classes.colorPrimary]: color === 'primary',
          [classes.colorSecondary]: color === 'secondary',
          [classes.clickable]: clickable,
          [classes.checked]: checked && clickable
        },
        className
      )} 
      style={{...customColor, ...style}}
      ref={ref} 
      {...rest}
    >
      {children}
    </span>
  )
})

Tag.propTypes = {
  /** 标签颜色 `primary`, `secondary`, 或者 自定颜色'#ccc' */
  color: PropTypes.string,
  /**
   * @ignore
   */
  clickable: PropTypes.bool,
}

Tag.displayName = 'Tag';

export default withStyles(styles)(Tag);