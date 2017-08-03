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
      type,
      className,
      ...rest
    } = this.props;

    return (
      <span className={classnames('icon', `icon-${type}`, className)} {...rest}></span>
    );
  }
}
