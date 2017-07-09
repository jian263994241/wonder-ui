import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import $ from '../utils/dom'
import PickerModal from './PickerModal'


export default class Picker extends Component {

  static uiName = 'Picker';

  static propTypes = {
    className: PropTypes.string,
    cols: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    rotateEffect: PropTypes.bool,
    updateValuesOnMomentum: PropTypes.bool,
    updateValuesOnTouchmove: PropTypes.bool,
    momentumRatio: PropTypes.number,
    inline: PropTypes.bool
  }

  static defaultProps = {
    rotateEffect: false,
    momentumRatio: 7,
    updateValuesOnMomentum: false,
    updateValuesOnTouchmove: true,
    value: undefined,
    inline: false
  }

  constructor (props){
    super(props);
    this.cols = [];
  }

  initPickerCol = (colElement, updateItems)=>{
    var p = this;
    var colContainer = $(colElement);
    var colIndex = colContainer.index();
    var col = p.cols[colIndex];
    if (col.divider) return;
    col.container = colContainer;
    col.wrapper = col.container.find('.picker-items-col-wrapper');
    col.items = col.wrapper.find('.picker-item');

    var i, j;
    var wrapperHeight, itemHeight, itemsHeight, minTranslate, maxTranslate;
    col.replaceValues = function (values, displayValues) {
        col.destroyEvents();
        col.values = values;
        col.displayValues = displayValues;
        var newItemsHTML = p.columnHTML(col, true);
        col.wrapper.html(newItemsHTML);
        col.items = col.wrapper.find('.picker-item');
        col.calcSize();
        col.setValue(col.values[0], 0, true);
        col.initEvents();
    };
    var resizeTimeout;
    col.calcSize = function () {
        if (p.params.rotateEffect) {
            col.container.removeClass('picker-items-col-absolute');
            if (!col.width) col.container.css({width:''});
        }
        var colWidth, colHeight;
        colWidth = 0;
        colHeight = col.container[0].offsetHeight;
        wrapperHeight = col.wrapper[0].offsetHeight;
        itemHeight = col.items[0].offsetHeight;
        itemsHeight = itemHeight * col.items.length;
        minTranslate = colHeight / 2 - itemsHeight + itemHeight / 2;
        maxTranslate = colHeight / 2 - itemHeight / 2;
        if (col.width) {
            colWidth = col.width;
            if (parseInt(colWidth, 10) === colWidth) colWidth = colWidth + 'px';
            col.container.css({width: colWidth});
        }
        if (p.params.rotateEffect) {
            if (!col.width) {
                col.items.each(function () {
                    var item = $(this).children('span');
                    colWidth = Math.max(colWidth, item[0].offsetWidth);
                });
                col.container.css({width: (colWidth + 2) + 'px'});
            }
            col.container.addClass('picker-items-col-absolute');
        }
    };
    col.calcSize();

    col.wrapper.transform('translate3d(0,' + maxTranslate + 'px,0)').transition(0);


    var activeIndex = 0;
    var animationFrameId;

    // Set Value Function
    col.setValue = function (newValue, transition, valueCallbacks) {
        if (typeof transition === 'undefined') transition = '';
        var newActiveIndex = col.wrapper.find('.picker-item[data-picker-value="' + newValue + '"]').index();
        if(typeof newActiveIndex === 'undefined' || newActiveIndex === -1) {
            return;
        }
        var newTranslate = -newActiveIndex * itemHeight + maxTranslate;
        // Update wrapper
        col.wrapper.transition(transition);
        col.wrapper.transform('translate3d(0,' + (newTranslate) + 'px,0)');

        // Watch items
        if (p.params.updateValuesOnMomentum && col.activeIndex && col.activeIndex !== newActiveIndex ) {
            $.cancelAnimationFrame(animationFrameId);
            col.wrapper.transitionEnd(function(){
                $.cancelAnimationFrame(animationFrameId);
            });
            updateDuringScroll();
        }

        // Update items
        col.updateItems(newActiveIndex, newTranslate, transition, valueCallbacks);
    };

    col.updateItems = function (activeIndex, translate, transition, valueCallbacks) {
        if (typeof translate === 'undefined') {
            translate = $.getTranslate(col.wrapper[0], 'y');
        }
        if(typeof activeIndex === 'undefined') activeIndex = -Math.round((translate - maxTranslate)/itemHeight);
        if (activeIndex < 0) activeIndex = 0;
        if (activeIndex >= col.items.length) activeIndex = col.items.length - 1;
        var previousActiveIndex = col.activeIndex;
        col.activeIndex = activeIndex;
        col.wrapper.find('.picker-selected').removeClass('picker-selected');

        col.items.transition(transition);

        var selectedItem = col.items.eq(activeIndex).addClass('picker-selected').transform('');

        // Set 3D rotate effect
        if (p.params.rotateEffect) {
            var percentage = (translate - (Math.floor((translate - maxTranslate)/itemHeight) * itemHeight + maxTranslate)) / itemHeight;

            col.items.each(function () {
                var item = $(this);
                var itemOffsetTop = item.index() * itemHeight;
                var translateOffset = maxTranslate - translate;
                var itemOffset = itemOffsetTop - translateOffset;
                var percentage = itemOffset / itemHeight;

                var itemsFit = Math.ceil(col.height / itemHeight / 2) + 1;

                var angle = (-18*percentage);
                if (angle > 180) angle = 180;
                if (angle < -180) angle = -180;
                // Far class
                if (Math.abs(percentage) > itemsFit) item.addClass('picker-item-far');
                else item.removeClass('picker-item-far');
                // Set transform
                item.transform('translate3d(0, ' + (-translate + maxTranslate) + 'px, ' + (originBug ? -110 : 0) + 'px) rotateX(' + angle + 'deg)');
            });
        }

        if (valueCallbacks || typeof valueCallbacks === 'undefined') {
            // Update values
            col.value = selectedItem.attr('data-picker-value');
            col.displayValue = col.displayValues ? col.displayValues[activeIndex] : col.value;
            // On change callback
            if (previousActiveIndex !== activeIndex) {
                if (col.onChange) {
                    col.onChange(p, col.value, col.displayValue);
                }
                p.updateValue();
            }
        }
    };

    function updateDuringScroll() {
        animationFrameId = $.requestAnimationFrame(function () {
            col.updateItems(undefined, undefined, 0);
            updateDuringScroll();
        });
    }

    // Update items on init
    if (updateItems) col.updateItems(0, maxTranslate, 0);

    var allowItemClick = true;
    var isTouched, isMoved, touchStartY, touchCurrentY, touchStartTime, touchEndTime, startTranslate, returnTo, currentTranslate, prevTranslate, velocityTranslate, velocityTime;
    function handleTouchStart (e) {
        if (isMoved || isTouched) return;
        e.preventDefault();
        isTouched = true;
        touchStartY = touchCurrentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        touchStartTime = (new Date()).getTime();

        allowItemClick = true;
        startTranslate = currentTranslate = $.getTranslate(col.wrapper[0], 'y');
    }
    function handleTouchMove (e) {
        if (!isTouched) return;
        e.preventDefault();
        allowItemClick = false;
        touchCurrentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (!isMoved) {
            // First move
            $.cancelAnimationFrame(animationFrameId);
            isMoved = true;
            startTranslate = currentTranslate = $.getTranslate(col.wrapper[0], 'y');
            col.wrapper.transition(0);
        }

        var diff = touchCurrentY - touchStartY;
        currentTranslate = startTranslate + diff;
        returnTo = undefined;

        // Normalize translate
        if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate - Math.pow(minTranslate - currentTranslate, 0.8);
            returnTo = 'min';
        }
        if (currentTranslate > maxTranslate) {
            currentTranslate = maxTranslate + Math.pow(currentTranslate - maxTranslate, 0.8);
            returnTo = 'max';
        }
        // Transform wrapper
        col.wrapper.transform('translate3d(0,' + currentTranslate + 'px,0)');

        // Update items
        col.updateItems(undefined, currentTranslate, 0, p.params.updateValuesOnTouchmove);

        // Calc velocity
        velocityTranslate = currentTranslate - prevTranslate || currentTranslate;
        velocityTime = (new Date()).getTime();
        prevTranslate = currentTranslate;
    }
    function handleTouchEnd (e) {
        if (!isTouched || !isMoved) {
            isTouched = isMoved = false;
            return;
        }
        isTouched = isMoved = false;
        col.wrapper.transition('');
        if (returnTo) {
            if (returnTo === 'min') {
                col.wrapper.transform('translate3d(0,' + minTranslate + 'px,0)');
            }
            else col.wrapper.transform('translate3d(0,' + maxTranslate + 'px,0)');
        }
        touchEndTime = new Date().getTime();
        var velocity, newTranslate;
        if (touchEndTime - touchStartTime > 300) {
            newTranslate = currentTranslate;
        }
        else {
            velocity = Math.abs(velocityTranslate / (touchEndTime - velocityTime));
            newTranslate = currentTranslate + velocityTranslate * p.params.momentumRatio;
        }

        newTranslate = Math.max(Math.min(newTranslate, maxTranslate), minTranslate);

        // Active Index
        var activeIndex = -Math.floor((newTranslate - maxTranslate)/itemHeight);

        // Normalize translate
        if (!p.params.freeMode) newTranslate = -activeIndex * itemHeight + maxTranslate;

        // Transform wrapper
        col.wrapper.transform('translate3d(0,' + (parseInt(newTranslate,10)) + 'px,0)');

        // Update items
        col.updateItems(activeIndex, newTranslate, '', true);

        // Watch items
        if (p.params.updateValuesOnMomentum) {
            updateDuringScroll();
            col.wrapper.transitionEnd(function(){
                $.cancelAnimationFrame(animationFrameId);
            });
        }

        // Allow click
        setTimeout(function () {
            allowItemClick = true;
        }, 100);
    }

