import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import getRendered from '@wonder-ui/utils/getRendered';
import styles from './styles';
import { withStyles } from '@wonder-ui/styles';
/**
 * 内容块用来设置统一的边距, 边距大小为 `theme.spacing` 8px 的倍数
 *
 * `blank` 左右留白的边距, `space` 上下留白的边距
 *
 * `top`, `right`, `bottom`, `left` 单独设置四周的边距, 优先级高于 `blank`, `space`
 *
 * @visibleName Block 内容块
 */
const ContentBlock = React.forwardRef(function ContentBlock(props, ref) {
  const {
    classes,
    className,
    space,
    blank,
    top,
    left,
    right,
    bottom,
    header,
    strong,
    inset,
    children,
    ...rest
  } = props;

  return (
    <div className={clsx(classes.root, className)} ref={ref} {...rest}>
      {header && <div className={classes.header}>{getRendered(header)}</div>}
      <div
        className={clsx(classes.body, {
          [classes.strong]: strong,
          [classes.inset]: inset,
        })}
      >
        {children}
      </div>
    </div>
  );
});

ContentBlock.defaultProps = {
  blank: 2,
  space: 2,
  strong: true,
};

ContentBlock.propTypes = {
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
  header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};

ContentBlock.displayName = 'ContentBlock';

export default withStyles(styles)(ContentBlock);
