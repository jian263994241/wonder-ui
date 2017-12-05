import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleView} from './Styled';


export default class View extends Component {

  render(){
    const {
      ...rest
    } = this.props;

    return (
      <StyleView {...rest}/>
    )
  }
}
