import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import getRendered from '@wonder-ui/utils/getRendered';
import withStyles from '../withStyles';
import clsx from 'clsx';

/**
 * 单个连续模块垂直排列，显示当前的内容、状态和可进行的操作
 * @visibleName List 列表
 */
const List = React.forwardRef(function List(props, ref) {
  const { 
    classes,
    className,
    children,
    renderHeader,
    renderFooter,
    ...rest
  } = props;
  return (
    <div className={clsx(classes.root, className)} ref={ref} {...rest}>
      { renderHeader && <div className={classes.header}> {getRendered(renderHeader)} </div> }
      {children}
      { renderFooter && <div className={classes.footer}> {getRendered(renderFooter)} </div> }
    </div>
  )
});

List.propTypes = {
  /** 列表头部 */
  renderHeader: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ]),
  /** 脚步 */
  renderFooter: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ]),
  /** 子元素 */
  children: PropTypes.any
};

List.displayName = 'List';

export default withStyles(styles)(List);