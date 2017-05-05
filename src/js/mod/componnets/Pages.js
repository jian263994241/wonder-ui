import React, {Component} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {Switch} from 'react-router-dom'

const SlidePage = ({className, location, action, children, noAnimate})=>{

  const slideLeft = {
    enter: 'page-from-right-to-center',
    leave: 'page-from-center-to-left'
  };

  const slideRight = {
    enter: 'page-from-left-to-center',
    leave: 'page-from-center-to-right'
  };


  let transitionName, transitionEnterTimeout, transitionLeaveTimeout;


  switch (action) {
    case 'PUSH':
      transitionName = slideLeft;
      transitionEnterTimeout = 500;
      transitionLeaveTimeout = 400;
      break;
    case 'POP':
      transitionName = slideRight;
      transitionEnterTimeout = 500;
      transitionLeaveTimeout = 400;
      break;
    case 'REPLACE':
      transitionName = noAnimation;
      transitionEnterTimeout = 10;
      transitionLeaveTimeout = 10;
      break;
  }

  let key = null;

  if(!noAnimate){
    key = location.pathname;
  }

  return (
    <CSSTransitionGroup
      transitionName={transitionName}
      component="div"
      transitionEnterTimeout={transitionEnterTimeout}
      transitionLeaveTimeout={transitionLeaveTimeout}
      className={className}
    >
      {React.cloneElement(children, {key, location})}
    </CSSTransitionGroup>
  );
}

export default class Pages extends Component {

  static uiName = 'Pages'

  static propTypes = {
    className: PropTypes.string,
    noAnimate: PropTypes.bool
  }

  render() {
    const {
      location,
      history,
      noAnimate,
      className,
      children
    } = this.props;

    const cls = classnames('pages', className);

    return (
      <SlidePage className={cls} location={location} action={history.action} noAnimate={noAnimate}>
        <Switch>
          {children}
        </Switch>
      </SlidePage>
    );
  }
}
