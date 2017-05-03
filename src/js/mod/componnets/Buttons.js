import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class Button extends Component {

  static uiName = 'Button'

  static propTypes = {
    className: PropTypes.string,
    fill: PropTypes.bool,
    round: PropTypes.bool,
    big: PropTypes.bool,
    color: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    tabLink: PropTypes.bool,
  }

  render() {
    const {
      fill,
      round,
      big,
      color,
      active,
      disabled,
      tabLink,
      children,
      ...other
    } = this.props;

    const buttonFill = fill ? 'button-fill' : '';
    const buttonRound = round ? 'button-round' : '';
    const buttonBig = big ? 'button-big' : '';
    const buttonColor = color? `color-${color}`: '';
    const buttonActive = active? 'active': '';
    const tabLinkCss = tabLink? 'tab-link': '';


    const cls = classnames('button', buttonFill, buttonRound, buttonBig, buttonColor, buttonActive, tabLinkCss);

    return (
      <div className={cls} disabled={disabled} {...other} ref="Button">{children}</div>
    );
  }
}

export class ButtonsSegmented extends Component {
  static uiName = 'ButtonsSegmented'

  static propTypes = {
    className: PropTypes.string,
    activeIndex: PropTypes.number
  }

  state = {
    activeIndex : 0
  }

  componentWillMount() {
    const {activeIndex} = this.props;
    if(activeIndex){
      this.setState({activeIndex});
    }
  }

  render() {
    const {
      className,
      activeIndex,
      children,
      ...other
    } = this.props;

    const cls = classnames('buttons-row', className);

    const childrenTransfrom = React.Children.map(children, (child, index)=>{
      const active = activeIndex === index;
      return React.cloneElement(child, {active: active, tabLink:true});
    })

    return (
      <div className={cls} {...other} ref="ButtonsSegmented"> {childrenTransfrom} </div>
    );
  }
}
