import * as React from 'react';
import {
  createHashHistory,
  createBrowserHistory,
  BrowserHistoryOptions,
  HashHistoryOptions
} from 'history';
import { Router as RRouter, Route } from 'react-router';
import RouterConfig from './RouterConfig';

export interface RouterProps {
  children?: React.ReactNode;
  type?: 'hash' | 'browser';
}

export default function Router(
  props:
    | (RouterProps & HashHistoryOptions)
    | (RouterProps & BrowserHistoryOptions)
) {
  const { children, type = 'hash' } = props;

  const history = React.useMemo(() => {
    if (type === 'browser') {
      return createBrowserHistory({ window: props.window });
    }

    return createHashHistory({ window: props.window });
  }, []);

  const [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <RRouter
      navigator={history}
      location={state.location}
      action={state.action}
    >
      <RouterConfig />
    </RRouter>
  );
}
