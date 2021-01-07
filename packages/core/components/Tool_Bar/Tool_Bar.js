import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import DisabledTouchMove from '../DisabledTouchMove';
import Flex from '../Flex';
import Slot from '../Slot';
import styles from './styles';
import withStyles from '../withStyles';
/**
 * 提供一个44像素的通栏, 子元素Flex布局
 * Slot位置 `pageContentAfter`
 * @see 基于[Flex组件](#/组件?id=flex)扩展, props相同
 * @visibleName Toolbar 工具栏
 */
const ToolBar = React.forwardRef(function ToolBar(props, ref) {
  const {
    bottomFixed,
    buttonFull = true,
    children,
    classes,
    className,
    safeAreaBottom = false,
    ...rest
  } = props;

  const bar = (
    <DisabledTouchMove ref={ref}>
      <Flex
        className={clsx(
          classes.root,
          {
            [classes.safeAreaBottom]: bottomFixed || safeAreaBottom,
          },
          className,
        )}
        flex
        role="toolbar"
        {...rest}
      >
        {children}
      </Flex>
    </DisabledTouchMove>
  );

  if (bottomFixed) {
    return <Slot name="pageToolbar"> {bar} </Slot>;
  }
  return bar;
});

ToolBar.defaultProps = {
  gutter: 0.25,
};

ToolBar.propTypes = {
  /**
   * 固定底部
   */
  bottomFixed: PropTypes.bool,
  /**
   * 子元素间距
   */
  gutter: PropTypes.number,
  /**
   * ios 底部安全距离
   */
  safeAreaBottom: PropTypes.bool,
};

ToolBar.displayName = 'ToolBar';

export default withStyles(styles)(ToolBar);
