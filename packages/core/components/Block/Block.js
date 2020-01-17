import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import getRendered from '@wonder-ui/utils/getRendered';
import styles from './styles';
import withStyles from '../withStyles';
/**
 * 内容块用来设置统一的边距, 边距大小为 `theme.spacing` 8px 的倍数
 * 
 * `blank` 左右留白的边距, `space` 上下留白的边距
 * 
 * `top`, `right`, `bottom`, `left` 单独设置四周的边距, 优先级高于 `blank`, `space`
 * 
 * @visibleName Block 内容块
 */
const Block = React.forwardRef(function Block (props, ref) {
  const { classes, className, space, blank, top, left, right, bottom, header, strong, inset, children, ...rest } = props;
  return (
    <div className={clsx( classes.root, className )} ref={ref} {...rest}>
      {header && <div className={classes.header}>{getRendered(header)}</div>}
      <div className={clsx(
        classes.body,
        {
          [classes.bodyStrong]: strong,
          [classes.bodyInset]: inset
        },
      )}>{children}</div>
    </div>
  )
});

Block.defaultProps = {
  blank: 0,
  space: 0,
}

Block.propTypes = {
  /** 左右留白的边距 */
  blank: PropTypes.number,
  /** 上下留白的边距 */
  space: PropTypes.number,
  /** 左边的距离 */
  left: PropTypes.number,
  /** 右边的距离 */
  right: PropTypes.number,
  /** 上边的距离 */
  top: PropTypes.number,
  /** 下边的距离 */
  bottom: PropTypes.number,
  /**
   * white background
   */
  strong: PropTypes.bool,
  /**
   * set border radius
   */
  inset: PropTypes.bool,
  /** 列表头部 */
  header: PropTypes.oneOfType([ PropTypes.func, PropTypes.node ]),
};

Block.displayName = 'Block';

export default withStyles(styles)(Block);