    function handleClick(e) {
        if (!allowItemClick) return;
        $.cancelAnimationFrame(animationFrameId);
        /*jshint validthis:true */
        var value = $(this).attr('data-picker-value');
        col.setValue(value);
    }

    col.initEvents = function (detach) {
        var method = detach ? 'off' : 'on';
        var activeListener = app.support.passiveListener ? {passive: false, capture: false} : false;
        col.container[method](app.touchEvents.start, handleTouchStart, activeListener);
        col.container[method](app.touchEvents.move, handleTouchMove, activeListener);
        col.container[method](app.touchEvents.end, handleTouchEnd, activeListener);
        col.items[method]('click', handleClick);
    };
    col.destroyEvents = function () {
        col.initEvents(true);
    };

    col.container[0].f7DestroyPickerCol = function () {
        col.destroyEvents();
    };

    col.initEvents();
  }

  values = []

  render() {

    const {
      visible,
      cols,
      rotateEffect,
      momentumRatio,
      updateValuesOnMomentum,
      updateValuesOnTouchmove,
      value,
      inline,
      className,
      children,
      ...other
    } = this.props;

    const cls = classnames({
      'picker-3d': rotateEffect,
      'picker-columns': true
    }, className);

    const colsHTML = [];

    const columnHTML = (col, colIndex, onlyItems)=>{
      if(col.divider){
        return (
          <div
            className={classnames(
              'picker-items-col picker-items-col-divider',
              (col.textAlign ? 'picker-items-col-' + col.textAlign : ''),
              col.cssClass,
            )}
          >{col.content}</div>
        )
      }

      const columnItemsHTML = col.values.map((value, index)=>(
        <div className="picker-item" data-picker-value={value} key={value+index}>
          <span>{col.displayValues? col.displayValues[j]: value}</span>
        </div>
      ));

      if(onlyItems){
        return columnItemsHTML;
      }

      return (
        <div
          key={'wrapper'+ colIndex}
          className={
            classnames(
              'picker-items-col',
              (col.textAlign ? 'picker-items-col-' + col.textAlign : ''),
              col.cssClass
            )
          }
          >
          <div className="picker-items-col-wrapper">
            {columnItemsHTML}
          </div>
        </div>
      )
    }

    cols.forEach(function(col, index){
      colsHTML.push(columnHTML(col, index));
    })

    return (
      <PickerModal
        visible={visible}
        className={cls}
        {...other}
        innerCss="picker-items"
      >
        {colsHTML}
        <div className="picker-center-highlight"></div>
      </PickerModal>
    );
  }
}
