import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyledCol } from './Styled';

export default class GridCol extends Component {

  static propTypes = {
    /**
     * 格子宽度: 10, 20, 25, 30, 35 ...... 100
     */
    width: PropTypes.number.isRequired
  }

  static contextTypes = {
    gutter: PropTypes.number,
  }

  render(){

    return (
      <StyledCol gutter={this.context.gutter} {...this.props}/>
    )
  }
}
