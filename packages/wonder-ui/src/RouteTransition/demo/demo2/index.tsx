import App from './app';
import { MemoryRouter } from 'react-router-dom-v6';
import { AliveScope } from 'react-activation';

export default () => (
  <MemoryRouter>
    <AliveScope>
      <App />
    </AliveScope>
  </MemoryRouter>
);
