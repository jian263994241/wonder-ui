import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mountedOutside} from '../utils/mix'
import $ from '../utils/dom'

export default class Preloader extends Component {

  static uiName = 'Preloader';

  static propTypes = {
    className: PropTypes.string,
    show: PropTypes.bool,
    base: PropTypes.bool,
  }

  static defaultProps = {
    base: false
  }

  render() {
    const {
      show,
      base
    } = this.props;

    if(!show) return null;

    const cls = classnames('preloader', {
      'preloader-white': base,
      'preloader-kq': !base
    });

    return (
      <div>
        <div className="preloader-indicator-overlay"></div>
        <div className="preloader-indicator-modal">
          <div className={cls}></div>
          {!base && <i className="logo"></i>}
        </div>
      </div>
    );
  }
}
