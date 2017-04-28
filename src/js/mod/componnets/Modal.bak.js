import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {render} from 'react-dom'
import classnames from 'classnames'

const ModalButton = ({text, bold = true, onClick})=>{
  bold = bold ? 'modal-button-bold' : '';

  return (
    <div className={`modal-button ${bold}`} onClick={onClick}>{text}</div>
  );
};


class Modal extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
      modalStyle: {}
    }
  }

  static uiName = 'Modal'

  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    afterText: PropTypes.element,
    verticalButtons: PropTypes.bool,
    buttons: PropTypes.array,
    className: PropTypes.string,
  }

  static alert = (text, title, callback)=>{

    if(typeof title === 'function') {
      callback = arguments[1];
      title = undefined;
    }

    const buttons = [
      {
        text: '确定',
        bold: true,
        onClick: (e)=>{
          Modal.close();
          callback && callback(e);
        }
      }
    ]

    Modal.open(<Modal title={title} text={text} buttons={buttons}/>);

  }

  static open = (Elem)=>{
    const div = document.createElement('div');
    render(Elem, div);
    const overlays = div.querySelector('.overlays');
    document.body.append(overlays);
  }

  static close = ()=>{
    const overlays = document.querySelector('.overlays');

    document.querySelector('.overlays').remove();
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        show: true,
        modalStyle:{
          marginTop: - this.refs.modal.clientHeight/2
        }
      })
    }, 0);
  }

  render (){
    const {
      title,
      text,
      afterText,
      buttons,
      verticalButtons,
      className,
      style
    } = this.props;

    const noButtonsCss = !buttons || buttons.length === 0 ? 'modal-no-buttons' : '';
    const verticalButtonsCss = verticalButtons ? 'modal-buttons-vertical': '';
    const showCss = 'modal-in';
    const cssClass = classnames('modal', verticalButtonsCss, noButtonsCss, className);

    let styles = Object.assign({display:'block'}, this.state.modalStyle, style);

    let cls , buttonGroup;
    if(this.state.show){
      cls = classnames(cssClass, showCss);
    }else{
      cls = cssClass;
    }

    const createButtons = (item, index)=>(
      <ModalButton text={item.text} bold={item.bold} onClick={item.onClick} key={`modal-button-${index}`}/>
    )

    if(noButtonsCss === 'modal-no-buttons'){
      buttonGroup = null;
    }else{
      buttonGroup = (
        <div className={`modal-buttons modal-buttons-${buttons.length}`}>
          {buttons.map(createButtons)}
        </div>
      )
    }

    return (
      <div className="overlays">
        <div className="modal-overlay modal-overlay-visible"></div>
        <div className={cls} style={styles} ref="modal">
          <div className="modal-inner">
            <div className="modal-title">{title}</div>
            <div className="modal-text">{text}</div>
            {afterText}
          </div>
          {buttonGroup}
        </div>
      </div>
    )
  }
}


class Alert extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: true
    }
  }

  static uiName = 'Modal.Alert'

  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
  }

  render() {
    const {
      title = '',
      text,
      onClick
    } = this.props;

    const buttons = [
      {
        text: '确定',
        bold: true,
        onClick: (e)=>{
          this.setState({
            show : false
          },()=>{
            onClick && onClick(e);
          });
        }
      }
    ]
    if(!this.state.show){
      return null;
    }

    return (
      <Modal title={title} text={text} buttons={buttons}/>
    );
  }
}

export default Modal;
