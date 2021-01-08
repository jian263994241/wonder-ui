import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './styles';
import { withStyles } from '@wonder-ui/styles';
/**
 * flex box 样式
 * @visibleName Flex 布局
 */
const Flex = React.forwardRef(function Flex(props, ref) {
  const {
    alignContent,
    classes,
    className,
    direction,
    flex,
    gutter,
    justify,
    wrap,
    ...rest
  } = props;

  return (
    <div
      ref={ref}
      className={clsx(
        classes.root,
        {
          [classes.flex]: flex,
        },
        className,
      )}
      {...rest}
    />
  );
});

Flex.propTypes = {
  /** 子元素在交叉轴上的对齐方式 */
  align: PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']),
  /** 有多根轴线时的对齐方式 */
  alignContent: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'stretch',
  ]),
  /** 子元素在主轴上的对齐方式 */
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  /** 子元素的换行方式 */
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  /** 项目定位方向 */
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  /** 子元素间距 8px */
  gutter: PropTypes.number,
  /**
   * cidlren flex: 1
   */
  flex: PropTypes.bool,
};

Flex.defaultProps = {
  align: 'center',
  justify: 'start',
  wrap: 'nowrap',
  direction: 'row',
  alignContent: 'stretch',
  gutter: 1,
  flex: false,
};

Flex.displayName = 'Flex';

/**
 * @component
 */
export default withStyles(styles)(Flex);
