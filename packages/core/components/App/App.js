import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import clsx from 'clsx';
import Events from '@wonder-ui/utils/Events';
import useForkRef from '@wonder-ui/utils/useForkRef';
import decamelize from 'decamelize';

const defaultEvents = new Events();

/**
 * 创建一个App上下文.
 * @visibleName App 入口
 */
const App = React.forwardRef((props, ref) => {
  const { children, on, onPageInit, className, ...rest } = props;
  const rootRef = React.useRef(null);
  const handleRef = useForkRef(rootRef, ref);
  const appRef = React.useRef(null);

  if (!appRef.current) {
    const app = (appRef.current = {
      rootRef: rootRef,
      events: defaultEvents,
    });

    const events = { onPageInit };

    Object.keys(events).forEach((key) => {
      const eventKey = decamelize(key.replace('on', ''), '-');

      app.events.on(eventKey, events[key]);
    });
  }

  return (
    <AppContext.Provider value={appRef.current}>
      <div ref={handleRef} className={clsx('app-root', className)} {...rest}>
        {children}
      </div>
    </AppContext.Provider>
  );
});

App.propTypes = {
  /**
   * `Page组件`挂载的时候触发
   */
  onPageInit: PropTypes.func,
};

export default App;
