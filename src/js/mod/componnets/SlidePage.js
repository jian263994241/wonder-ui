import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import RouteTransition from './router-transition/RouteTransition'
import spring from 'react-motion/lib/spring';

export default class SlidePage extends Component {

  static uiName = 'SlidePage';


  static propTypes = {
    className: PropTypes.string,
    noAnimation: PropTypes.bool
  }

  static defaultProps = {
    noAnimation: false
  }

  render() {

    const {className, history, children, noAnimation, ...rest} = this.props;

    const { action, location } = history;

    const key = location.pathname;

    const state = location.state || {};

    const pageAnimation = {
      'slide-left': {
        atEnter: {
          offset: 100
        },
        atLeave: {
          offset: spring(-33, { stiffness: 330, damping: 33 })
        },
        atActive: {
          offset: spring(0, { stiffness: 330, damping: 33 })
        },
        mapStyles(styles) {
          return {
            transform: `translateX(${styles.offset}%)`
          };
        },
      },
      'slide-right': {
        atEnter: {
          offset: -33
        },
        atLeave: {
          offset: spring(102, { stiffness: 330, damping: 33 })
        },
        atActive: {
          offset: spring(0, { stiffness: 330, damping: 33 })
        },
        mapStyles(styles) {
          return {
            transform: `translateX(${styles.offset}%)`
          };
        }
      },
      'no': {
        atEnter: {},
        atLeave:{},
        atActive:{}
      }
    }

    let animationType = 'no';


    animationType = (()=>{
      if(action === 'REPLACE'){
        return 'no';
      }
      if(action === 'POP'){
        return 'slide-right';
      }
      if(action === 'PUSH'){
        return 'slide-left';
      }
    })();

    if(state.animation === 'push'){
      animationType = 'slide-left';
    }

    if(state.animation === 'back'){
      animationType = 'slide-right';
    }

    if(state.animation === 'no'){
      animationType = 'slide-right';
    }

    if(noAnimation){
      animationType = 'no';
    }

    return (
        <RouteTransition
          pathname={location.pathname}
          component={false}
          runOnMount={false}
          className="pages"
          {...pageAnimation[animationType]}
        >
        <div
          className={
            classnames({
              'page-transition': true,
              'slide-left' : (animationType === 'slide-left'),
              'slide-right' : (animationType === 'slide-right')
            })
          }>
            {React.cloneElement(children, {key, location})}
        </div>
      </RouteTransition>
    );
  }
}
