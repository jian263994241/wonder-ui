import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import device from '../utils/device'
import $ from '../utils/dom'
// import Modals from './Modals'

export default class Page extends Component {

  static uiName = 'Page'

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    theme: PropTypes.string,
    navbarFixed: PropTypes.bool,
    toolbarFixed: PropTypes.bool
  }

  componentDidMount() {
    const {
      title
    } = this.props;

    if(title){
      this.setDocumentTitle(title);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      title
    } = nextProps;

    if(title){
      this.setDocumentTitle(title);
    }
  }

  setDocumentTitle = (title) => {
    document.title = title;
    if (device.ios && device.webView) {
      var i = document.createElement('iframe');
      i.src = '/favicon.ico';
      i.style.display = 'none';
      i.onload = function() {
          setTimeout(function(){
              i.remove();
          }, 9)
      }
      document.body.appendChild(i);
    }
  }

  render() {

    const {
      title,
      theme,
      navbarFixed,
      toolbarFixed,
      className,
      children,
      ...other
    } = this.props;

    const themeCss = theme? `theme-${theme}`: '';
    let cls = classnames('page', {
      'navbar-fixed': navbarFixed,
      'toolbar-fixed': toolbarFixed
    } ,themeCss, className);

    let hasNavbar = false;

    React.Children.forEach(children, (child, index)=>{
      if(child.type && child.type.uiName === 'Navbar'){
        hasNavbar = true;
      }
    });

    if(!navbarFixed && hasNavbar){
      cls = classnames(cls, 'navbar-fixed');
    }

    return (
      <div
        className={cls}
        data-title={title}
        ref="Page"
        {...other}>
        {children}
      </div>
    );
  }

}
