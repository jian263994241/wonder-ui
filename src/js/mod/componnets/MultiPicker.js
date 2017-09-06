import React, {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


export default class MultiPicker extends Component {

  static uiName = 'MultiPicker';

  static propTypes = {
    prefixCls: PropTypes.string,
    selectedValue: PropTypes.any,
    className: PropTypes.string,
    rootNativeProps: PropTypes.any,
    indicatorStyle: PropTypes.any,
    onValueChange: PropTypes.func,
    children: PropTypes.any,
    style: PropTypes.any
  }

  static defaultProps = {
    prefixCls: 'rmc-multi-picker',
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
      prefixCls,
      className,
      rootNativeProps,
      children,
    } = this.props;

    const selectedValue = this.getValue();
    const colElements = React.Children.map(children, (col, i) => {
      return cloneElement(col, {
        selectedValue: selectedValue[i],
        onValueChange: (...args) => this.onValueChange(i, ...args)
      });
    });

    return (
      <div
        {...rootNativeProps}
        style={this.props.style}
        className={classnames(className, prefixCls)}
      >
        {colElements}
      </div>
    );
  }
}
