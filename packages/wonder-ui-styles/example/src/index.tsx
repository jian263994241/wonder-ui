import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StyleA from './StyleA';
import StyleB from './StyleB';
import { createUseStyles } from '../../dist';

const useStyles = createUseStyles({
  root: {
    color: 'blue'
  }
});

function App() {
  const classes = useStyles();

  return (
    <div>
      <StyleA />
      <StyleB classes={{ root: classes.root }} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
