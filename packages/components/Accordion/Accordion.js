import React, {Component, Children, cloneElement, createElement} from 'react';
import PropTypes from 'prop-types';
import {StyledAccordion} from './Styled';

/**
 * Accordion React component
 */
export default class Accordion extends Component {

  static childContextTypes = {
    activeIndex: PropTypes.number,
    updateActive: PropTypes.func
  }

  static propTypes = {
    /**
     * 默认展开面板
     */
    defaultActiveIndex: PropTypes.number
  }

  static defaultProps = {
    defaultActiveIndex: null
  }

  state = {
    activeIndex: null
  }

  getChildContext = ()=>({
    activeIndex: this.state.activeIndex,
    updateActive: activeIndex => this.setState({activeIndex})
  });

  componentDidMount(){

    this.setState({
      activeIndex: this.props.defaultActiveIndex
    })
  }

  render(){

    const {
      children,
      defaultActiveIndex,
      ...rest
    } = this.props;

    return (
      <StyledAccordion {...rest}>
        {Children.toArray(children).map((c, i)=>cloneElement(c, {index: i}))}
      </StyledAccordion>
    )

  }
}
