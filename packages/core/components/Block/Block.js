import React from 'react';
import PropTypes from 'prop-types';
import getRendered from '@wonder-ui/utils/getRendered';
import withStyles from '../withStyles';
import clsx from 'clsx';

/**
 * 内容块用来设置统一的边距, 边距大小为 `theme.spacing` 的倍数
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

export default withStyles(theme => {
  const defaultValue = (a,b) => theme.spacing(a != undefined ? a : b);
  return {
    root: {
      display: 'block',
    },
    header: {
      width: '100%',
      width: '100%',
      boxSizing: 'border-box',
      color: theme.palette.text.hint,
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
      display: 'flex',
      justifyContent: 'start',
      ...theme.typography.subtitle2,
      paddingLeft: props => defaultValue(props.left, props.blank),
      paddingRight: props => defaultValue(props.right, props.blank),
    },
    body: {
      ...theme.typography.body2,
      paddingTop: props => defaultValue(props.top, props.space),
      paddingBottom: props => defaultValue(props.bottom, props.space),
      paddingLeft: props => defaultValue(props.left, props.blank),
      paddingRight: props => defaultValue(props.right, props.blank),
    },
    bodyStrong: {
      background: theme.palette.background.paper
    },
    bodyInset: {
      borderRadius: theme.spacing(1),
      margin: `0 ${theme.spacing(2)}px`
    }
  }
})(Block);