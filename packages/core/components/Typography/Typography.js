import React from 'react';
import PropTypes from 'prop-types';
import capitalize from '@wonder-ui/utils/capitalize';
import clsx from 'clsx';
import styles from './styles';
import withStyles from '../withStyles';

/**
 * 使用活版印刷可以尽可能清晰、高效地呈现您的设计和内容
 * @visibleName Typography 文字排版
 */
const Typography = React.forwardRef(function Typography(props, ref) {
  const { 
    classes, 
    className, 
    color = 'inherit',
    component = 'div', 
    inline, 
    type, 
    ...rest 
  } = props;
  return React.createElement(component, {
    ref,
    className: clsx(
      classes.root, 
      classes[type],
      classes[`color${capitalize(color)}`],
      {
        [classes.inline]: inline,
      },
      className
    ),
    ...rest
  })
})

Typography.defaultProps = {
  component: 'span',
  type: 'default'
}

Typography.propTypes = {
  component: PropTypes.string,
  /**
   * @ignore
   */
  classes: PropTypes.object,
  /**
   * 样式类型
   */
  type: PropTypes.oneOf(['h1','h2','h3','h4','h5','h6','subtitle1','subtitle2','caption','default']).isRequired,
  /**
   * 是否为行内元素 display: inline-block
   */
  inline: PropTypes.bool,
  /**
   * 颜色
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'warning', 'info', 'success', 'error']),
};

Typography.displayName = 'Typography';

export default withStyles(styles)(Typography);