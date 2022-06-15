---
mobile: true
toc: menu
nav:
  path: /components
group:
  path: /layout
  title: 布局
  order: 1
---

# RouteTransition 页面过度

仿iOS页面过度效果, 需要结合 `react-router-dom` 使用的,

### 基本使用

案例使用的 `react-router-dom@6` 版本

```tsx | pure
import { Page, RouteTranstion } from '@wonder-ui/core';
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
  useNavigationType,
  Link
} from 'react-router-dom';

function PageA() {
  return (
    <Page>
      <Link to="/b">Page</Link>
    </Page>
  );
}

function PageB() {
  return <Page>PageB</Page>;
}

function App() {
  const location = useLocation();
  const navigationType = useNavigationType();

  return (
    <RouteTranstion
      pathname={location.pathname}
      reverse={navigationType !== 'PUSH'}
    >
      <Routes location={location}>
        <Route path="/" element={<PageA />} />
        <Route path="/b" element={<PageB />} />
      </Routes>
    </RouteTranstion>
  );
}

export default () => (
  <HashRouter>
    <App />
  </HashRouter>
);

```

### Router异步加载 & 持久页面

使用 `React.lazy`  和 `react-activation` 实现

```tsx | pure
import React from 'react';
import KeepAlive, { AliveScope } from 'react-activation';

const Main = React.lazy(() => import('./pages/main'));
const Result = React.lazy(() => import('./pages/result'));

const Suspense: React.FC<{ children: React.ReactElement }> = ({ children }) => (
  <React.Suspense fallback={<>...</>}>{children}</React.Suspense>
);

//app
function App() {
  const location = useLocation();
  const navigationType = useNavigationType();

  return (
    <RouteTranstion
      pathname={location.pathname}
      reverse={navigationType !== 'PUSH'}
    >
      <Routes location={location}>
        <Route
          path="/"
          element={
            <KeepAlive cacheKey="UNIQUE_ID">
              <Suspense>
                <Main />
              </Suspense>
            </KeepAlive>
          }
        />
        <Route
          path="/result"
          element={
            <Suspense>
              <Result />
            </Suspense>
          }
        />
      </Routes>
    </RouteTranstion>
  );
}

// index
const root = ReactDOMClient.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <HashRouter>
      <AliveScope>
        <App />
      </AliveScope>
    </HashRouter>
  </React.StrictMode>
);
```

<API src="./RouteTransition.tsx"></API>
