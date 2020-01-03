import React from 'react';
import PropTypes from 'prop-types';
import BackButton from './BackButton';
import HeaderBar from '../HeaderBar';

const styles = {
  root: {
    position: 'sticky'
  }
}

const Navbar = React.forwardRef(function Navbar(props, ref){
  const {
    barLeft,
    barRight,
    showBackButton = true,
    style,
    title,
    ...rest
  } = props;

  return (
    <HeaderBar
      barLeft={
        <>
          {showBackButton && <BackButton/>}
          {barLeft}
        </>
      }
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
  showBackButton: PropTypes.bool
};

export default Navbar;