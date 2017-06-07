import React, {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mounted} from '../utils/mix'
import {Link} from 'react-router-dom'
import $ from '../utils/dom'



/**
* ListGroup
* Properties: className, style
* Event Properties: null
*/

export class ListGroup extends Component {

  static uiName = 'ListGroup'

  static propTypes = {
    title: React.PropTypes.string
  }

  render() {
    const {
      title,
      children,
      ...other
    } = this.props;

    return (
      <ul {...other}>
        {mounted(title, <li className="list-group-title"></li>)}
        {children}
      </ul>
    );
  }
}

export class ListLabel extends Component {
  static uiName = 'ListBlockLabel'

  static propTypes = {
    className: React.PropTypes.string
  }

  render() {
    const {
      className,
      children,
      ...other
    } = this.props;

    const cls = classnames('list-block-label', className);
    return (
      <div className={cls} {...other}>{children}</div>
    );
  }
}


export class ListButton extends Component {

  static uiName = 'ListButton'

  static propTypes = {
    className: React.PropTypes.string
  }

  render() {

    const {
      className,
      link,
      children,
      ...other
    } = this.props;

    const cls = classnames('item-link', 'list-button', className);

    const A = link? Link: 'a';

    return (
      <li>
        <A className={cls} to={link} {...other}>{children}</A>
      </li>
    );
  }

}

/**
* List
* Properties: className, style, mediaList
*/

export class List extends Component {

  static uiName = 'List'

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    inset: PropTypes.bool,
    tabletInset: PropTypes.bool,
    accordion: PropTypes.bool,
    virtualItems: React.PropTypes.array,
    sortable: PropTypes.bool,
    sortableOpened: PropTypes.bool,
    onSorted: PropTypes.func
  }

  state = {
    virtualItems: [],
    virtualItemsShowLength : 15,
    virtualItemsIndex: 1
  }

  componentDidMount() {
    const {virtualItems} = this.props;
    let {virtualItemsIndex, virtualItemsShowLength} = this.state;
    if(virtualItems){
      const listElem = this.listElem = $(this.refs.List);
      const pageContent = this.pageContent = listElem.parent('.page-content');
      const windowHeight = $(window).height();

      this.scrollHandler = (e)=>{
        if(listElem.height() - windowHeight + listElem.offset().top < 0){
            pageContent.off('scroll', this.scrollHandler);
            virtualItemsIndex++;
            this.setState({
              virtualItemsIndex: virtualItemsIndex,
              virtualItems: virtualItems.slice(0 , virtualItemsIndex * virtualItemsShowLength)
            }, ()=>pageContent.on('scroll', this.scrollHandler));
        }
      }

      this.setState({
        virtualItems: virtualItems.slice(0 , virtualItemsIndex * virtualItemsShowLength)
      }, ()=>pageContent.on('scroll', this.scrollHandler));
    }
  }

  componentWillUnmount() {
    if(this.pageContent){
      this.pageContent.off('scroll', this.scrollHandler);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.virtualItems != undefined){
      this.setState({
        virtualItems:  nextProps.virtualItems
      });
    }
  }


  render() {
    const {
      mediaList,
      accordion,
      inset,
      tabletInset,
      virtualItems,
      sortable,
      sortableOpened,
      onSorted,
      className,
      children,
      ...other
    } = this.props;

    const cls = classnames('list-block', {
      'media-list': mediaList,
      'sortable': sortable,
      'sortable-opened': sortableOpened,
      'inset': inset,
      'tablet-inset': tabletInset,
      'accordion-list': accordion
    }, className);

    const createItem = (item, index)=>{
      const {...props} = item;
      return <ListItem {...props} key={index}/>;
    }

    // const passProps = {sortable, onSorted};

    let childrenNode;

    if(virtualItems){
      childrenNode = this.state.virtualItems.map(createItem);
    }else{
      childrenNode = children;
    }

    if(sortable){
      childrenNode = React.Children.map(childrenNode, (child, index)=>{
        if(React.isValidElement(child) && child.type.uiName === 'ListItem'){
          if(child.type.uiName === 'ListItem'){
            return cloneElement(child, {key: child.toString(), sortable: sortableOpened, onSorted});
          }
        }else{
          return child;
        }
      })
    }

    if(childrenNode){
      if(React.isValidElement(childrenNode[0]) && childrenNode[0].type.uiName === 'ListItem'){
        childrenNode = <ListGroup>{childrenNode}</ListGroup>;
      }
    }

    return (
      <div className={cls} {...other} ref="List">
        {childrenNode}
      </div>
    );
  }

}

/**
* ListItem
* Properties: title, subtitle, text, divider, className, style, badge, badgeColor, after
* Event Properties: null
*/

export class ListItem extends Component {

  static uiName = 'ListItem'

