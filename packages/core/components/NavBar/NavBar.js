import React from 'react';
import PropTypes from 'prop-types';
import BackButton from './BackButton';
import HeaderBar from '../HeaderBar';

const Navbar = React.forwardRef(function Navbar(props, ref){
  const {
    title,
    barLeft,
    barRight,
    showBackButton = true,
    ...rest
  } = props;

  return (
    <HeaderBar
      bordered
      ref={ref}
      title={title}
      barRight={barRight}
      barLeft={
        <>
          {showBackButton && <BackButton/>}
          {barLeft}
        </>
      }
      {...rest}
    />
  )
});

Navbar.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.node,
  barLeft: PropTypes.node,
  barRight: PropTypes.node,
  showBackButton: PropTypes.bool
};

export default Navbar;