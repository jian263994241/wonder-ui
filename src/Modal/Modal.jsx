import React, {Component, createElement} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import Mounter from 'rc-mounter';
import TransitionMotion from 'react-motion/lib/TransitionMotion';
import spring from 'react-motion/lib/spring';
import presets from 'react-motion/lib/presets';

import {PopupModal, StyleModal, StyleOverlay} from './Styled';

export default class Modal extends Component {

  static propTypes = {
    visible: PropTypes.bool,
    overlay: PropTypes.bool,
    overlayStyle: PropTypes.object,
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
        key: 'popup',
        data: {
          component: PopupModal,
          getProps : ({className, children})=>{
            return { className, children }
          },
          mapStyle: (x, style)=>{
            return {...style, transform: `translate3d(0, ${x}%, 0) scale(1)`}
          }
        }
      },
      {
        key: 'modal',
        data: {
          component: StyleModal,
          getProps : ({className, children})=>{
            return { className, children }
          },
          mapStyle: (x)=>{
            const {style} = this.props;
            return {
              ...style,
              transform: `translate3d(-50%, -50%, 0) scale(${x/100 * 0.181 + 1})`,
              opacity: `${1 - x/100}`
            }
          }
        }
      },
      {
        key: 'overlay',
        data: {
          component: StyleOverlay,
          getProps: ({onCancel}) => {
            return {
              onClick: onCancel,
              onTouchMove: e=>e.preventDefault()
            }
          },
          mapStyle : (x)=>{
            const {overlayStyle} = this.props;
            return {...overlayStyle, opacity: `${1 - x/100}`}
          }
        }
      }
    ];



  }

  componentDidMount(){
    if(this.props.visible){
      this.setState({
        layers: this.defaultLayers
      })
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

    const {visible, overlay, fade} = this.props;

    return this.state.layers.filter(({key})=>{
      if(key === 'overlay' && !overlay ){
        return false;
      }
      if(key === 'modal' && !fade ){
        return false;
      }
      if(key === 'popup' && fade ){
        return false;
      }
      return true;
    }).map((layer)=>{
      return {
        ...layer,
        style: { x: spring(0)}
      }

    })

  }

  willEnter = ()=>{
    return { x: 100 }
  }

  willLeave = ()=>{
    return { x: spring(100, {...presets.stiff, precision: 0.1 }) }
  }

  didLeave = ({key})=>{
    const {didLeave} = this.props;
    if(key === 'popup' || key === 'modal'){
      didLeave && setTimeout(didLeave, 0);
    }
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
      children
    } = this.props;

    return inline ? (
      <div className={className} style={style} ref="modal">{children}</div>
    ):(
      <Mounter>
        <div ref="modal">
          <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            styles={this.getStyles()}
            willEnter={this.willEnter}
            willLeave={this.willLeave}
            didLeave={this.didLeave}
          >
            {this.renderModal}
          </TransitionMotion>
        </div>
      </Mounter>
    )
  }
}
