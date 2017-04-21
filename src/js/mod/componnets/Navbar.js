import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {sizeNavbars} from '../utils/mix'
import {withRouter} from '../utils/Router'

class Navbar extends Component {

  static uiName = 'Navbar'

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    title: PropTypes.string,
    back: PropTypes.bool,
    backText: PropTypes.string,
    onBackClick: PropTypes.func
  }

  componentDidMount() {
    sizeNavbars(this.refs.navbar);
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
      title,
      back,
      backText,
      sliding,
      className,
      style,
      children,
      history,
      ...other
    } = this.props;

    const cls = classnames('navbar', className);

    let navLeft ;

    if(back){
      const backCss = classnames('back link', backText?'':'icon-only')
      navLeft = (
        <div className="left">
          <a className="back link icon-only" onClick={this.backHandler}>
            <i className="icon icon-back"></i>
            <span>{backText}</span>
          </a>
        </div>
      )
    }

    return (
      <div className={cls} ref='navbar'>
        <div className="navbar-inner">
          {navLeft}
          <div className="center" ref="center">{title}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar)
