import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Icon extends Component {

  static uiName = 'Icon'

  static propTypes = {
    type: PropTypes.string.isRequired
  }

  render() {
    const {
      type
    } = this.props;

    return (
      <span className={`icon icon-${type}`}></span>
    );
  }
}
