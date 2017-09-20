import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import $ from 'dom7'

export default class MediaItem extends Component {

  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    after: PropTypes.any,
    media: PropTypes.any,
    component: PropTypes.any,
    link: PropTypes.bool
  }

  static defaultProps = {
    component: 'div'
  }

  initSortable = ()=>{
    let isTouched, isMoved, touchStartY, touchesDiff, sortingEl, sortingElHeight, sortingItems, minTop, maxTop, insertAfter, insertBefore, sortableContainer, startIndex;

    const handleTouchStart = (e)=>{
      isMoved = false;
      isTouched = true;
      touchStartY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      /*jshint validthis:true */
      sortingEl = $(this.refs.ListItem);
      startIndex = sortingEl.index();
      sortingItems = sortingEl.parent().find('li');
      sortableContainer = sortingEl.parents('.sortable');
      e.preventDefault();
    }

    const handleTouchMove = (e)=>{
        if (!isTouched || !sortingEl) return;
        let pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        let pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (!isMoved) {
            sortingEl.addClass('sorting');
            sortableContainer.addClass('sortable-sorting');
            minTop = sortingEl[0].offsetTop;
            maxTop = sortingEl.parent().height() - sortingEl[0].offsetTop - sortingEl.height();
            sortingElHeight = sortingEl[0].offsetHeight;
        }
        isMoved = true;

        e.preventDefault();
        // e.f7PreventPanelSwipe = true;
        touchesDiff = pageY - touchStartY;
        let translate = touchesDiff;
        if (translate < -minTop) translate = -minTop;
        if (translate > maxTop) translate = maxTop;
        sortingEl.transform('translate3d(0,' + translate + 'px,0)');

        insertBefore = insertAfter = undefined;

        sortingItems.each(function () {
            let currentEl = $(this);
            if (currentEl[0] === sortingEl[0]) return;
            let currentElOffset = currentEl[0].offsetTop;
            let currentElHeight = currentEl.height();
            let sortingElOffset = sortingEl[0].offsetTop + translate;

            if ((sortingElOffset >= currentElOffset - currentElHeight / 2) && sortingEl.index() < currentEl.index()) {
                currentEl.transform('translate3d(0, '+(-sortingElHeight)+'px,0)');
                insertAfter = currentEl;
                insertBefore = undefined;
            }
            else if ((sortingElOffset <= currentElOffset + currentElHeight / 2) && sortingEl.index() > currentEl.index()) {
                currentEl.transform('translate3d(0, '+(sortingElHeight)+'px,0)');
                insertAfter = undefined;
                if (!insertBefore) insertBefore = currentEl;
            }
            else {
                $(this).transform('translate3d(0, 0%,0)');
            }
        });
    }
    const handleTouchEnd = (e)=>{
      e.preventDefault();
      const {onSorted} = this.props;
      if (!isTouched || !isMoved) {
          isTouched = false;
          isMoved = false;
          return;
      }

      sortingItems.transform('');
      sortingEl.removeClass('sorting');
      sortableContainer.removeClass('sortable-sorting');
      let virtualList, oldIndex, newIndex;
      if (insertAfter) {
          sortingEl.insertAfter(insertAfter);
          onSorted && onSorted({startIndex: startIndex, newIndex: sortingEl.index()});
      }
      if (insertBefore) {
          sortingEl.insertBefore(insertBefore);
          onSorted && onSorted({startIndex: startIndex, newIndex: sortingEl.index()});
      }

      insertAfter = insertBefore = undefined;
      isTouched = false;
      isMoved = false;
    }

    return {
      onTouchStart : handleTouchStart,
      onTouchMove : handleTouchMove,
      onTouchEnd : handleTouchEnd
    };
  }

  render() {

    const {
      className,
      title,
      subtitle,
      text,
      media,
      after,
      children,
      component,
      divider,
      sortable,
      onSorted,
      link,
      align,
      itemKey,
      group,
      ...rest
    } = this.props;

    const cls = classnames({
      'item-content': true,
      'item-link': link
    }, align && `align-${align}` ,className);

    const Element = component;


    if(divider){
      return (
        <li className="item-divider">{children}</li>
      )
    }


    return (
      <li ref="ListItem">
        <Element className={cls} {...rest}>
          {media && <div className="item-media">{media}</div>}
          {
            (subtitle || text) ? (
              <div className="item-inner">
                <div className="item-title-row">
                  {title && <div className="item-title">{title}</div>}
                  {after && <div className="item-after">{after}</div>}
                </div>
                {subtitle && <div className="item-subtitle">{subtitle}</div>}
                {text && <div className="item-text">{text}</div>}
              </div>
            ) : (
              <div className="item-inner">
                {title && <div className="item-title">{title}</div>}
                {children}
                {after && <div className="item-after">{after}</div>}
              </div>
            )
          }
        </Element>
        {sortable && <div className="sortable-handler" {...this.initSortable()}></div>}
      </li>
    );
  }
}
