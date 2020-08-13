import React from 'react';
import RouterContext from './Context';
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

export default function useRouterContext() {
  const contextOverwrite = React.useContext(RouterContext) || {};

  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const parmas = useParams();

  return {
    history,
    location,
    match,
    parmas,
    ...contextOverwrite,
  };
}
