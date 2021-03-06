import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import getRendered from '@wonder-ui/utils/getRendered';
import styles from './styles';
import { withStyles } from '@wonder-ui/styles';

/**
 * 单个连续模块垂直排列，显示当前的内容、状态和可进行的操作
 * @visibleName List 列表
 */
const List = React.forwardRef(function List(props, ref) {
  const {
    children,
    classes,
    className,
    renderFooter,
    renderHeader,
    ...rest
  } = props;
  return (
    <div className={clsx(classes.root, className)} ref={ref} {...rest}>
      {renderHeader && (
        <div className={classes.header}> {getRendered(renderHeader)} </div>
      )}
      <div className={classes.body}>{children}</div>
      {renderFooter && (
        <div className={classes.footer}> {getRendered(renderFooter)} </div>
      )}
    </div>
  );
});

List.propTypes = {
  /**
   * 渲染列表头部
   */
  renderHeader: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /**
   * 渲染列表尾部
   */
  renderFooter: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /**
   * 子元素  `ListItem`,  `InputItem`, `CheckboxItem`
   */
  children: PropTypes.any,
};

List.displayName = 'List';

export default withStyles(styles)(List);
