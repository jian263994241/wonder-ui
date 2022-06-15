import {
  Routes,
  Route,
  useLocation,
  useNavigationType
} from 'react-router-dom-v6';
import { RouteTransition } from '@wonder-ui/core';

import PageA from './pageA';
import PageB from './pageB';

export default function App() {
  const location = useLocation();
  const navigationType = useNavigationType();

  return (
    <RouteTransition
      pathname={location.pathname}
      reverse={navigationType !== 'PUSH'}
    >
      <Routes location={location}>
        <Route path="/" element={<PageA />} />
        <Route path="/b" element={<PageB />} />
      </Routes>
    </RouteTransition>
  );
}
