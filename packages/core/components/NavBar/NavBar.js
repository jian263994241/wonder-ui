import React from 'react';
import PropTypes from 'prop-types';
import { useRouterContext } from '@wonder-ui/router';
import HeaderBar from '../HeaderBar';

const styles = {
  root: {
    position: 'fixed'
  }
};

const Navbar = React.forwardRef(function Navbar(props, ref){
  const {
    barLeft,
    barRight,
    showBack = true,
    style,
    title,
    ...rest
  } = props;

  const { routerStore = {} } = useRouterContext();
  const handleGoBack = React.useCallback(() => {
    routerStore.goBack ? routerStore.goBack () : window.history.back()
  }, []);

  return (
    <HeaderBar
      showBack={showBack}
      onBack={handleGoBack}
      barLeft={barLeft}
      barRight={barRight}
      bordered
      ref={ref}
      style={{...styles, ...style}}
      title={title}
      {...rest}
    />
  )
});

Navbar.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.node,
  barLeft: PropTypes.node,
  barRight: PropTypes.node,
  showBack: PropTypes.bool
};

export default Navbar;