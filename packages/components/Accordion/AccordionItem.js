import React, {Component, createElement, Children} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {StyledAccordionItem} from './Styled';


/**
 * Accordion Item React component
 */
export default class AccordionItem extends Component {

  static childContextTypes = {
    itemIndex: PropTypes.number,
  }

  static contextTypes = {
    activeIndex: PropTypes.number,
  }

  static propTypes = {

    /**
     * 打开的样式
     */
    activeClass: PropTypes.string,

    /**
     * 事件: 打开时触发
     */
    onAccordionOpen: PropTypes.func,
    /**
     * 事件: 关闭时触发
     */
    onAccordionClose: PropTypes.func
  }

  static defaultProps = {
    activeClass: 'active',
    onAccordionOpen: null,
    onAccordionClose: null,
  }

  getChildContext = ()=>({
    itemIndex: this.props.index
  });

  componentWillUpdate(nextProps, nextState, nextContext){
    const {onAccordionOpen, onAccordionClose, index} = this.props;

    if(nextContext.activeIndex === index){
      onAccordionOpen && onAccordionOpen();
    }else if(this.context.activeIndex === index && nextContext.activeIndex != index ){
      onAccordionClose && onAccordionClose();
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

    return (
      <StyledAccordionItem
        className={classnames(className, { [activeClass]: index === this.context.activeIndex })}
        {...rest}
      />
    )

  }
}
