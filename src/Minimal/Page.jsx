import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StylePage} from './Styled';

export default class Views extends Component {

  render(){
    return (
      <StylePage {...this.props}/>
    )
  }
}
