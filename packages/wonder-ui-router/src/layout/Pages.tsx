import * as React from 'react';
import { withStyles } from '@wonder-ui/styles';

export default withStyles((theme) => {
  return {
    root: {
      ...theme.typography.body1,
      backgroundColor: theme.palette.background.default,
      width: '100%',
      height: '100%',
      position: 'absolute'
    }
  };
})(function Pages(props) {
  const { classes, children, ...rest } = props;

  return (
    <div className={classes.root} {...rest}>
      {children}
    </div>
  );
});
