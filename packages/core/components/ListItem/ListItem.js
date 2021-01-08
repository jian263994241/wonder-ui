import React from 'react';
import PropTypes from 'prop-types';
import ArrowForwardIosOutlined from '@wonder-ui/icons/ArrowForwardIosOutlined';
import capitalize from '@wonder-ui/utils/capitalize';
import clsx from 'clsx';
import styles from './styles';
import { withStyles } from '@wonder-ui/styles';
import ExtraInfo from '../InputItem/ExtraInfo';
/**
 * List, ListView 列表下的子组件.
 * @visibleName ListItem 列表项
 */
const ListItem = React.forwardRef(function ListItem(props, ref) {
  const {
    activeState,
    align = 'center',
    arrow,
    children,
    classes,
    className,
    disabled,
    extra,
    errorMessage,
    multipleLine,
    thumb,
    wrap,
    meta = {},
    ...rest
  } = props;

  const errorMsg = React.useMemo(() => {
    if (errorMessage) {
      return errorMessage;
    }
    return meta.errors ? meta.errors.join() : null;
  }, [meta.errors, errorMessage]);

  return (
    <div
      ref={ref}
      className={clsx(classes.root, className, {
        [classes.activeState]: activeState || !!arrow,
      })}
      disabled={disabled}
      {...rest}
    >
      {thumb && <div className={classes.media}>{thumb}</div>}
      <div className={classes.line}>
        {children && (
          <div
            className={clsx(
              classes.content,
              classes['align' + capitalize(align)],
              {
                [classes.ellipsis]: !wrap,
              },
            )}
          >
            {children}
          </div>
        )}
        {extra && (
          <div
            className={clsx(
              classes.extra,
              classes['align' + capitalize(align)],
            )}
          >
            {extra}
          </div>
        )}

        <ExtraInfo message={errorMsg} />
        {!!arrow && (
          <div
            className={classes['arrowAlign' + capitalize(align)]}
            aria-hidden="true"
          >
            <ArrowForwardIosOutlined
              className={clsx(
                classes.arrow,
                classes['arrow' + capitalize(arrow)],
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
});

ListItem.defaultProps = {
  wrap: false,
  disabled: undefined,
  thumb: undefined,
  extra: undefined,
  children: undefined,
  arrow: undefined,
  align: 'center',
  activeState: undefined,
};

ListItem.propTypes = {
  /**
   * 点击反馈
   * arrow 存在是强制为 true
   */
  activeState: PropTypes.bool,
  /**
   * 子元素垂直对齐
   */
  align: PropTypes.oneOf(['top', 'center']),
  /**
   * 箭头方向(水平方向, 垂直方向)
   */
  arrow: PropTypes.oneOf(['horizontal', 'vertical', 'vertical-up']),
  /**
   * 列表内容
   */
  children: PropTypes.any,
  /**
   * 禁用组件
   */
  disabled: PropTypes.bool,
  /**
   * 错误信息
   */
  errorMessage: PropTypes.string,
  /**
   * 最右边额外的内容展示
   */
  extra: PropTypes.any,
  /**
   * 最左边内容, 一般用作小图展示
   */
  thumb: PropTypes.any,
  /**
   * 是否换行，默认情况下，文字超长会被隐藏
   */
  wrap: PropTypes.bool,
};

ListItem.displayName = 'ListItem';

export default withStyles(styles)(ListItem);
