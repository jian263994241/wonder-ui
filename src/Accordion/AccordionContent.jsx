import React, {Component, createElement} from 'react';
import PropTypes from 'prop-types';
import {Content} from './Styled';

class AccordionContent extends Component {

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
    this.refs.content.style.height = this.refs.content.scrollHeight + 'px';
  }

  close = ()=>{
    this.refs.content.style.height = 0;
  }

  render(){
    const {
      component,
      ...rest
    } = this.props;
    return createElement(component, {
      ref: 'content',
      ...rest
    });
  }
}

export default Content.withComponent(AccordionContent);
