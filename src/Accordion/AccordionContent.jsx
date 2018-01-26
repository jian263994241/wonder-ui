import React, {Component, createElement} from 'react';
import PropTypes from 'prop-types';
import {StyledContent} from './Styled';

export default class AccordionContent extends Component {

  static contextTypes = {
    activeIndex: PropTypes.number,
    itemIndex: PropTypes.number,
  }

  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  }

  static defaultProps = {
    component: 'div'
  }

  componentDidMount(){
    this.toggle(this.context);
  }

  componentWillReceiveProps(nextProps, nextContext){
    this.toggle(nextContext);
  }

  toggle = (context)=> {
    const {activeIndex, itemIndex} = context;

    if(activeIndex === itemIndex){
      this.open()
    }else{
      this.close()
    }
  };

  open = ()=>{
    this.content.style.height = this.content.scrollHeight + 'px';
  }

  close = ()=>{
    this.content.style.height = 0;
  }

  render(){
    const {
      component,
      ...rest
    } = this.props;

    return (
      <StyledContent
        innerRef={x=>{this.content=x}}
        {...rest}
      />
    )
  }
}
