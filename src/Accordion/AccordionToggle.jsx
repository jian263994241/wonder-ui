import React, {Component, createElement} from 'react';
import PropTypes from 'prop-types';

export default class AccordionToggle extends Component {

  static contextTypes = {
    activeIndex: PropTypes.number,
    itemIndex: PropTypes.number,
    updateActive: PropTypes.func
  }

  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  }

  static defaultProps = {
    component: 'div'
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

    return createElement(component, {
      onClick: this.clickHander,
      ...rest
    })

  }
}
