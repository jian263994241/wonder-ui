import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkNoStyle } from '@wonder-ui/router';
import clsx from 'clsx';
import withStyles from '../withStyles';
import styles from './styles';
/**
 * UI Wrap react-router Link
 * @visibleName Link 链接
 */
const Link = React.forwardRef(function Link(props, ref){
  const { classes, className, ...rest } = props;
  return (<LinkNoStyle className={clsx(classes.root, className)} ref={ref} {...rest}/>)
});

Link.displayName = 'Link';

Link.propTypes = {
  /**
   * replace 
   */
  replace: PropTypes.bool,
  /**
   * default 'a'
   */
  component: PropTypes.element,
  /**
   * react-router Link to
   */
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.object,
      query: PropTypes.object
    })
  ])
};

export default withStyles(styles)(Link);

