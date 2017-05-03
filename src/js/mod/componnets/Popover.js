import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import $ from '../utils/dom'

import Modals from './Modals'

export default class Popover extends Component {

  static uiName = 'Popover';

  static propTypes = {
    className: PropTypes.string
  }

  render() {

    const {
      className,
      children,
      ...other
    } =  this.props;

    const cls = classnames('popover', className);

    return (
      <div className="popover" {...other} ref="Popover">
        <div className="popover-inner">
          {children}
        </div>
      </div>
    );
  }
}
