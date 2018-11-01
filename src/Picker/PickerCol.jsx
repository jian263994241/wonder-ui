import React, {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';
import ZScroller from 'zscroller';
import {StylePickerCol, StyleMask, StyleIndicator, StyleContent, StyleItem} from './Styled';

export default class PickerCol extends Component {

  static Item = ()=>{}

  styleRef = {};

  constructor(props){
    super(props);
    let selectedValueState;
    const { selectedValue, defaultSelectedValue } = this.props;
    if (selectedValue !== undefined) {
      selectedValueState = selectedValue;
    } else if (defaultSelectedValue !== undefined) {
      selectedValueState = defaultSelectedValue;
    } else {
      const children = React.Children.toArray(this.props.children);
      selectedValueState = children && children[0] && children[0].props.value;
    }

    this.state = {
      selectedValue: selectedValueState,
    };
  }

  componentDidMount() {
    const { content, indicator, mask, root } = this.styleRef;
    const rootHeight = root.getBoundingClientRect().height;
    const itemHeight = this.itemHeight = indicator.getBoundingClientRect().height;
    let num = Math.floor(rootHeight / itemHeight);
    if (num % 2 === 0) {
      num--;
    }
    num--;
    num /= 2;
    content.style.padding = `${itemHeight * num}px 0`;
    indicator.style.top = `${itemHeight * num}px`;
    mask.style.backgroundSize = `100% ${itemHeight * num}px`;
    this.zscroller = new ZScroller(content, {
      scrollingX: false,
      snapping: true,
      locking: false,
      penetrationDeceleration: .1,
      minVelocityToKeepDecelerating: 0.5,
      scrollingComplete: this.scrollingComplete,
    });
    this.zscroller.setDisabled(this.props.disabled);
    this.zscroller.scroller.setSnapSize(0, itemHeight);
    this.select(this.state.selectedValue);
  }

  componentWillReceiveProps(nextProps) {
    if ('selectedValue' in nextProps) {
      this.setState({
        selectedValue: nextProps.selectedValue,
      });
    }
    this.zscroller.setDisabled(nextProps.disabled);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selectedValue !== nextState.selectedValue
      || this.props.children !== nextProps.children;
  }

  componentDidUpdate() {
    this.zscroller.reflow();
    this.select(this.state.selectedValue);
  }

  componentWillUnmount() {
    this.zscroller.destroy();
  }

  scrollTo = (top)=>{
    this.zscroller.scroller.scrollTo(0, top);
  }

  fireValueChange = (selectedValue) => {
    if (selectedValue !== this.state.selectedValue) {
      if (!('selectedValue' in this.props)) {
        this.setState({
          selectedValue,
        });
      }
      if (this.props.onValueChange) {
        this.props.onValueChange(selectedValue);
      }
    }
  }

  scrollingComplete = () => {
    const { top } = this.zscroller.scroller.getValues();
    if (top >= 0) {
      this.doScrollingComplete(top);
    }
  }

  getValue = () => {
    if ('selectedValue' in this.props) {
      return this.props.selectedValue;
    }
    const children = React.Children.toArray(this.props.children);
    return children && children[0] && children[0].props.value;
  }

  select = (value) => {
    const children: any = React.Children.toArray(this.props.children);
    for (let i = 0, len = children.length; i < len; i++) {
      if (children[i].props.value === value) {
        this.selectByIndex(i);
        return;
      }
    }
    this.selectByIndex(0);
  }

  selectByIndex = (index) => {
    if (index < 0 || index >= React.Children.count(this.props.children) || !this.itemHeight) {
      return;
    }
    this.scrollTo(index * this.itemHeight);
  }

  doScrollingComplete = (top) => {
    let index = top / this.itemHeight;
    const floor = Math.floor(index);
    if (index - floor > 0.5) {
      index = floor + 1;
    } else {
      index = floor;
    }
    const children = React.Children.toArray(this.props.children);
    index = Math.min(index, children.length - 1);
    const child = children[index];
    if (child) {
      this.fireValueChange(child.props.value);
    } else if (console.warn) {
      console.warn('child not found', children, index);
    }
  }

  render (){
    const {
      onValueChange,
      selectedValue,
      itemStyle,
      indicatorStyle,
      indicatorClassName = '',
      children,
      ...rest
    } = this.props;


    const map = (item) => {
      const { className = '', value, ...rest } = item.props;
      const space = className === '' ? '' : ' ';

      return (
        <StyleItem
          className={this.state.selectedValue === value ? className + space + 'selected' : className}
          key={value}
          {...rest}
        >
          {item.props.children}
        </StyleItem>
      );
    };

    const items = React.Children.map(children, map);

    return (
      <StylePickerCol ref={x => { this.styleRef.root = x }} {...rest}>
        <StyleMask ref={x => { this.styleRef.mask = x }}/>
        <StyleIndicator ref={x => { this.styleRef.indicator = x }}/>
        <StyleContent ref={x => { this.styleRef.content = x }}>
          {items}
        </StyleContent>
      </StylePickerCol>
    );
  }
}
