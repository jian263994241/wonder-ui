import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import $ from '../utils/dom'
import Modal from './Modal'


export default class ActionsModal extends Component {

  static uiName = 'ActionsModal';


  static propTypes = {
    className: PropTypes.string,
    innerClassName: PropTypes.string,
    opened: PropTypes.bool
  }

  static ActionButton = ({bold, children, className, color, ...other})=>{
    const cls = classnames({
      'actions-modal-button': true,
      'actions-modal-button-bold': bold
    }, className, color? `color-${color}`: undefined);
    return (
      <div className={cls} {...other}>{children}</div>
    );
  }
  static ActionGroup = ({className, children, ...other})=>(
    <div className={classnames('actions-modal-group', className)} {...other}>{children}</div>
  )

  static ActionLabel = ({className, children, ...other})=>(
    <div className={classnames('actions-modal-label', className)} {...other}>{children}</div>
  )

  render() {

    const {
      className,
      children,
      ...other
    } = this.props;

    const cls = classnames('actions-modal', className);



    return (
      <Modal className={cls} {...other}>
        {children}
      </Modal>
    );
  }
}
