import React, {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';
import {StylePicker} from './Styled';

export default class Picker extends Component {

  static uiName = 'Picker';

  static propTypes = {
    selectedValue: PropTypes.any,
    onValueChange: PropTypes.func,
    children: PropTypes.any
  }

  static defaultProps = {
    onValueChange(){}
  }

  getValue = ()=>{
    const { children, selectedValue } = this.props;
    if (selectedValue && selectedValue.length) {
      return selectedValue;
    } else {
      if (!children) {
        return [];
      }
      return React.Children.map(children, (c) => {
        const cc = React.Children.toArray(c.props.children);
        return cc && cc[0] && cc[0].props.value;
      });
    }
  }

  onValueChange = (i, v)=>{
    const value = this.getValue().concat();
    value[i] = v;
    this.props.onValueChange(value, i);
  }

  render() {

    const {
      children,
      ...rest
    } = this.props;

    const selectedValue = this.getValue();
    const colElements = React.Children.map(children, (col, i) => {
      return cloneElement(col, {
        selectedValue: selectedValue[i],
        onValueChange: (...args) => this.onValueChange(i, ...args)
      });
    });

    return (
      <StylePicker {...rest} >
        {colElements}
      </StylePicker>
    );
  }
}
