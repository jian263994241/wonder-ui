import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


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

    const navbarFixedCss = navbarFixed ? 'navbar-fixed': '';
    const toolbarFixedCss = toolbarFixed ? 'toolbar-fixed': '';
    const themeCss = theme? `theme-${theme}`: '';
    const cls = classnames('page', navbarFixedCss, toolbarFixedCss, themeCss, className);

    return (
      <div
        className={cls}
        data-title={title}
        {...other}>
        {children}
      </div>
    );
  }

}
