import React from 'react';
import { Link as LinkNoStyle } from '@wonder-ui/router';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

/**
 * UI Wrap react-router Link
 * @visibleName Link 链接
 */

const Link = React.forwardRef(function Link(props, ref){
  const { classes, className, ...rest } = props;
  return (<LinkNoStyle className={clsx(classes.root, className)} ref={ref} {...rest}/>)
});

Link.displayName = 'Link';

export default withStyles({
  root: {
    textDecoration: 'none',
    outline: 'none',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    appearance: 'none',
    color: 'inherit',
    fontSize: 'inherit',
    background: 'transparent',
    WebkitTapHighlightColor: 'transparent',
    '&[disabled]': {
      pointerEvents: 'none',
      cursor: 'not-allowed'
    }
  }
})(Link);

