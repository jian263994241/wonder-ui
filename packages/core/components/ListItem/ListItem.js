import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import withStyles from '../styles/withStyles';
import clsx from 'clsx';
import TouchFeedback from '../TouchFeedback';
import capitalize from '@wonder-ui/utils/capitalize';
import Arrow from '../icons/Arrow';

/**
 * 列表项
 * 
 * @see [List组件](/#/组件?id=list)的子元素
 * 
 * `ListItem` 下提供了辅助组件 `ListItem.Brief` 用做辅助说明
 * 
 * @visibleName ListItem 列表项
 */
const ListItem = React.forwardRef(function ListItem(props, ref) {
  const {
    classes,
    className,
    arrow,
    children,
    disabled,
    extra,
    thumb,
    align = 'center',
    wrap,
    multipleLine,
    activeState,
    ...rest
  } = props;

  return (
    <TouchFeedback>
      <div 
        ref={ref} 
        className={clsx(
          classes.root,
          {
            [classes.activeState]: !!arrow || activeState
          },
        )}
        disabled={disabled} 
        {...rest}
      >
        { thumb && <div className={classes.media}>{thumb}</div> }
        <div className={classes.line}>
          {children && (
            <div 
              className={clsx(
                classes.content,
                classes['align'+ capitalize(align)],
                {
                  [classes.ellipsis]: !wrap
                }
              )}
            >{children}</div>
          )}
          {extra && ( 
            <div 
              className={clsx(
                classes.extra,
                classes['align'+ capitalize(align)],
              )}
            > {extra} </div> 
          )}
          { !!arrow && (
              <div className={classes['arrowAlign' + capitalize(align)]} aria-hidden="true" >
                <Arrow 
                  className={clsx(
                    classes.arrow,
                    classes['arrow' + capitalize(arrow)]
                  )}
                />
              </div>
            )
          }
        </div>
      </div>
    </TouchFeedback>
  )
})

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
  /** 箭头方向(右,上,下) */
  arrow: PropTypes.oneOf(['horizontal', 'vertical', 'vertical-up']),
  /** 子元素垂直对齐 */
  align: PropTypes.oneOf(['top', 'center']),
  /** 内容 */
  children: PropTypes.any,
  /** 禁用 */
  disabled: PropTypes.bool,
  /** 右边内容 */
  extra: PropTypes.any,
  /** 缩略图 */
  thumb: PropTypes.any,
  /** 是否换行，默认情况下，文字超长会被隐藏 */
  wrap: PropTypes.bool,
  /**
   * 点击反馈
   * arrow 存在是强制为 true
   */
  activeState: PropTypes.bool,
};

ListItem.displayName = 'ListItem';

export default withStyles(styles)(ListItem);


