import React from 'react';
import PropTypes from 'prop-types';
import BackButton from './BackButton';
import HeaderBar from '../HeaderBar';
import Slot from '../Slot';

const Navbar = React.forwardRef(function Navbar(props, ref){
  const {
    title,
    classes,
    barLeft,
    barRight,
    showBackButton = true,
    ...rest
  } = props;

  return (
    <HeaderBar
      bordered
      spacing={0}
      ref={ref}
      classes={classes}
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