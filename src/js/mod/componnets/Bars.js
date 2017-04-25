import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {sizeNavbars} from '../utils/mix'
import {withRouter} from 'react-router-dom'
import $ from '../utils/dom'
import {mounted} from '../utils/mix'
import Icon from './Icon'


class _Navbar extends Component {

  static uiName = 'Navbar'

  static defaultProps = {
    theme: 'gray'
  }

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    theme: PropTypes.string,
    back: PropTypes.bool,
    backText: PropTypes.string,
    onBackClick: PropTypes.func,
    center: PropTypes.element,
    left: PropTypes.element,
    right: PropTypes.element
  }

  navPosFix = ()=>{
    sizeNavbars(this.refs.navbar);
  }

  componentDidMount() {
    $(window).on('resize', this.navPosFix).trigger('resize');
  }
  componentWillUnmount() {
    $(window).off('resize', this.navPosFix);
  }

  backHandler = ()=>{
    const {history} = this.props;
    if(this.props.onBackClick){
      onBackClick();
    }else{
      history.goBack();
    }
  }
  render() {

    const {
      theme,
      title,
      back,
      backText,
      center,
      left,
      right,
      className,
      children,
      history,
      match,
      location,
      staticContext,
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
      <div className={cls} ref='navbar' {...other}>
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

export const Navbar = withRouter(_Navbar);

export const SubNavBar = (props)=>{
  const {className, ...other} = props;
  const cls = classnames('subnavbar', className);
  return (
    <div className={cls} {...other}></div>
  );
};
