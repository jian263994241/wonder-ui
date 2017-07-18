import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Modal from './Modal'


export default class ActionsModal extends Component {

  static uiName = 'ActionsModal';

  render() {

    const {
      children,
      ...other
    } = this.props;

    return (
      <Modal type="actions" fixTop={false} {...other}> {children} </Modal>
    );
  }
}


ActionsModal.ActionButton = function({bold, children, className, color, ...other}){
  const cls = classnames({
    'actions-modal-button': true,
    'actions-modal-button-bold': bold
  }, className, color? `color-${color}`: undefined);
  return (
    <div className={cls} {...other}>{children}</div>
  );
}

ActionsModal.ActionGroup = function({className, children, ...other}){
  return (
    <div className={classnames('actions-modal-group', className)} {...other}>{children}</div>
  );
}

ActionsModal.ActionLabel = function({className, children, ...other}){
  return (
    <div className={classnames('actions-modal-label', className)} {...other}>{children}</div>
  );
}
