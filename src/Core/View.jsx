import React, {Component, Children, createElement} from 'react';
import PropTypes from 'prop-types';
import {StyledView} from './Styled';

export default class View extends Component {

  render(){
    return (
      <StyledView {...this.props}/>
    )
  }
}
