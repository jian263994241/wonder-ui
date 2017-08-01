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

    const cls = classnames({
      'row': true,
      'no-gutter': noGutter
    }, className);

    return (
      <div className={cls} {...other} ref="Row">{children}</div>
    );
  }

}

export class Col extends Component {
  static uiName = 'Col'

  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
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

    const colCss = width ? `col-${width}`: 'col-auto';
    const tabletCss = tabletWidth ? `tablet-${tabletWidth}` : '';
    const cls = classnames(colCss, tabletCss, className);

    return (
      <div className={cls} {...other} ref="Col">{children}</div>
    );
  }

}
