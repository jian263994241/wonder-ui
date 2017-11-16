import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import Mounter from 'rc-mounter';
import TransitionMotion from 'react-motion/lib/TransitionMotion';
import Motion from 'react-motion/lib/Motion';
import spring from 'react-motion/lib/spring';
import presets from 'react-motion/lib/presets';

import {StyleModal, StyleOverlay} from './Styled';

export default class Modal extends Component {

  static propTypes = {
    visible: PropTypes.bool,
    overlay: PropTypes.bool,
    onCancel: PropTypes.func,
  }

  constructor(props){
    super(props);

    this.state = {
      layers : []
    }

    this.defaultLayers = [
      {key: '.1', data: {type: 'modal'}},
      {key: '.2',  data: {type: 'overlay'}}
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
    return { x: spring(100, {...presets.noWobble, precision: 100}) }
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
    const {visible, children} = this.props;
    const preventScrolling = (e) =>{
      e.preventDefault();
    };
    return (
      <div>
        {
          interpolatedStyles.map(({key, style, data: {type}})=>{

            if(type === 'modal'){
              return <StyleModal key={key} style={{transform: `translate3d(0, ${style.x}%, 0)`}}> {children} </StyleModal>
            }
            if(type === 'overlay'){
              return <StyleOverlay key={key} style={{opacity: `${1 - style.x/100}`}} onClick={this.props.onCancel} onTouchMove={preventScrolling}/>
            }

          })
        }
      </div>
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
      <Mounter
        className={className}
        style={style}
      >
        <TransitionMotion
          defaultStyles={this.getDefaultStyles()}
          styles={this.getStyles()}
          willEnter={this.willEnter}
          willLeave={this.willLeave}
          ref="modal"
        >
          {this.renderModal}
        </TransitionMotion>
      </Mounter>
    )
  }
}
