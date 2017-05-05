import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import device from '../utils/device'
import $ from '../utils/dom'
import Modals from './Modals'

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
      document.title = title;
      window.KQB && device.ios && KQB.native('setPageTitle', { title });
    }

    Modals.closeModal('.modal-in');
    Modals.hidePreloader();
    Modals.hideIndicator();
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
      const uiName = child.type.uiName;
      if(uiName === 'Navbar'){
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
