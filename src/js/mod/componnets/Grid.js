import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class Row extends Component {

  static uiName = 'Row'

  static propTypes = {
    className: PropTypes.string,
    noGutter: PropTypes.bool
  }

  render() {

    const {
      noGutter,
      className,
      children,
      ...other
    } =  this.props;

    const noGutterCss = noGutter? 'no-gutter' : '';
    const cls = classnames('row', noGutterCss, className);

    return (
      <div className={cls} {...other} ref="Row">{children}</div>
    );
  }

}

export class Col extends Component {
  static uiName = 'Col'

  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.string.isRequired,
    tabletWidth: PropTypes.string
  }

  render() {
    const {
      width,
      tabletWidth,
      className,
      children,
      ...other
    } =  this.props;

    const tabletCss = tabletWidth ? `tablet-${tabletWidth}` : '';
    const cls = classnames(`col-${width}`, tabletCss);

    return (
      <div className={cls} {...other} ref="Col">{children}</div>
    );
  }

}
