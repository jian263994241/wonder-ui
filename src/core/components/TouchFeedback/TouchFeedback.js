import React from 'react';
import PropTypes from 'prop-types';
import elementAcceptingRef from '@wonder-ui/utils/elementAcceptingRef';
import classnames from '@wonder-ui/utils/classnames';

const TouchFeedback = (props)=>{
  const { 
    disabled,
    children,
    activeStyle,
    activeClassName
  } = props;
  const [active, setActive] = React.useState(false);

  const triggerEvent = (type, isActive, ev)=>{
    const eventType = `on${type}`;

    if (children.props[eventType]) {
      children.props[eventType](ev);
    }
    if (isActive !== active) {
      setActive(isActive);
    }
  };

  const onTouchStart = (e) => {
    triggerEvent('TouchStart', true, e);
  };

  const onTouchMove = (e) => {
    triggerEvent('TouchMove', false, e);
  };

  const onTouchEnd = (e) => {
    triggerEvent('TouchEnd', false, e);
  };

  const onTouchCancel = (e) => {
    triggerEvent('TouchCancel', false, e);
  };

  const onMouseDown = (e) => {
    // pc simulate mobile
    triggerEvent('MouseDown', true, e);
  };

  const onMouseUp = (e) => {
    triggerEvent('MouseUp', false, e);
  };

  const onMouseLeave = (e) => {
    triggerEvent('MouseLeave', false, e);
  };

  const events = disabled ? undefined : {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
  };

  const child = React.Children.only(children);

  if (!disabled && active) {
    let { style, className } = child.props;

    if (activeStyle !== false) {
      if (activeStyle) {
        style = {...style, ...activeStyle };
      }
      className = classnames(className, activeClassName);
    }

    return React.cloneElement(child, {
      className,
      style,
      ...events,
    });
  }

  return React.cloneElement(child, events);
}

TouchFeedback.defaultProps = {
  activeClassName: 'active-state',
}

TouchFeedback.propTypes = {
  disabled: PropTypes.bool,
  activeClassName: PropTypes.string,
  activeStyle: PropTypes.object,
  children: elementAcceptingRef
}

export default TouchFeedback;