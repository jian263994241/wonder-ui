import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Title extends Component {

  static uiName = 'ContentBlockTitle'

  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {
      className,
      children,
      ...other
    } = this.props;

    const cls = classnames('content-block-title', className);

    return (
      <div
        className={cls}
        ref="ContentBlockTitle"
        {...other}>
        {children}
      </div>
    );
  }
}

export default class ContentBlock extends Component {

  static uiName = 'ContentBlock'

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    inner: PropTypes.bool,
    inset: PropTypes.bool,
    noHairlines: PropTypes.bool
  }

  static Title = Title;

  render() {

    const {
      inner,
      inset,
      noHairlines,
      className,
      children,
      ...other
    } = this.props;
    const inSetCss = inset? 'inset': '';
    const cls = classnames('content-block', inSetCss, className);
    const innerCss = classnames('content-block-inner', noHairlines?'no-hairlines':'');

    let innerElement = children;

    if(inner || inset){
      innerElement = (
        <div className={innerCss}>{children}</div>
      );
    }

    return (
      <div
        className={cls}
        ref="ContentBlock"
        {...other}>
        {innerElement}
      </div>
    );
  }
}
