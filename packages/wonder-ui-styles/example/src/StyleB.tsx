import * as React from 'react';
import { withStyles, createStyles, ClassKeysOfStyles } from '@wonder-ui/styles';

const styles = createStyles({
  root: {
    color: 'red'
  },
  body: {}
});

type Props = {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
};

function Example_Origin(props: Props) {
  const { classes = {} } = props;

  return <div className={classes.root}>withStyles</div>;
}

export default withStyles(styles)(Example_Origin);
