import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyledRow } from './Styled';

export default class GridRow extends Component {

  static propTypes = {
    /**
     * 格子间距 默认: 15
     */
    gutter: PropTypes.number.isRequired
  }

  static extend = StyledRow.extend

  static childContextTypes = {
    gutter: PropTypes.number
  }

  static defaultProps = {
    gutter: 15
  }

  getChildContext = ()=>({
    gutter: this.props.gutter
  })

  componentDidMount(){

  }

  render(){

    return (
      <StyledRow {...this.props}/>
    )
  }
}
