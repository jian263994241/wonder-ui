import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class RadioItem extends Component {

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
      className,
      title,
      subtitle,
      radio,
      text,
      media,
      after,
      disabled,
      children,
      group,
      itemKey,
      ...rest
    } = this.props;

    const cls = classnames({
      'item-content': true,
      'label-radio': radio,
      'disabled': disabled
    }, className);

    const content = (subtitle || text)? (
      <div className="item-inner">
        <div className="item-title-row">
          <div className="item-title">{title}</div>
          {after && <div className="item-after">{after}</div>}
        </div>
        {subtitle && <div className="item-subtitle">{subtitle}</div>}
        {text && <div className="item-text">{text}</div>}
      </div>

    ):(
      <div className="item-inner">
        <div className="item-title">{title}</div>
        {after && <div className="item-after">{after}</div>}
      </div>
    );

    return (
      <li>
        <label className={cls}>
          <input type="radio" {...rest}/>
          {media && <div className="item-media">{media}</div>}
          {content}
        </label>
      </li>
    );
  }
}
