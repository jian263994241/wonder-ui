import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class CheckboxItem extends Component {

  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    after: PropTypes.any,
    media: PropTypes.any,
    disabled: PropTypes.bool
  }

  render() {

    const {
      checkbox,
      className,
      title,
      subtitle,
      text,
      after,
      disabled,
      children,
      group,
      itemKey,
      ...rest
    } = this.props;

    const cls = classnames({
      'item-content': true,
      'label-checkbox': checkbox,
      'disabled': disabled
    }, className);

    return (
      <li>
        <label className={cls}>
          <input type="checkbox" {...rest}/>
          <div className="item-media"> <i className={`icon icon-form-checkbox`}></i> </div>
          <div className="item-inner">
            <div className="item-title-row">
              <div className="item-title">{title}</div>
              {after && <div className="item-after">{after}</div>}
            </div>
            {subtitle && <div className="item-subtitle">{subtitle}</div>}
            {text && <div className="item-text">{text}</div>}
          </div>
        </label>
      </li>
    );
  }
}
