import React, {Component, PureComponent} from 'react';
import Loader from '../SvgIcon/Loader';
import {StylePreloaderWrapper} from './Styled'

export default class ScrollPreloader extends PureComponent {

  static defaultProps = {
    show: true
  }

  render(){

    const {
      show,
      text
    } = this.props;

    return (
      <StylePreloaderWrapper show={show}>
        <Loader width="24" color="#999"/>
        {text}
      </StylePreloaderWrapper>
    )
  }
}
