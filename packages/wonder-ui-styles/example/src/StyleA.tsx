import * as React from 'react';
import { createUseStyles } from '../../dist';

const useStyles = createUseStyles({
  root: {
    color: 'red'
  }
});

export default function StyleA() {
  const classes = useStyles();

  return <div className={classes.root}>createUseStyles</div>;
}
