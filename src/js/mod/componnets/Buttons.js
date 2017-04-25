import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class Button extends Component {

  static uiName = 'Button'

  static defaultProps = {
    fill: true
  }

  static propTypes = {
    className: PropTypes.string,
    fill: PropTypes.bool,
    round: PropTypes.bool,
    big: PropTypes.bool,
    color: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool
  }

  render() {
    const {
      fill,
      round,
      big,
      color,
      active,
      disabled,
      children,
      ...other
    } = this.props;

    const buttonFill = fill ? 'button-fill' : '';
    const buttonRound = round ? 'button-round' : '';
    const buttonBig = big ? 'button-big' : '';
    const buttonColor = color? `color-${color}`: '';
    const buttonActive = active? 'active': '';

    const cls = classnames('button', buttonFill, buttonRound, buttonBig, buttonColor, buttonActive);

    return (
      <div className={cls} disabled={disabled} {...other}>{children}</div>
    );
  }
}

export class ButtonsSegmented extends Component {
  static uiName = 'ButtonsSegmented'

  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {
      className,
      children,
      ...other
    } = this.props;

    const cls = classnames('buttons-row', className);

    return (
      <div className={cls} {...other}> {children} </div>
    );
  }
}
