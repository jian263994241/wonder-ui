import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {Link} from '../utils/Router'

export class List extends Component {

  static uiName = 'List'

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

    const cls = classnames('list-block', className);

    const IndexClild = React.Children.toArray(children)[0];

    let childrenWrap = children;

    if(IndexClild && IndexClild.type.uiName === 'ListItem') {
      childrenWrap = (
        <ul>{children}</ul>
      )
    }

    return (
      <div className={cls} style={style} {...other}>
        {childrenWrap}
      </div>
    );
  }

}



export class ListGroup extends Component {

  static uiName = 'ListGroup'

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

    return (
      <ul className={className} style={style} {...other}>
        {children}
      </ul>
    );
  }
}

export class ListItem extends Component {

  constructor(props){
    super(props);
  }

  static uiName = 'ListItem'

  static propTypes = {
    title: PropTypes.string,
    link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render (){
    const {
      title,
      link,
      className,
      style,
      children,
      ...other
    } = this.props;

    let content, cls , ElementTag;

    content = (
      <div className="item-inner">
        <div className="item-title">{title}</div>
        <div className="item-after">123</div>
      </div>
    )

    if(link){
      ElementTag = (<Link to={link}/>);
      cls = classnames('item-content item-link', className);
    }else{
      ElementTag = (<div/>);
      cls = classnames('item-content', className);
    }

    return (
      <li>
        {
          React.cloneElement(ElementTag, {
            className: cls,
            style: style,
            ...other
          }, content)
        }
      </li>
    )
  }
}
