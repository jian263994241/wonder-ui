import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Modal from './Modal'

export default class Preloader extends PureComponent {

  static propTypes = {
    text: PropTypes.string,
    logoType: PropTypes.string
  }

  render() {
    const {
      text,
      logoType,
      children,
      ...other
    } = this.props;


    let textElement = text? <div className="modal-text">{text}</div> : null

    let indicator;

    switch (logoType) {
      case 'kq':
        indicator = [
          <div className="preloader preloader-kq" key="logo-p1"></div>,
          <div className="logo" key="logo-p2"></div>
        ];
        textElement = null;
        break;
      default:
        indicator = <div className="preloader preloader-white"></div>;
    }

    return (
      <Modal
        type="preloader"
        closeByOutside={false}
        fixTop
        mounter
        {...other}
        >
        <div className="modal-inner">
          {indicator}
          {textElement}
        </div>
      </Modal>
    );
  }
}