  static propTypes = {
    title: PropTypes.string,
    // link: PropTypes.bool,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    divider: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    badge: PropTypes.string,
    badgeColor: PropTypes.string,
    after: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    media: PropTypes.element,
    accordionItem: PropTypes.bool,
    expanded: PropTypes.bool,
    onAccordionOpen: PropTypes.func,
    onAccordionOpened: PropTypes.func,
    onAccordionClose: PropTypes.func,
    onAccordionClosed: PropTypes.func,
    link: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.string]),
    checkbox: PropTypes.bool,
    radio: PropTypes.bool,
    checked: PropTypes.bool,
    value: PropTypes.string,
    sortable: PropTypes.bool,
    onSorted: PropTypes.func
  }

  state = {
    expanded: this.props.expanded
  }


  componentWillReceiveProps(nextProps) {
    const {expanded, accordionItem} = nextProps;
    this.setState({ expanded });
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

        if (!isTouched || !isMoved) {
            isTouched = false;
            isMoved = false;
            return;
        }
        const {onSorted} = this.props;
        e.preventDefault();
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

  accordionToggle = ()=>{
    const {onAccordionOpen, onAccordionOpened, onAccordionClose, onAccordionClosed} = this.props;
    const expanded = !this.state.expanded;

    const accordionItemContent = this.refs.accordionItemContent;

    if(expanded){
      accordionItemContent.style.height = accordionItemContent.scrollHeight + 'px';
      onAccordionOpen && onAccordionOpen();
    }else{
      accordionItemContent.style.height = '0px';
      onAccordionClose && onAccordionClose();
    }

    this.setState({ expanded });

    $(accordionItemContent).transitionEnd(()=>{
      if(expanded){
        onAccordionOpened && onAccordionOpened();
      }else{
        onAccordionClosed && onAccordionClosed();
      }
    });
  }

  render (){
    const {
      accordionItem,
      expanded,
      onAccordionOpen,
      onAccordionOpened,
      onAccordionClose,
      onAccordionClosed,
      onSorted,
      sortable,
      title,
      link,
      subtitle,
      text,
      divider,
      badge,
      badgeColor,
      after,
      media,
      mediaList,
      checkbox,
      radio,
      checked,
      value,
      name,
      className,
      children,
      ...other
    } = this.props;

    const cls = classnames({
      'item-divider': divider,
      'item-content': !divider,
      'item-link': link || accordionItem,
    });

    if(divider){
      return (
        <li className={cls} {...other}></li>
      );
    }

    let content, itemMeida, itemAfter, itemTitle, itemTitleRow, type;

    if(subtitle || text) type = 'mediaList';
    if(accordionItem) type = 'accordionItem';
    if(checkbox) type = 'checkbox';
    if(radio) type = 'radio';


    const Div = (typeof link === 'object' || typeof link === 'string' && link != '') ? Link: 'div';

    const badgeElement = (badge, badgeColor = 'gray')=>{
      if(!badge) return null;
      const badgeCss = classnames('badge', `bg-${badgeColor}`);
      return (
        <span className={badgeCss}>{badge}</span>
      );
    };

    itemMeida = mounted(media, <div className="item-media"/>);
    itemTitle = mounted(title, <div className="item-title"/>);
    itemAfter = mounted(after || badgeElement(badge, badgeColor), <div className="item-after"/>);

    const createBaseItem = ()=>(
      <Div className={cls} to={link}>
        {itemMeida}
        <div className="item-inner">
          {itemTitle}
          {children}
          {itemAfter}
        </div>
      </Div>
    );

    const createMediaItem = ()=>(
      <Div className={cls} to={link}>
        {itemMeida}
        <div className="item-inner">
          <div className="item-title-row">{itemTitle}{itemAfter}</div>
          {mounted(subtitle, <div className="item-subtitle"/>)}
          {mounted(text, <div className="item-text"/>)}
        </div>
      </Div>
    );

    const createAccordionItem = ()=>(
      <div className={classnames('accordion-item', {'accordion-item-expanded': this.state.expanded})}>
        <div className={cls} onClick={this.accordionToggle}>
          {itemMeida}
          <div className="item-inner"> {itemTitle} </div>
        </div>
        <div className="accordion-item-content" ref="accordionItemContent"> {children} </div>
      </div>
    );

    const createCheckRadio = (type)=> {
      const checkRadioClassName = classnames(cls, { 'disabled': other.disabled }, `label-${type}`);
      return (
        <label className={checkRadioClassName}>
          <input type={type} defaultValue={value} name={name} checked={checked || false}  {...other}/>
          <div className="item-media"> <i className={`icon icon-form-${type}`}></i> </div>
          {mediaList && (type === 'radio') && itemMeida}
          {mediaList && (
            <div className="item-inner">
              <div className="item-title-row">{itemTitle}{itemAfter}</div>
              {mounted(subtitle, <div className="item-subtitle"/>)}
              {mounted(text, <div className="item-text"/>)}
            </div>
          )}
          { !mediaList && <div className="item-inner">{itemTitle}{itemAfter}</div> }
        </label>
      );
    };


    switch (type) {
      case 'mediaList':
        content = createMediaItem();
        break;
      case 'accordionItem':
        content = createAccordionItem();
        break;
      case 'checkbox':
        content = createCheckRadio('checkbox');
        break;
      case 'radio':
        content = createCheckRadio('radio');
        break;
      default:
        content = createBaseItem();
    }

    return (
      <li ref="ListItem">
        {content}
        {sortable && <div className="sortable-handler" {...this.initSortable()}></div>}
      </li>
    )
  }
}
