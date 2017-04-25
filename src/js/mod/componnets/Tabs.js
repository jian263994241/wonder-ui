import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


export default class Tabs extends Component {

  static uiName = 'Tabs'

  static propTypes = {
    className: PropTypes.string,
    animated: PropTypes.bool
  }

  render() {
    const {
      animated,
      className,
      children
    } = this.props;

    const cls = classnames('tabs', className);

    if(animated){
      return (
        <div className="tabs-animated-wrap">
          <div className={cls}>{children}</div>
        </div>
      );
    }

    return (
      <div className={cls}>{children}</div>
    );
  }
}
