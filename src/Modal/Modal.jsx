import React, {Component, createElement} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import Mounter from 'rc-mounter';
import TransitionMotion from 'react-motion/lib/TransitionMotion';
import spring from 'react-motion/lib/spring';
import presets from 'react-motion/lib/presets';

import {StyleModal, StyleOverlay} from './Styled';

export default class Modal extends Component {

  static propTypes = {
    visible: PropTypes.bool,
    overlay: PropTypes.bool,
    fade: PropTypes.bool,
    onCancel: PropTypes.func,
  }

  constructor(props){
    super(props);

    this.state = {
      layers : []
    }

    this.defaultLayers = [
      {
        key: '.1',
        data: {
          component: StyleModal,
          getProps : ({className, children})=>{
            return { className, children }
          },
          mapStyle: (x, style)=>{
            return {...style, transform: `translate3d(0, ${x}%, 0) scale(1)`}
          }
        }
      },
      {
        key: '.2',
        data: {
          component: StyleOverlay,
          getProps: () => {
            return {
              onClick: props.onCancel,
              onTouchMove: e=>e.preventDefault()
            }
          },
          mapStyle : (x)=>{
            return {opacity: `${1 - x/100}`}
          }
        }
      }
    ];

    if(props.visible){
      this.state.layers = this.defaultLayers;
    }

  }

  getDefaultStyles = ()=>{
    const {visible} = this.props;
    return this.state.layers.map((layer)=>{
      return {
        ...layer,
        style: { x: 100 }
      }
    })
  }

  getStyles = ()=>{

    const {visible, overlay} = this.props;

    return this.state.layers.filter(({data:{type}})=>{
      if(type === 'overlay' && !overlay ){
        return false;
      }
      return true;
    }).map((layer)=>{
      return {
        ...layer,
        style: { x: spring(0, presets.noWobble)}
      }

    })

  }

  willEnter = ()=>{
    return { x: 100 }
  }

  willLeave=()=>{
    return { x: spring(100, {...presets.noWobble, precision: 50}) }
  }

  getModal = ()=>{
    return findDOMNode(this.refs.modal);
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.visible != this.props.visible){
      if(!nextProps.visible){
        this.closeModal();
      }else{
        this.openModal();
      }
    }
  }

  openModal = ()=>{
    this.setState({
      layers : this.defaultLayers
    })
  }

  closeModal = ()=>{
    this.setState({layers: []});
  }

  renderModal = interpolatedStyles => {
    const Fragment = React.Fragment || 'div';
    return (
      <Fragment>
        {
          interpolatedStyles.map(({key, style: {x}, data: {component, getProps, mapStyle}})=>{
            return createElement(component,  {key, style: mapStyle(x), ...getProps(this.props)})
          })
        }
      </Fragment>
    )
  }

  render() {
    const {
      className,
      style,
      inline,
      children,
    } = this.props;

    return inline ? (
      <div className={className} style={style} ref="modal">{children}</div>
    ):(
      <Mounter ref="modal">
        <TransitionMotion
          defaultStyles={this.getDefaultStyles()}
          styles={this.getStyles()}
          willEnter={this.willEnter}
          willLeave={this.willLeave}
        >
          {this.renderModal}
        </TransitionMotion>
      </Mounter>
    )
  }
}
