import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import debounce from 'lodash.debounce'
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
    theme: PropTypes.string,
    back: PropTypes.bool,
    backText: PropTypes.string,
    onBack: PropTypes.func,
    center: PropTypes.element,
    left: PropTypes.element,
    right: PropTypes.element
  }

  navPosFix = debounce(()=>{ sizeNavbars(this.refs.navbar) }, 100)

  componentDidMount() {
    $(window).on('resize', this.navPosFix).trigger('resize');
  }
  componentWillUnmount() {
    $(window).off('resize', this.navPosFix);
  }

  backHandler = ()=>{
    const {onBack} = this.props;
    if(onBack){
      onBack();
    }else{
      history.back();
    }
  }
  render() {

    const {
      theme,
      title,
      back,
      backText,
      onBack,
      center,
      left,
      right,
      className,
      children,
      ...other
    } = this.props;

    const themeCss = theme? `theme-${theme}`: '';

    const cls = classnames('navbar', themeCss, className);

    let navLeft = left, navRight = right, navCenter = center;

    if(!left && back){
      const backCss = classnames('back link', backText?'':'icon-only')
      navLeft = (
        <a className="back link icon-only" onClick={this.backHandler}>
          <Icon type="left-nav"/><span>{backText}</span>
        </a>
      )
    }

    if(!center && title){
      navCenter = title;
    }

    navLeft = mounted(navLeft, <div className="left"></div>);
    navRight = mounted(navRight, <div className="right"></div>);
    navCenter = mounted(navCenter, <div className="center" ref="center">{navCenter}</div>);


    return (
      <div className={cls} ref='navbar' {...other} ref="Navbar">
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
      <div className={cls} {...other}>
        <div className="toolbar-inner">
          {children}
        </div>
      </div>
    );
  }

}
