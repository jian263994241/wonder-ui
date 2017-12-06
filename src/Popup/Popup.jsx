import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StylePopup} from './Styled';



export default class Popup extends Component {

  render(){

    return (
      <StylePopup overlay {...this.props}/>
    )
  }
}
