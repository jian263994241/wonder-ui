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
    this.update();
  }

  componentDidMount() {
    this.update();
  }

  update() {
    const {visible} = this.props;
    const overLay = $(this.refs.overLay);
    if(visible){
      setTimeout(()=>{
        overLay.addClass('modal-overlay-visible');
      },16)
    }else{
      overLay.removeClass('modal-overlay-visible');
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
      'modal-overlay': type != 'popup',
      'popup-overlay': type === 'popup',
      'transparent':  (type === 'toast' || type === 'preloader'),
      'picker-modal-overlay': type === 'picker'
    });

    return (
      <div className={cls} ref="overLay" onTouchMove={preventScrolling} {...other}></div>
    );
  }
}
