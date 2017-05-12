import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import $ from '../utils/dom'
import PickerModal from './PickerModal'
import {Motion, spring} from 'react-motion';

const springConfig = {stiffness: 300, damping: 50};


class PickerCol extends Component {

  static uiName = 'PickerCol';

  static propTypes = {
    opened: PropTypes.bool,
    items: PropTypes.array,
    align: PropTypes.string,
    multi: PropTypes.bool,
    onSelected: PropTypes.func
  }

  static defaultProps = {
    items: [],
    align: 'right',
    multi: false,
    momentumRatio: 7,
    itemHeight: 36
  }

  state = {
    isTouched: false,
    touchStartY : 0,
    touchCurrentY: 0,
    startTranslate: 0,
    currentTranslate: 0,
    touchStartTime: 0,
    maxTranslate: 0,
    minTranslate: 0,
    velocityTime: 0,
    velocityTranslate: 0,
    prevTranslate: 0,
    itemsHeight: 0,
    activeIndex: 0
  }


  calcSize = ()=>{
    const {itemHeight, items} = this.props;
    const container = this.refs.PickerCol;
    const wrapper = this.refs.wrapper;
    let colWidth, colHeight , itemsHeight, minTranslate, maxTranslate;
    colWidth = 0;
    colHeight = container.offsetHeight;
    itemsHeight = itemHeight * items.length;

    minTranslate = colHeight / 2 - itemsHeight + itemHeight / 2;
    maxTranslate = colHeight / 2 - itemHeight / 2;

    const currentTranslate = maxTranslate;

    this.setState({ minTranslate, maxTranslate, currentTranslate });
  }

  activeIndex = 0;

  updateItems = (activeIndex, newTranslate)=>{
    const {items, onSelected} = this.props;
    if (activeIndex < 0) activeIndex = 0;
    if (activeIndex >= items.length) activeIndex = items.length - 1;

    const currentTranslate = newTranslate;
    const isTouched = false;

    this.setState({isTouched, currentTranslate, activeIndex}, ()=>{
      onSelected && onSelected(activeIndex);
    });
  }

  handleTouchStart = (e)=>{
    e.preventDefault();
    const isTouched = true;
    const {pageY} = e.touches[0];
    let {touchStartY, touchCurrentY, startTranslate, currentTranslate, touchStartTime} = this.state;
    touchStartY = touchCurrentY = pageY;
    startTranslate = currentTranslate;

    touchStartTime = (new Date()).getTime();

    this.setState({ touchStartY, touchCurrentY, startTranslate, isTouched, touchStartTime });
  }

  handleTouchMove = (e)=>{
    const {pageY: touchCurrentY} = e.touches[0];
    let {isTouched, touchStartY, currentTranslate, startTranslate, maxTranslate, minTranslate, velocityTranslate, prevTranslate} = this.state;

    if(isTouched){
      const diff = touchCurrentY - touchStartY;

      currentTranslate = startTranslate + diff;

      let returnTo = undefined;
      // Normalize translate
      if (currentTranslate < minTranslate) {
          currentTranslate = minTranslate - Math.pow(minTranslate - currentTranslate, 0.8);
          returnTo = 'min';
      }
      if (currentTranslate > maxTranslate) {
          currentTranslate = maxTranslate + Math.pow(currentTranslate - maxTranslate, 0.8);
          returnTo = 'max';
      }

      const velocityTime = (new Date()).getTime();

      velocityTranslate = currentTranslate - prevTranslate || currentTranslate;

      prevTranslate = currentTranslate;

      this.setState({ touchCurrentY , currentTranslate, returnTo, velocityTranslate, velocityTime, prevTranslate});

    }

  }

