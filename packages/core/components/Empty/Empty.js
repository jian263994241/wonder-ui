import React from 'react';
import PropTypes from 'prop-types';
import EmptyIcon from './EmptyIcon';
import withStyles from '../styles/withStyles';
import clsx from 'clsx';

/**
 * @visibleName Empty 空状态
 */
const Empty = React.forwardRef(function Empty(props, ref) {
  const { 
    classes, 
    className,
    description = '暂无数据',
    image: Image = EmptyIcon,
    imageStyle,
    children,
    ...rest
  } = props;
  
  return (
    <div 
      className={clsx(classes.root, className)}
      ref={ref} 
      {...rest}
    >
      <Image style={imageStyle}/>
      <div className={classes.description}>{description}</div>
    </div>
  )
});

Empty.propTypes = {
  /**
   * 自定义描述内容
   */
  description: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]),
  image: PropTypes.element,
  imageStyle: PropTypes.object,
};

Empty.displayName = 'Empty';

export default withStyles(theme=>({
  root: {
    margin: 8,
    textAlign: 'center',
  },
  description: {
    ...theme.typography.caption,
    color: theme.palette.text.hint,
    padding: 0,
    margin: 0,
  }
}))(Empty);