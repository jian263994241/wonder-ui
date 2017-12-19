import React, {Component, createElement, Children} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class AccordionItem extends Component {

  static childContextTypes = {
    itemIndex: PropTypes.number,
  }

  static contextTypes = {
    activeIndex: PropTypes.number,
  }

  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    activeClass: PropTypes.string,
    onAccordionOpen: PropTypes.func,
    onAccordionClose: PropTypes.func
  }

  static defaultProps = {
    component: 'div',
    activeClass: 'active',
    onAccordionOpen: val=>val,
    onAccordionClose: val=>val,
  }

  getChildContext = ()=>({
    itemIndex: this.props.index
  });

  componentWillUpdate(nextProps, nextState, nextContext){
    const {onAccordionOpen, onAccordionClose, index} = this.props;

    if(nextContext.activeIndex === index){
      onAccordionOpen();
    }else if(this.context.activeIndex === index && nextContext.activeIndex != index ){
      onAccordionClose();
    }
  }

  render(){

    const {
      activeClass,
      index,
      className,
      component,
      onAccordionOpen,
      onAccordionClose,
      ...rest
    } = this.props;

    return createElement(component, {
      className: classnames(className, {
        [activeClass]: index === this.context.activeIndex
      }),
      ...rest,
    });
  }
}
