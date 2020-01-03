import React from 'react';
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

export default withStyles(styles)(Link);

