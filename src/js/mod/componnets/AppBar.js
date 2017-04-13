import React, {Component} from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'

class AppBar extends Component{
  static uiName = 'AppBar'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    iconClassNameLeft: PropTypes.string,
    iconClassNameRight: PropTypes.string,
    iconElementLeft: PropTypes.element,
    iconElementRight: PropTypes.element,
    onLeftIconButtonTouchTap: PropTypes.func,
    onRightIconButtonTouchTap: PropTypes.func,
    onTitleTouchTap: PropTypes.func,
    showBackIconButton: PropTypes.bool,
    backButtonText: PropTypes.string,
    elementCenter: PropTypes.element,
    style: PropTypes.object,
    title: PropTypes.node,
    titleStyle: PropTypes.object,
  }


  backButtonEventHandler(e){
    window.history.back();
    if(this.props.onLeftIconButtonTouchTap){
      this.props.onLeftIconButtonTouchTap(e);
    }
  }

  render() {
    const {
      title,
      titleStyle,
      onTitleTouchTap, // eslint-disable-line no-unused-vars
      showBackIconButton,
      backButtonText,
      iconElementLeft,
      iconElementRight,
      centerElement,
      onLeftIconButtonTouchTap, // eslint-disable-line no-unused-vars
      onRightIconButtonTouchTap, // eslint-disable-line no-unused-vars
      className,
      style,
      children,
      ...other
    } = this.props;

    let menuElementLeft, menuElementRight, titleElement;


    if(showBackIconButton){
      //返回按钮

      menuElementLeft = (
        <div className="btn btn-link btn-nav pull-left" onClick={this.backButtonEventHandler}>
          <span className="icon icon-left-nav"></span>{backButtonText}
        </div>
      );

    }else if(iconElementLeft){
      menuElementLeft = (
        <div className="btn btn-link btn-nav pull-left" onClick={onLeftIconButtonTouchTap}>
          {iconElementLeft}
        </div>
      );
    }

    if(iconElementRight){
      menuElementRight = (
        <div className="btn btn-link btn-nav pull-right" onClick={onRightIconButtonTouchTap}>
          {iconElementRight}
        </div>
      );
    }

    if(centerElement){
      titleElement = centerElement;
    }else if(title){
      titleElement = (
        <h1 className="title" style={titleStyle} onClick={onTitleTouchTap}>{title}</h1>
      );
    }

    const cls = classnames('bar bar-nav', className);

    return (
      <header
        {...other}
        className={cls}
        style={style}
      >
        {menuElementLeft}
        {titleElement}
        {menuElementRight}
        {children}
      </header>
    );
  }
}

export default AppBar;
