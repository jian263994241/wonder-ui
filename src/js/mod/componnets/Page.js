import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


export default class Page extends Component {

  static uiName = 'Page'

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    title: PropTypes.string
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
      className,
      style,
      children,
      ...other
    } = this.props;

    const cls = classnames('page', className);

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
