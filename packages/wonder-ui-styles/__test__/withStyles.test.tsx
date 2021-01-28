import * as React from 'react';
import { render } from '@testing-library/react';
import { createStyles, ClassKeysOfStyles, withStyles } from '../src';

describe('withStyles', () => {
  test('default use', () => {
    const styles = createStyles({
      root: {
        color: 'red'
      },
      body: {
        color: 'blue'
      }
    });

    interface TestProps {
      classes?: ClassKeysOfStyles<typeof styles>;
    }

    function TestComponent(props: TestProps) {
      return null;
    }

    const StyledComponent = withStyles(styles)(TestComponent);

    render(<StyledComponent classes={{ body: 'test' }} />);
  });
});
