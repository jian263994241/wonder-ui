import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {sizeNavbars} from '../utils/mix'
import {withRouter} from '../utils/Router'
import $ from '../utils/dom'
import Icon from './Icon'


class Navbar extends Component {

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
    onBackClick: PropTypes.func
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
      sliding,
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

    let navLeft;

    if(back){
      const backCss = classnames('back link', backText?'':'icon-only')
      navLeft = (
        <div className="left">
          <a className="back link icon-only" onClick={this.backHandler}>
            <Icon type="left-nav"/><span>{backText}</span>
          </a>
        </div>
      )
    }

    return (
      <div className={cls} ref='navbar' {...other}>
        <div className="navbar-inner">
          {navLeft}
          <div className="center" ref="center">{title}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar)
