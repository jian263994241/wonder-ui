import React from 'react';

const warning = () => console.warn('Please render in <App/> ');

const AppContext = React.createContext({
  appRoot: React.createRef(null),
  events: {
    on: warning,
    once: warning,
    off: warning,
    emit: warning,
  },
});

export default AppContext;
