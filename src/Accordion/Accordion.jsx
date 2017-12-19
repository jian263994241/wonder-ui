import React, {Component, Children, cloneElement, createElement} from 'react';
import PropTypes from 'prop-types';

export default class Accordion extends Component {

  static childContextTypes = {
    activeIndex: PropTypes.number,
    updateActive: PropTypes.func
  }

  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  }

  static defaultProps = {
    component: 'div'
  }

  state = {
    activeIndex: null
  }

  getChildContext = ()=>({
    activeIndex: this.state.activeIndex,
    updateActive: activeIndex => this.setState({activeIndex})
  });

  render(){

    const {
      component,
      children,
      ...rest
    } = this.props;

    return createElement(component, {
      children: Children.toArray(children).map((c, i)=>cloneElement(c, {index: i})),
      ...rest
    })

  }
}
