import * as React from 'react';
import {
  useHistory,
  useRouteMatch,
  useLocation as useLocation_,
} from 'react-router';
import { addQuery, stripQuery } from '../utils';

export const useLocation = ({ inPage } = {}) => {
  const matched = useRouteMatch() || {};
  const location = useLocation_();
  const locRef = React.useRef(location);

  addQuery(location);

  if (inPage) {
    return React.useMemo(() => {
      matched.isExact && (locRef.current = location);
      return locRef.current;
    }, [matched, location]);
  }

  return location;
};

export const useLocationExact = () => {
  return useLocation({ inPage: true });
};

export const usePageEffect = (callback, vars = []) => {
  try {
    const matched = useRouteMatch() || {};

    React.useEffect(() => {
      if (matched.isExact) {
        return callback();
      }
    }, [matched.isExact, ...vars]);
  } catch (e) {
    console.error(e);
  }
};

export const useTitle = (title) => {
  usePageEffect(() => {
    if (window.setPageTitle) {
      window.setPageTitle(title);
    } else if (window.KQB && window.KQB.Env.iOS && window.KQB.Env.Android) {
      window.KQB.native('setPageTitle', { title });
    } else {
      document.title = title;
    }
  }, [title]);
};

//Will remove
export const usePageInit = usePageEffect;

export const useNavigation = () => {
  const history = useHistory();

  const push = (loc, state) => {
    history.push(stripQuery(loc), state);
  };
  const replace = (loc, state) => {
    history.replace(stripQuery(loc), state);
  };

  const goBack = () => {
    history.goBack();
  };

  const goForward = () => {
    history.goForward();
  };
  return {
    push,
    replace,
    goBack,
    goForward,
  };
};
