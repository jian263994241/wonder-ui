import React, {Component} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class SlidePage extends Component {

  static uiName = 'SlidePage';

  static propTypes = {
    className: PropTypes.string,
    noAnimate: PropTypes.bool
  }

  static defaultProps = {
    noAnimate: false
  }

  history = {
    index: -1,
    path: []
  }

  popType = undefined;

  pushHistory = (pathname) =>{
    const {path, index} = this.history;
    path.splice(index + 1);
    path.push(pathname);
    this.history.index = index + 1;
  }

  popHistory = (pathname) =>{
    const {path, index} = this.history;
    let popType;
    if(pathname === path[index - 1]){
      this.history.index = index - 1;
      popType = 'back';
    }else if(pathname === path[index + 1]){
      this.history.index = index + 1;
      popType = 'forward';
    }else{
      popType = undefined;
    }
    return popType;
  }

  componentDidMount() {
    const {history} = this.props;
    const pathname = history.location.pathname;
    this.pushHistory(pathname);
  }

  componentWillReceiveProps(nextProps) {
    const {history} = this.props;
    const pathname = history.location.pathname;

    if(history.action === 'PUSH'){
      this.pushHistory(pathname);
    }else{
      this.popType = this.popHistory(pathname);
    }
  }

  render() {

    const {className, history, children, noAnimate, ...other} = this.props;

    const slideLeft = {
      enter: 'page-from-right-to-center',
      leave: 'page-from-center-to-left'
    };

    const slideRight = {
      enter: 'page-from-left-to-center',
      leave: 'page-from-center-to-right'
    };

    const location = history.location;
    const pathname = location.pathname;

    let transitionName, transitionEnterTimeout, transitionLeaveTimeout, transitionEnter, transitionLeave;

    transitionEnter = transitionLeave = true;
    transitionName = slideLeft;
    transitionEnterTimeout = 500;
    transitionLeaveTimeout = 400;

    const popType = this.popType;

    switch (history.action) {
      case 'PUSH':
        transitionName = slideLeft;
        break;
      case 'POP':
        if(popType === 'back'){
          transitionName = slideRight;
        }else if(popType === 'forward'){
          transitionName = slideLeft;
        }else{
          transitionEnter = transitionLeave = false;
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
        className={classnames('pages', className)}
      >
        {React.cloneElement(children, {key, location})}
      </CSSTransitionGroup>
    );
  }
}
