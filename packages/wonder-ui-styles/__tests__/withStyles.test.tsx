import '@testing-library/jest-dom';
import * as React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import {
  withStyles,
  styled,
  createStyles,
  createUseStyles,
  ClassKeysOfStyles
} from '../src';

const styles = createStyles({
  root: {
    color: 'red'
  },
  body: {}
});

type Props = {
  options?: string;
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  className?: string;
};

describe('withStyles', () => {
  it('default', () => {
    function Example_(props: Props) {
      const { classes = {} } = props;

      return <div className={classes.root}>Example</div>;
    }

    const Example = withStyles(styles)(Example_);

    const useStyles = createUseStyles({
      root: {
        color: 'red'
      }
    });

    function Demo() {
      const clasess = useStyles();

      return <Example classes={{ root: clasess.root }} />;
    }

    const renderer = ReactTestRenderer.create(<Demo />);

    console.log(renderer.toJSON());
  });
});

describe('styled', () => {
  it('default', () => {
    function Example_(props: Props) {
      const { className } = props;

      return <div className={className}>Example</div>;
    }

    const Example = styled(Example_)({
      color: 'red'
    });

    const renderer = ReactTestRenderer.create(<Example />);

    console.log('styled', renderer.toJSON());
  });
});
