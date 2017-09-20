import React, {Component, Children, cloneElement, isValidElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ListGroup from './ListGroup';


/**
* List
* Properties: className, style, mediaList
*/

export default class List extends Component {

  static uiName = 'List'

  static propTypes = {
    className: PropTypes.string,
    inset: PropTypes.bool,
    tabletInset: PropTypes.bool,
    accordion: PropTypes.bool,
    sortable: PropTypes.bool,
    onSorted: PropTypes.func,
    children: PropTypes.any
  }

  defaultGroup = (children)=>{
    const {accordion, sortable} = this.props;
    const head = Children.toArray(children)[0];
    const isValid = isValidElement(head);
    const props = {};
    if(!isValid || head.type.uiName != 'ListGroup'){
      if('accordion' in this.props){
        props.accordion = accordion;
      }
      if('sortable' in this.props){
        props.sortable = sortable;
      }
      return (
        <ListGroup {...props}>
          {children}
        </ListGroup>
      );
    }
    return children;
  }

  render() {
    const {
      mediaList,
      accordion,
      inset,
      tabletInset,
      sortable,
      onSorted,
      className,
      children,
      ...rest
    } = this.props;

    const cls = classnames('list-block', {
      'media-list': mediaList,
      'sortable': sortable,
      'sortable-opened': sortable,
      'inset': inset,
      'tablet-inset': tabletInset,
      'accordion-list': accordion
    }, className);

    return (
      <div className={cls} {...rest} >
        {this.defaultGroup(children)}
      </div>
    );
  }

}
