import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


export default class Page extends Component {

  static uiName = 'Page'

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    title: PropTypes.string,
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
      navbarFixed,
      toolbarFixed,
      className,
      style,
      children,
      ...other
    } = this.props;

    const cls = classnames('page', (navbarFixed ? 'navbar-fixed': ''), (toolbarFixed ? 'toolbar-fixed': ''), className);

    return (
      <div
        className={cls}
        style={style}
        data-title={title}
        {...other}>
        {children}
      </div>
    );
  }

}
