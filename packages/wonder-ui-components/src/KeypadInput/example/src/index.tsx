import * as React from 'react';
import * as ReactDOM from 'react-dom';
import KeypadInput from '../../KeypadInput';

console.log(KeypadInput);

function App() {
  return (
    <div>
      <KeypadInput />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
