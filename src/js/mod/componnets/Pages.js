import React, {Component} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {Switch} from 'react-router-dom'

var detectBackOrForward = function() {
  var hashHistory = [window.location.hash];
  var historyLength = window.history.length;

  return function() {
    var hash = window.location.hash, length = window.history.length;
    var isBack = false;
    if (hashHistory.length && historyLength == length) {
      if (hashHistory[hashHistory.length - 2] == hash) {
        hashHistory = hashHistory.slice(0, -1);
        isBack = true;
      } else {
        hashHistory.push(hash);
        // onForward();
        isBack = false;
      }
    } else {
      hashHistory.push(hash);
      historyLength = length;
    }

    return isBack;
  }
};

const isBack = detectBackOrForward();

class SlidePage extends Component {

  render() {

    const {className, location, history, children, noAnimate} = this.props;

    const slideLeft = {
      enter: 'page-from-right-to-center',
      leave: 'page-from-center-to-left'
    };

    const slideRight = {
      enter: 'page-from-left-to-center',
      leave: 'page-from-center-to-right'
    };

    const pathname = location.pathname;

    let transitionName, transitionEnterTimeout, transitionLeaveTimeout, transitionEnter, transitionLeave;

    transitionEnter = transitionLeave = true;
    transitionName = slideLeft;
    transitionEnterTimeout = 500;
    transitionLeaveTimeout = 400;

    switch (history.action) {
      case 'PUSH':
        transitionName = slideLeft;
        break;
      case 'POP':
        if(isBack()){
          transitionName = slideRight;
        }else{
          transitionName = slideLeft;
        }
        break;
      default:
        transitionEnter = transitionLeave = false;
        break;
    }


    if(noAnimate){
      transitionEnter = transitionLeave = false;
    }

    const key = pathname;

    return (
      <CSSTransitionGroup
        transitionName={transitionName}
        component="div"
        transitionEnter={transitionEnter}
        transitionLeave={transitionLeave}
        transitionEnterTimeout={transitionEnterTimeout}
        transitionLeaveTimeout={transitionLeaveTimeout}
        className={className}
      >
        {React.cloneElement(children, {key, location})}
      </CSSTransitionGroup>
    );
  }
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
      <SlidePage className={cls} location={location} history={history} noAnimate={noAnimate}>
        <Switch>
          {children}
        </Switch>
      </SlidePage>
    );
  }
}
