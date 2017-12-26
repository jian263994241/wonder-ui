import React, {Component, Children, cloneElement, createElement} from 'react';
import SwipeableViews from 'react-swipeable-views';

export default class Tabs extends Component {

  static defaultProps = {
    disabled: true,
    animateTransitions: false
  }

  render(){

    const {
      // index,
      // onChangeIndex,
      // disabled,
      // containerStyle
      // animateTransitions
    } = this.props;

    return (
      <SwipeableViews {...this.props}/>
    )
  }
}
