import React from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigationType
} from 'react-router-dom-v6';
import { RouteTransition } from '@wonder-ui/core';
import KeepAlive from 'react-activation';

const PageA = React.lazy(() => import('./pageA'));
const PageB = React.lazy(() => import('./pageB'));

const Suspense: React.FC<{ children: React.ReactElement }> = ({ children }) => (
  <React.Suspense fallback={<>...</>}>{children}</React.Suspense>
);

export default function App() {
  const location = useLocation();
  const navigationType = useNavigationType();

  return (
    <RouteTransition
      pathname={location.pathname}
      reverse={navigationType !== 'PUSH'}
    >
      <Routes location={location}>
        <Route
          path="/"
          element={
            <KeepAlive cacheKey="UNIQUE_ID">
              <Suspense>
                <PageA />
              </Suspense>
            </KeepAlive>
          }
        />
        <Route
          path="/b"
          element={
            <Suspense>
              <PageB />
            </Suspense>
          }
        />
      </Routes>
    </RouteTransition>
  );
}
