import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


export default class PageContent extends Component {

  static uiName = 'PageContent'

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
  }

  render() {

    const {
      className,
      style,
      children,
      ...other
    } = this.props;

    const cls = classnames('page-content', className);

    return (
      <div className={cls} style={style} {...other}>
        {children}
      </div>
    );
  }

}
