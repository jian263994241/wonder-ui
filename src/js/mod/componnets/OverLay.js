import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import $ from '../utils/dom'

export default class OverLay extends Component {

  static uiName = 'OverLay';

  static propTypes = {
    visible: PropTypes.bool,
    type: PropTypes.string
  }

  static defaultProps = {
    visible: false,
    type: 'modal'
  }

  componentDidUpdate(prevProps, prevState) {
    const {visible} = this.props;
    const overLay = $(this.refs.overLay);
    if(visible != prevProps.visible){
      if(visible){
        overLay.addClass('modal-overlay-visible');
      }else{
        overLay.removeClass('modal-overlay-visible');
      }
    }
  }

  render() {

    const {
      visible,
      type,
      onTouchMove,
      className,
      ...other
    } = this.props;

    const preventScrolling = (e) =>{
      e.preventDefault();
    };


    const cls = classnames({
      'modal-overlay': (type === 'modal' ||  type === 'actions' || type === 'popover'),
      'popup-overlay': type === 'popup',
      'picker-modal-overlay': type === 'picker',
      'modal-overlay-visible': visible
    });

    return (
      <div className={cls} ref="overLay" onTouchMove={preventScrolling} {...other}></div>
    );
  }
}
