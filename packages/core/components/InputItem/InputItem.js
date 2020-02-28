import React from 'react';
import PropTypes from 'prop-types';
import { FIELD_META_PROP, FIELD_DATA_PROP } from '../Form/constants';
import clsx from 'clsx';
import Dialog from '../Dialog';
import IconInfoOutlined from '../icons/InfoOutlined';
import InputBase from '../InputBase';
import styles from './styles';
import withStyles from '../withStyles';

/**
 * `List`组件下的子组件, 提供一个可输入的子项. 主要用于`Form`下提交数据用. 
 * @visibleName InputItem 输入项
 */
const InputItem = React.forwardRef(function InputItem(props, ref) {
  const { 
    [FIELD_DATA_PROP]: fieldData = {},
    [FIELD_META_PROP]: fieldMeta,
    alignRight,
    children,
    classes,
    className,
    clearButton = true,
    extra,
    labelNumber = 5,
    multiline,
    onExtraClick,
    renderInput,
    rootRef,
    ...rest
  } = props;

  const error = React.useMemo(()=>{
    if(fieldData.errors){
      return fieldData.errors[0];
    }
    return {};
  }, [fieldData.errors]);

  return (
    <div 
      ref={rootRef}
      className={clsx(
        classes.root, 
        multiline && classes.multiline,
        className
      )}
    >
      <label className={classes.line}>
        {children && 
          <div className={clsx( classes.label, `label-size-${labelNumber}` )} >
            {children}
          </div>
        }
        {
          renderInput ? renderInput(props, ref) : (
            <InputBase
              ref={ref}
              fullWidth
              multiline={multiline}
              clearButton={clearButton && !multiline}
              alignRight={alignRight}
              classes={{root: classes.input}}
              {...rest}
            />
          )
        }
        {extra && ( 
          <div className={classes.extra} onClick={onExtraClick} > {extra} </div> 
        )}
        {
          error.message && <IconInfoOutlined color="error" onClick={Dialog.toast.bind(null, error.message)}/>
        }
      </label>
    </div>
  )
});


InputItem.displayName = 'InputItem';

InputItem.propTypes = {
  /**
   * 输入文字向右对齐, 默认向左
   */
  alignRight: PropTypes.bool,
  /**
   * label展示文字
   */
  children: PropTypes.any,
  /**
   * class API 覆盖组件原有样式.
   */
  classes: PropTypes.object,
  /**
   * Root node className
   */
  className: PropTypes.string,
  /**
   * 显示情况输入的按钮
   */
  clearButton: PropTypes.bool,
  /**
   * 最右边额外的内容展示
   */
  extra: PropTypes.any,
  /**
   * label的字数限制, 默认5
   */
  labelNumber: PropTypes.oneOf([1,2,3,4,5,6,7]),
  /**
   * onChange
   */
  onChange: PropTypes.func,
  /**
   * 是否多行, multiline: true时, Input 替换成 TextareaAutosize
   */
  multiline: PropTypes.bool,
  /**
   * extra部分的点击操作
   */
  onExtraClick: PropTypes.func,
  /**
   * 替换默认输入框
   */
  renderInput: PropTypes.func,
  /**
   * value
   */
  value: PropTypes.any,
};

export default withStyles(styles)(InputItem);