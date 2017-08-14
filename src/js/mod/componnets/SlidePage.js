import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import store from 'store2'

import RouteTransition from './router-transition/RouteTransition'
import spring from 'react-motion/lib/spring';

export default class SlidePage extends Component {

  static uiName = 'SlidePage';


  static propTypes = {
    className: PropTypes.string,
    noAnimate: PropTypes.bool
  }

  static defaultProps = {
    noAnimate: false
  }


  popType = undefined;

  pushHistory = (pathname) =>{
    const {path, index} = this.history;
    if(path[path.length-1] === pathname) return ;
    path.splice(index + 1);
    path.push(pathname);
    this.history.index = index + 1;
    this.store.set('SlidePage', this.history);
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
    this.store.set('SlidePage', this.history);
    return popType;
  }

  componentDidMount() {
    const {history, location} = this.props;
    const pathname = history.location.pathname;

    const key = history.location.key || '.0';
    this.store = store.namespace(window.location.pathname + key).session;

    this.history = this.store.get('SlidePage') || {
      index: -1,
      path: []
    }

    if(history.action === 'POP'){
      this.popHistory(pathname);
    }else{
      this.pushHistory(pathname);
    }


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

    const {className, history, children, noAnimate, ...rest} = this.props;

    const { action, location } = history;

    const key = location.pathname;

    const slideLeft = {
      atEnter: {
        offset: 100,
        index: 1,
      },
      atLeave: {
        offset: spring(-33, { stiffness: 330, damping: 33 }),
        index: 0
      },
      atActive: {
        offset: spring(0, { stiffness: 330, damping: 33 }),
        index: 1
      },
      mapStyles(styles) {
        return {
          transform: `translateX(${styles.offset}%)`,
          zIndex: styles.index
        };
      },
    };

    const slideRight = {
      atEnter: {
        offset: -33,
        opacity: 0,
        index: 0
      },
      atLeave: {
        offset: spring(102, { stiffness: 330, damping: 35 }),
        index: 1
      },
      atActive: {
        offset: spring(0, { stiffness: 330, damping: 33 }),
        index: 1
      },
      mapStyles(styles) {
        return {
          transform: `translateX(${styles.offset}%)`,
          zIndex: styles.index
        };
      },
    };

    let animateConfig;

    const emptyAnimate = {
      atEnter: {},
      atLeave:{},
      atActive:{}
    };

    animateConfig = (()=>{
      if(action === 'REPLACE' || noAnimate){
        return emptyAnimate;
      }
      if(action === 'POP'){
        return slideRight;
      }
      if(action === 'PUSH'){
        return slideLeft;
      }
    })();


    if(noAnimate){
      animateConfig = emptyAnimate
    }
    return (
        <RouteTransition
          pathname={location.pathname}
          component={false}
          runOnMount={false}
          className="pages"
          {...animateConfig}
        >
        <div className="page-transition">
            {React.cloneElement(children, {key, location})}
        </div>
      </RouteTransition>
    );
  }
}
