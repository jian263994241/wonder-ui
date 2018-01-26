import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './Styled';

export default class List extends Component {

  static childContextTypes = {
    mediaList: PropTypes.bool
  }

  getChildContext(){
    return {
      mediaList: this.props.mediaList
    }
  }

  render(){

    return <StyledList {...this.props}/>
  }
};
