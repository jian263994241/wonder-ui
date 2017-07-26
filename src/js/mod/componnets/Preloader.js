import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Modal from 'f7-modal'
import Mounter from 'rc-mounter'

export default class Preloader extends PureComponent {

  static propTypes = {
    text: PropTypes.string,
    logoType: PropTypes.string
  }

  render() {
    const {
      text,
      logoType,
      visible,
      children,
      ...other
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

    if(!text){
      return (
        <Mounter>
          <div className="preloader-indicator-overlay"></div>
          <div className="preloader-indicator-modal">{indicator}</div>
        </Mounter>
      );
    }

    return (
      <Modal
        type="preloader"
        visible={visible}
        closeByOutside={false}
        fixTop
        mounter
        {...other}
        >
        <div className="modal-inner">
          {indicator}
          <div className="modal-text" style={{marginTop: 3}}>{text}</div>
        </div>
      </Modal>
    );
  }
}
