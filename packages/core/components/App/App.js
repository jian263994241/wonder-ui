import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import clsx from 'clsx';

/**
 * 创建一个App上下文.
 * @visibleName App 入口
 */
const App = React.forwardRef((props, ref) => {
  const { children, on, onPageInit, className, ...rest } = props;

  const events = { onPageInit };

  return (
    <AppContext.Provider value={{ events }}>
      <div ref={ref} className={clsx('app-root', className)} {...rest}>
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
