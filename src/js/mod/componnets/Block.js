import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export class ContentBlockTitle extends Component {

  static uiName = 'ContentBlockTitle'

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }

  render() {
    const {
      className,
      style,
      children,
      ...other
    } = this.props;

    const cls = classnames('content-block-title', className);

    return (
      <div
        className={cls}
        style={style}
        {...other}>
        {children}
      </div>
    );
  }
}

export class ContentBlock extends Component {

  static uiName = 'ContentBlock'

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    title: PropTypes.string,
    inner: PropTypes.bool,
    inset: PropTypes.bool
  }


  render() {

    const {
      inner,
      inset,
      className,
      style,
      children,
      ...other
    } = this.props;

    let cls = classnames('content-block', className);

    if(inset){
      cls = classnames(cls, 'inset');
    }

    let innerElement = children;

    if(inner || inset){
      innerElement = (
        <div className="content-block-inner">{children}</div>
      );
    }

    return (
      <div
        className={cls}
        style={style}
        {...other}>
        {innerElement}
      </div>
    );
  }
}
