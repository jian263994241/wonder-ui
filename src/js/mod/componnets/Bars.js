import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
// import debounce from 'lodash.debounce'
import {sizeNavbars} from '../utils/mix'
import {withRouter} from 'react-router-dom'
import $ from '../utils/dom'
import {mounted} from '../utils/mix'
import Icon from './Icon'


export class Navbar extends Component {

  static uiName = 'Navbar'

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    noBorder:PropTypes.bool,
    theme: PropTypes.string,
    backText: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.bool]),
    onBack: PropTypes.func,
    center: PropTypes.element,
    left: PropTypes.element,
    right: PropTypes.element
  }

  navPosFix = ()=>{
    sizeNavbars(this.refs.navbar)
  }

  componentDidMount() {
    $(window).on('resize', this.navPosFix).trigger('resize');
  }
  componentWillUnmount() {
    $(window).off('resize', this.navPosFix);
  }


  render() {

    const {
      theme,
      title,
      backText,
      noBorder,
      onBack,
      center,
      left,
      right,
      className,
      children,
      ...other
    } = this.props;

    const themeCss = theme? `theme-${theme}`: '';

    const cls = classnames({
      'navbar': true,
      'no-border': noBorder
    }, className);

    const BackButton = withRouter(({history, onClick})=>{
      const clickHandler = onClick ? onClick: history.goBack;
      return (
        <a className={classnames({'back': backText, 'link': backText, 'icon-only': (backText != '')})} onClick={clickHandler}>
          <Icon type="left-nav"/><span>{backText}</span>
        </a>
      );
    })

    let navLeft = left, navRight = right, navCenter = center;

    if(!left && typeof backText != undefined){
      navLeft = (
        <BackButton onClick={onBack}></BackButton>
      )
    }

    if(!center && title){
      navCenter = title;
    }

    navLeft = mounted(navLeft, <div className="left"></div>);
    navRight = mounted(navRight, <div className="right"></div>);
    navCenter = mounted(navCenter, <div className="center" ref="center">{navCenter}</div>);


    return (
      <div className={cls} {...other} ref="Navbar">
        <div className="navbar-inner">
          {navLeft}
          {navCenter}
          {navRight}
          {children}
        </div>
      </div>
    );
  }
}


export class SubNavBar extends Component {

  static uiName = 'SubNavBar'

  static propTypes = {
    className: PropTypes.string,
    noBorder: PropTypes.bool
  }

  render() {
    const {
      className,
      noBorder,
      ...other
    } = this.props;

    const cls = classnames('subnavbar', {'no-border': noBorder}, className);

    return (
      <div className={cls} {...other} ref="SubNavBar"></div>
    );
  }
}

export class Toolbar extends Component {

  static uiName = 'Toolbar';

  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {
      className,
      children,
      ...other
    } = this.props;

    const cls = classnames('toolbar', className);

    return (
      <div className={cls} {...other} ref="Toolbar">
        <div className="toolbar-inner">
          {children}
        </div>
      </div>
    );
  }

}
