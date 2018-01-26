import React, {Component, createElement} from 'react';
import PropTypes from 'prop-types';
import {StyledAccordionToggle} from './Styled';

export default class AccordionToggle extends Component {

  static contextTypes = {
    activeIndex: PropTypes.number,
    itemIndex: PropTypes.number,
    updateActive: PropTypes.func
  }

  clickHander = ()=>{
    const {activeIndex, itemIndex, updateActive} = this.context;
    if(activeIndex != itemIndex){
      updateActive(itemIndex);
    }else{
      updateActive(null);
    }
  }

  render(){

    const {
      component,
      onClick,
      ...rest
    } = this.props;

    return (
      <StyledAccordionToggle
        onClick={this.clickHander}
        {...rest}
      />
    )
  }
}
