import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { RouterProvider } from '../Context';

export default function SyncRouterStore(props) {
  const { value } = props;
  const { routerStore = {} } = value;
  const history = useHistory();
  const location = useLocation();

  React.useEffect(()=>{
    if(routerStore.__initial){
      routerStore.__initial(history);
    }
  }, [routerStore]);

  if(routerStore.__updateLocation){
    routerStore.__updateLocation(location);
  }

  return (
    <RouterProvider value={value}>
      {props.children}
    </RouterProvider>
  )
}

SyncRouterStore.propTypes = {
  value: PropTypes.object
};