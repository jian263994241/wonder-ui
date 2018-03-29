import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StylePage} from './Styled';

export default class Page extends Component {

  static contextTypes = {
    onPageInit: PropTypes.func,
    onPageRemove: PropTypes.func,
  }

  static defaultProps = {
    ready: true
  }

  static propTypes = {
    ready: PropTypes.bool
  }

  transition = true;

  duration = 400;

  componentWillMount(){
    setTimeout(()=>{
      this.transition = false;
      this.forceUpdate();
    }, this.duration);
  }

  componentDidMount() {
    const {onPageInit} = this.context;
    const {children, ready, ...extraData} = this.props;
    onPageInit(extraData);
  }

  shouldComponentUpdate(){
    return !this.transition;
  }

  componentWillUnmount(){
    const {onPageRemove} = this.context;
    const {children, ready, ...extraData} = this.props;
    onPageRemove(extraData);
  }

  render(){
    const {
      children,
      ready,
      ...rest
    } = this.props;
     return (
       <StylePage {...rest}>
         {ready ? children: null}
       </StylePage>
     )
  }
}
