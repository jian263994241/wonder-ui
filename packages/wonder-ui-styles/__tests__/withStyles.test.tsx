import '@testing-library/jest-dom';
import * as React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { withStyles, createStyles, ClassKeysOfStyles } from '../src';

const styles = createStyles({
  root: {
    color: 'red'
  }
});

type Props = {
  options?: string;
  classes?: ClassKeysOfStyles<typeof styles>;
};

describe('withStyles', () => {
  it('default', () => {
    function Example_(props: Props) {
      const { classes } = props;

      return <div className={classes.root}>Example</div>;
    }

    const Example = withStyles(styles)(Example_);

    const renderer = ReactTestRenderer.create(<Example />);

    console.log(renderer.toJSON());
  });
});
