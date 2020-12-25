import * as React from 'react';
import { withStyles } from '@wonder-ui/styles';

export default withStyles((theme) => {
  return {
    '@global': {
      'html, body, #root': {
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
        backgroundColor: 'transparent',
        boxSizing: 'border-box'
      }
    },
    root: {
      ...theme.typography.body1,
      backgroundColor: theme.palette.background.default,
      width: '100%',
      height: '100%',
      position: 'absolute',
      overflow: 'hidden'
    }
  };
})(function View(props) {
  const { classes, children, ...rest } = props;

  return (
    <div className={classes.root} {...rest}>
      {children}
    </div>
  );
});
