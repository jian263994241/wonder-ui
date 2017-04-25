import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


export default class PageContent extends Component {

  static uiName = 'PageContent'

  static propTypes = {
    withSubnavbar: PropTypes.bool,
    className: PropTypes.string,
  }

  render() {

    const {
      className,
      withSubnavbar,
      children,
      ...other
    } = this.props;

    const subNavbarCss = withSubnavbar? 'with-subnavbar': '';
    const cls = classnames('page-content', subNavbarCss, className);

    return (
      <div className={cls} {...other}>
        {children}
      </div>
    );
  }

}
