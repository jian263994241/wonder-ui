import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnimatedSwitch from 'react-router-transition/lib/AnimatedSwitch';
import spring from 'react-motion/lib/spring';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';

const StylePages = styled(AnimatedSwitch) `
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
  >div{
    width: 100%;
    height: 100%;
    position: absolute;
    &::after{
      position: absolute;
      right: 100%;
      top: 0;
      width: 16px;
      height: 100%;
      background: -webkit-linear-gradient(left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0.01) 50%, rgba(0,0,0,0.2) 100%);
      background: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0.01) 50%, rgba(0,0,0,0.2) 100%);
      z-index: -1;
      content: '';
      display: ${props=>props.shadow ? 'block': 'none'};
    }
    &:nth-child(1){
      z-index: ${props=>props.reverse? 2 : 1};
    }
    &:nth-child(2){
      z-index: ${props=>props.reverse? 1 : 2};
    }
  }
`

const pageAnimation = {
  'slide-left': {
    atEnter: {
      offset: 100
    },
    atLeave: {
      offset: spring(-33, { stiffness: 220, damping: 22, precision: 0.1 })
    },
    atActive: {
      offset: spring(0, { stiffness: 330, damping: 33, precision: 0.1 })
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
      offset: spring(102, { stiffness: 330, damping: 33, precision: 0.1 })
    },
    atActive: {
      offset: spring(0, { stiffness: 220, damping: 22, precision: 0.1 })
    },
    mapStyles(styles) {
      return {
        transform: `translateX(${styles.offset}%)`
      };
    }
  },
  'empty': {
    atEnter: {},
    atLeave:{},
    atActive:{}
  }
}

class Pages extends Component {

  static propTypes = {
    noAnimation: PropTypes.bool,
    shadow: PropTypes.bool
  }

  static defaultProps = {
    noAnimation: false,
    shadow: true,
  }

  render(){
    const {className, history, children, noAnimation, shadow, ...rest} = this.props;

    const { action, location } = history;

    const key = location.pathname;

    const state = location.state || {};

    const animationType = (()=>{
      if(noAnimation || action === 'REPLACE' || state.animation === null){
        return 'empty';
      }
      if(action === 'POP' || state.animation === 'back'){
        return 'slide-right';
      }
      if(action === 'PUSH' || state.animation === 'push'){
        return 'slide-left';
      }
      return 'empty';
    })();

    return (
      <StylePages
        runOnMount={false}
        reverse={animationType==='slide-right'}
        shadow={shadow}
        {...pageAnimation[animationType]}
      >
        {children}
      </StylePages>
    );
  }
}

export default withRouter(Pages);
