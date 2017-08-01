import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {Modal} from 'f7-modal'
import Mounter from 'rc-mounter'

export default class Preloader extends PureComponent {

  static propTypes = {
    logoType: PropTypes.string
  }

  render() {
    const {
      logoType,
      visible
    } = this.props;

    if(!visible) return null;

    let indicator;

    switch (logoType) {
      case 'kq':
        indicator = [
          <div className="preloader preloader-kq" key="logo-p1"></div>,
          <div className="logo" key="logo-p2"></div>
        ];
        break;
      default:
        indicator = <div className="preloader preloader-white"></div>;
    }

    const preventScrolling = (e) =>{
      e.preventDefault();
    };

    return (
      <Mounter>
        <div className="preloader-indicator-overlay" onTouchMove={preventScrolling}></div>
        <div className="preloader-indicator-modal">{indicator}</div>
      </Mounter>
    );

  }
}
