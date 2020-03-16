import React from 'react';
import PropTypes from 'prop-types';
import { FIELD_META_PROP, FIELD_DATA_PROP } from '../Form/constants';
import ArrowForwardIosOutlined from '../icons/ArrowForwardIosOutlined';
import capitalize from '@wonder-ui/utils/capitalize';
import clsx from 'clsx';
import IconInfoOutlined from '../icons/InfoOutlined';
import styles from './styles';
import TouchFeedback from '../TouchFeedback';
import withStyles from '../withStyles';
/**
 * List, ListView 列表下的子组件.
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
          className,
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
                <ArrowForwardIosOutlined 
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


