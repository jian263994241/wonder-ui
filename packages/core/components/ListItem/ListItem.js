import React from 'react';
import PropTypes from 'prop-types';
import { FIELD_META_PROP, FIELD_DATA_PROP } from '../Form/constants';
import Arrow from '../icons/Arrow';
import capitalize from '@wonder-ui/utils/capitalize';
import clsx from 'clsx';
import IconInfoOutlined from '../icons/InfoOutlined';
import styles from './styles';
import TouchFeedback from '../TouchFeedback';
import withStyles from '../withStyles';
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
    [FIELD_DATA_PROP]: fieldData = {},
    [FIELD_META_PROP]: fieldMeta,
    activeState,
    align = 'center',
    arrow,
    children,
    classes,
    className,
    disabled,
    extra,
    multipleLine,
    thumb,
    wrap,
    ...rest
  } = props;

  const error = React.useMemo(()=>{
    if(fieldData.errors){
      return fieldData.errors[0];
    }
    return {};
  }, [fieldData.errors]);
  

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
          {
            error.message && <IconInfoOutlined color="error" style={{marginLeft:3}}/>
          }
          { !error.message && !!arrow && (
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


