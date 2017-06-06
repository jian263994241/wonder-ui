import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mounted} from '../utils/mix'
import {Link} from 'react-router-dom'
import $ from '../utils/dom'


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
    blockLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
      blockLabel,
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

    const creactChildren = ()=>{
      let childrenNode;

      if(virtualItems){
        childrenNode = this.state.virtualItems.map(createItem);
      }else{
        childrenNode = children;
      }

      if(childrenNode){

        childrenNode = React.Children.map(childrenNode, (c, i)=>{
          if(!React.isValidElement(c)) return c;
          return React.cloneElement(c, {key: i, sortable, onSorted, accordion, mediaList});
        });

        if(React.isValidElement(childrenNode[0]) && childrenNode[0].type.uiName === 'ListItem'){
          return React.createElement('ul', null, childrenNode);
        }
      }

      return childrenNode;
    }

    return (
      <div className={cls} {...other} ref="List">
        {creactChildren()}
        {mounted(blockLabel, <div className="list-block-label"></div>)}
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
    link: PropTypes.bool,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    divider: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    badge: PropTypes.string,
    badgeColor: PropTypes.string,
    after: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    media: PropTypes.element,
    accordion: PropTypes.bool,
    expanded: PropTypes.bool,
    onAccordionOpen: PropTypes.func,
    onAccordionOpened: PropTypes.func,
    onAccordionClose: PropTypes.func,
    onAccordionClosed: PropTypes.func,
    to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    checkbox: PropTypes.bool,
    radio: PropTypes.bool,
    checked: PropTypes.bool,
    value: PropTypes.string,
    sortable: PropTypes.bool,
    onSorted: PropTypes.func
  }

  state = {
    sorting: false,
    expanded: false
  }

  constructor(props){
    super(props);
    const {expanded, accordion} = props;
    if(accordion) {
      this.state.expanded = expanded;
    }
  }

  componentWillReceiveProps(nextProps) {
    const {expanded, accordion} = nextProps;
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
      accordion,
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
      to,
      checkbox,
      radio,
      checked,
      value,
      name,
      className,
      children,
      ...other
    } = this.props;

    if(divider){
      return (
        <li className="item-divider">{title}</li>
      );
    }

    let content, itemMeida, itemAfter, itemTitle, itemTitleRow, type;

    const Div = (props)=>{
      if(props.to){
        return <Link {...props}/>;
      }else{
        return <div {...props}/>;
      }
    };

    const badgeElement = (badge, badgeColor)=>{
      if(!badge) return null;
      const badgeCss = classnames('badge', (badgeColor? `bg-${badgeColor}`: ''));
      return (
        <span className={badgeCss}>{badge}</span>
      );
    };

    if(mediaList) type = 'mediaList';
    if(accordion) type = 'accordion';
    if(checkbox) type = 'checkbox';
    if(radio) type = 'radio';

    itemMeida = mounted(media, <div className="item-media"/>);
    itemTitle = mounted(title, <div className="item-title"/>);
    itemAfter = mounted(after || badgeElement(badge, badgeColor), <div className="item-after"/>);

    const baseItem = ()=>(
      <Div className={classnames('item-content', {'item-link': link})} to={to}>
        {itemMeida}
        <div className="item-inner">
          {itemTitle}
          {itemAfter}
          {children}
        </div>
      </Div>
    );

    const mediaItem = ()=>(
      <Div className={classnames('item-content', {'item-link': link})} to={to}>
        {itemMeida}
        <div className="item-inner">
          <div className="item-title-row">{itemTitle}{itemAfter}</div>
          {mounted(subtitle, <div className="item-subtitle"/>)}
          {mounted(text, <div className="item-text"/>)}
        </div>
      </Div>
    );

    const accordionItem = ()=>(
      <div className={classnames('accordion-item', {'accordion-item-expanded': this.state.expanded})}>
        <div className="item-link item-content" onClick={this.accordionToggle}>
          {itemMeida}
          <div className="item-inner"> {itemTitle} </div>
        </div>
        <div className="accordion-item-content" ref="accordionItemContent"> {children} </div>
      </div>
    );

    const check_radio = (type)=> {
      const checkRadioClassName = classnames({ 'disabled': other.disabled }, `item-content label-${type}`);
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

    const customItem = ()=>(
      <div className="item-content">
        {itemMeida}
        <div className="item-inner">{children}</div>
      </div>
    );

    switch (type) {
      case 'mediaList':
        content = mediaItem();
        break;
      case 'accordion':
        content = accordionItem();
        break;
      case 'checkbox':
        content = check_radio('checkbox');
        break;
      case 'radio':
        content = check_radio('radio');
        break;
      default:
        content = baseItem();
    }

    return (
      <li className={className} {...other} ref="ListItem">
        {content}
        {sortable && <div className="sortable-handler" {...this.initSortable()}></div>}
      </li>
    )
  }
}

/**
* ListGroup
* Properties: className, style
* Event Properties: null
*/

export class ListGroup extends Component {

  static uiName = 'ListGroup'

  static propTypes = {
    className: PropTypes.string,
    title: React.PropTypes.string
  }

  render() {
    const {
      title,
      style,
      className,
      children,
      ...other
    } = this.props;

    return (
      <ul className={className} style={style} ref="ListGroup">
        {mounted(title, <li className="list-group-title"></li>)}
        {React.Children.map(children, (c, i)=>{
          if(!React.isValidElement(c)) return c;
          return React.cloneElement(c, {key: i, ...other});
        })}
      </ul>
    );
  }
}
