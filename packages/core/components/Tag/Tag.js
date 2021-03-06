import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import capitalize from '@wonder-ui/utils/capitalize';
import styles, { createColor } from './styles';
import { withStyles } from '@wonder-ui/styles';

/**
 * 进行标记和分类的小标签，用于标记事物的属性和维度，以及进行分类.
 * @visibleName Tag 标签
 */
const Tag = React.forwardRef(function Tag(props, ref) {
  const {
    checked,
    children,
    classes,
    className,
    clickable,
    color,
    hairline,
    style,
    size = 'medium',
    ...rest
  } = props;

  const customColor = React.useMemo(() => createColor(color), [color]);

  return (
    <span
      className={clsx(
        classes.root,
        {
          [classes.colorPrimary]: color === 'primary',
          [classes.colorSecondary]: color === 'secondary',
          [classes.clickable]: clickable,
          [classes.checked]: checked && clickable,
          [classes[`size${capitalize(size)}`]]: size !== 'medium',
          [classes.hairline]: hairline,
        },
        className,
      )}
      style={{ ...customColor, ...style }}
      ref={ref}
      {...rest}
    >
      {children}
    </span>
  );
});

Tag.propTypes = {
  /** 标签颜色 `primary`, `secondary`, 或者 自定颜色'#ccc' */
  color: PropTypes.string,
  /**
   * @ignore
   */
  clickable: PropTypes.bool,
  /**
   * Tag size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * 细边框
   */
  hairline: PropTypes.bool,
};

Tag.displayName = 'Tag';

export default withStyles(styles)(Tag);