  handleTouchEnd = (e)=>{
    const isTouched = false;
    const {itemHeight} = this.props;
    let {returnTo, minTranslate, maxTranslate, currentTranslate, touchStartTime, velocityTime, velocityTranslate} = this.state;

    if (returnTo) {
        if (returnTo === 'min') {
          currentTranslate = minTranslate;
        }else{
          currentTranslate = maxTranslate;
        }
    }

    const touchEndTime = (new Date()).getTime();

    let newTranslate, velocity ;

    if (touchEndTime - touchStartTime > 300) {
        newTranslate = currentTranslate;
    }else{
      velocity = Math.abs(velocityTranslate / (touchEndTime - velocityTime));
      newTranslate = currentTranslate + velocityTranslate * this.props.momentumRatio;
    }

    newTranslate = Math.max(Math.min(newTranslate, maxTranslate), minTranslate);

    const activeIndex = -Math.floor((newTranslate - maxTranslate)/itemHeight);

    newTranslate = -activeIndex * itemHeight + maxTranslate;


    this.updateItems(activeIndex, newTranslate);

  }

  render() {
    const {
      items,
      align,
      multi
    } = this.props;

    const {
      activeIndex
    } = this.state;

    const pickerItem = (item, index)=>{

      return (
        <div
          className={classnames({
          'picker-item': true,
          'picker-selected': (activeIndex===index)
          })}
          key={`pickerItem-${index}`}
        >
          <span>{item}</span>
        </div>
      );
    }

    const cls = classnames({
      'picker-items-col': true,
      // 'picker-items-col-absolute': multi,
      'picker-items-col-left': (align ==='left'),
      'picker-items-col-center': (align ==='center')
    });

    const y = this.state.currentTranslate;
    return (
      <div className={cls} ref="PickerCol">
        <Motion style={{y}}>
          {
            ({y})=>(
              <div
                className="picker-items-col-wrapper"
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
                style={{
                  transform: `translate3d(0px, ${y}px, 0px)`,
                  WebkitTransform: `translate3d(0px, ${y}px, 0px)`
                }}
              >
                {items.map(pickerItem)}
              </div>
            )
          }
        </Motion>
      </div>
    );
  }
}


export default class Picker extends Component {

  static uiName = 'PickerModal';

  static defaultProps = {
    opened: false
  }

  static propTypes = {
    className: PropTypes.string,
    opened: PropTypes.bool,
    cols: PropTypes.array.isRequired,
    onSelected: PropTypes.func,
    onOpen: PropTypes.func,
    onOpened: PropTypes.func,
    onClose: PropTypes.func,
    onClosed: PropTypes.func,
  }

  open = ()=>{
    const {onOpen, onSelected} = this.props;
    this.resize();
    onOpen && onOpen();
    onSelected && onSelected(this.values);
  }

  resize = ()=>{
    const {cols} = this.props;
    cols.forEach((col, index)=>{
      this.refs[`Col${index}`].calcSize()
    })
  }

  values = []

  componentDidMount() {
    const {cols} = this.props;
    cols.forEach((col, index)=>{
      if(!col.displayValues){
        col.displayValues = col.values;
      }
      this.values[index] = {
        value : col.values[0],
        displayValues : col.displayValues[0]
      }
    });
  }

  render() {

    const {
      cols,
      className,
      onOpen,
      onSelected,
      children,
      ...other
    } = this.props;

    const cls = classnames({
      'picker-3d': true,
      'picker-columns': (cols.length > 1)
    }, className);

    const multi = (cols.length > 1);

    const Col = (item, index) => {
      const displayValues = item.displayValues || item.values;

      const selected = (activeIndex)=>{
        const val = {};
        val.value = item.values[activeIndex];
        val.displayValues = displayValues[activeIndex];
        this.values[index] = val;
        onSelected && onSelected(this.values);
      }

      const align = !multi ? 'center': item.align;

      return (
        <PickerCol key={index} items={displayValues} ref={`Col${index}`} align={align} multi={multi} onSelected={selected}></PickerCol>
      );
    };

    return (
      <PickerModal className={cls} {...other} innerClassName="picker-items" onOpen={this.open}>
        {cols.map(Col)}
        <div className="picker-center-highlight"></div>
      </PickerModal>
    );
  }
}
