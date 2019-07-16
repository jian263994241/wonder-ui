import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyledButtonsRow} from './Styled';


export default class ButtonsRow extends Component {

  static propTypes = {

    /**
     * 设置为圆角
     */
    round: PropTypes.bool
  }

  static defaultProps = {
    round: undefined
  }

  render(){
    return (
      <StyledButtonsRow {...this.props}/>
    )
  }
}
