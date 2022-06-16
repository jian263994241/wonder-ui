import {
  Routes,
  Route,
  useLocation,
  useNavigationType
} from 'react-router-dom-v6';
import { RouteTransition } from '@wonder-ui/core';

import PageA from './pageA';
import PageB from './pageB';
import PageC from './pageC';

export default function App() {
  const location = useLocation();
  const navigationType = useNavigationType();

  return (
    <RouteTransition reverse={navigationType === 'POP'}>
      <Routes location={location}>
        <Route path="/" element={<PageA />} />
        <Route path="/b" element={<PageB />} />
        <Route path="/c" element={<PageC />} />
      </Routes>
    </RouteTransition>
  );
}
