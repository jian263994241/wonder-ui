import '@testing-library/jest-dom';
import * as React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { withStyles, createStyles, ClassKeysOfStyles } from '../src';

const styles = createStyles({
  root: {
    color: 'red'
  },
  body: {}
});

type Props = {
  options?: string;
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
};

describe('withStyles', () => {
  it('default', () => {
    function Example_(props: Props) {
      const { classes = {} } = props;

      return <div className={classes.root}>Example</div>;
    }

    const Example = withStyles(styles)(Example_);

    const renderer = ReactTestRenderer.create(
      <Example classes={{ root: 'ddd' }} />
    );

    console.log(renderer.toJSON());
  });
});
