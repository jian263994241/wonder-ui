import { Link as LinkNoStyle } from '@wonder-ui/router';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';

/**
 * UI Wrap react-router Link
 * @visibleName Link 链接
 */
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
}, {name: 'Link'})(function Link(props){
  const { classes, className, ...rest } = props;
  return (<LinkNoStyle className={clsx(classes.root, className)} {...rest}/>)
})

