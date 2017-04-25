import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mounted} from '../utils/mix'
import {Link} from '../utils/Router'
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
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    accordion: PropTypes.bool,
    virtualItems: React.PropTypes.array
  }

  state = {
    virtualItems: [],
    virtualItemsShowLength : 20,
    virtualItemsIndex: 1
  }

  componentDidMount() {
    const {virtualItems} = this.props;
    let {virtualItemsIndex, virtualItemsShowLength} = this.state;
    if(virtualItems){
      const listElem = this.listElem = $(this.refs.list);
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
      this.state.virtualItems = nextProps.virtualItems;
    }
  }


  render() {
    const {
      mediaList,
      accordion,
      inset,
      tabletInset,
      label,
      virtualItems,
      className,
      style,
      children,
      ...other
    } = this.props;

    const cls = classnames('list-block', (mediaList ? 'media-list': ''), (inset ? 'inset': ''), (tabletInset ? 'tablet-inset': ''), (accordion ? 'accordion-list': ''), className);

    const IndexClild = React.Children.toArray(children)[0];

    let childrenWrap = children, blockLabel;

    if(label){
      blockLabel = (
        <div className="list-block-label">{label}</div>
      )
    }


    if(IndexClild && IndexClild.type.uiName === 'ListItem') {
      childrenWrap = (
        <ul>{children}</ul>
      )
    }


    const createItem = (item, index)=>{
      const {...props} = item;
      return <ListItem {...props} key={index}></ListItem>;
    }

    if(virtualItems){

      childrenWrap = (
        <ul>
          {this.state.virtualItems.map(createItem)}
        </ul>
      )
    }

    return (
      <div className={cls} style={style} {...other} ref="list">
        {childrenWrap}
        {blockLabel}
      </div>
    );
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
    style: PropTypes.object,
    className: PropTypes.string,
    title: React.PropTypes.string.isRequired
  }

  render() {
    const {
      title,
      className,
      style,
      children,
      ...other
    } = this.props;

    return (
      <ul className={className} style={style} {...other}>
        <li className="list-group-title">{title}</li>
        {children}
      </ul>
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
    value: PropTypes.string
  }

  constructor(props){
    super(props);
    this.state = {} ;

    if(props.accordion) {
      this.state.expanded = this.props.expanded;
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.expanded != undefined){
      this.state.expanded = nextProps.expanded;
    }
  }
  render (){
    const {
      accordion,
      expanded,
      onAccordionOpen,
      onAccordionOpened,
      onAccordionClose,
      onAccordionClosed,
      title,
      link,
      subtitle,
      text,
      divider,
      badge,
      badgeColor,
      after,
      media,
      to,
      checkbox,
      radio,
      checked,
      value,
      name,
      className,
      style,
      children,
      ...other
    } = this.props;


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

    if(subtitle || text) type = 'mediaItem';
    if(divider) type = 'divider';
    if(accordion) type = 'accordion';
    if(checkbox) type = 'checkbox';
    if(radio) type = 'radio';
    if(!accordion && children) type= 'custom';

    itemMeida = mounted(media, <div className="item-media"/>);
    itemTitle = mounted(title, <div className="item-title"/>);
    itemAfter = mounted(after || badgeElement(badge, badgeColor), <div className="item-after"/>);

    const baseItem = ()=>{
      const itemCss = classnames('item-content', (link?'item-link':''));
      return (
        <Div className={itemCss} to={to}>
          {itemMeida}
          <div className="item-inner">
            {itemTitle}
            {itemAfter}
          </div>
        </Div>
      );
    };

    const mediaItem = ()=>{
      const itemCss = classnames('item-content', (link?'item-link':''));
      return (
        <Div className={itemCss} to={to}>
          {itemMeida}
          <div className="item-inner">
            <div className="item-title-row">{itemTitle}{itemAfter}</div>
            {mounted(subtitle, <div className="item-subtitle"/>)}
            {mounted(text, <div className="item-text"/>)}
          </div>
        </Div>
      );
    };

    const dividerItem = ()=>(
      <div className="item-divider">{title}</div>
    );

    const accordionItem = ()=>{
      const itemCss = classnames('accordion-item', (this.state.expanded?'accordion-item-expanded':''));
      const accordionHandler = ()=>{
        const {expanded} = this.state;
        if(expanded){
          onAccordionOpen && onAccordionOpen();
        }else{
          onAccordionClose && onAccordionClose();
        }
        this.setState({
          expanded : !expanded
        }, ()=>{
          if(expanded){
            onAccordionOpened && onAccordionOpened();
          }else{
            onAccordionClosed && onAccordionClosed();
          }
        });
      }
      return (
        <div className={itemCss}>
          <div className="item-link item-content" onClick={accordionHandler}>
            {itemMeida}
            <div className="item-inner">
              {itemTitle}
            </div>
          </div>
          <div className="accordion-item-content">
            {children}
          </div>
        </div>
      );
    }

    const checkboxItem = ()=>{
      if(media){
        return (
          <label className="label-checkbox item-content">
            <input type="checkbox" defaultValue={value} name={name} defaultChecked={checked} {...other}/>
            <div className="item-media">
              <i className="icon icon-form-checkbox"></i>
            </div>
            <div className="item-inner">
              <div className="item-title-row">{itemTitle}{itemAfter}</div>
              {mounted(subtitle, <div className="item-subtitle"/>)}
              {mounted(text, <div className="item-text"/>)}
            </div>
          </label>
        )
      }else{
        return (
          <label className="label-checkbox item-content">
            <input type="checkbox" defaultValue={value} name={name} defaultChecked={checked} {...other}/>
            <div className="item-media">
              <i className="icon icon-form-checkbox"></i>
            </div>
            <div className="item-inner">{itemTitle}</div>
          </label>
        )
      }
    }

    const radioItem = ()=>{
      if(media){
        <label className="label-radio item-content">
          <input type="radio" defaultValue={value} name={name} defaultChecked={checked} {...other}/>
          {itemMeida}
          <div className="item-inner">
            <div className="item-title-row">{itemTitle}{itemAfter}</div>
            {mounted(subtitle, <div className="item-subtitle"/>)}
            {mounted(text, <div className="item-text"/>)}
          </div>
        </label>
      }else{
        return (
          <label className="label-radio item-content">
            <input type="radio" defaultValue={value} name={name} defaultChecked={checked} {...other}/>
            <div className="item-inner">{itemTitle}</div>
          </label>
        )
      }

    }

    const customItem = ()=>{
      return (
        <div className="item-content">
          {itemMeida}
          <div className="item-inner">{children}</div>
        </div>
      );
    }

    switch (type) {
      case 'mediaItem':
        content = mediaItem();
        break;
      case 'divider':
        content = dividerItem();
        break;
      case 'accordion':
        content = accordionItem();
        break;
      case 'checkbox':
        content = checkboxItem();
        break;
      case 'radio':
        content = radioItem();
        break;
      case 'custom':
        content = customItem();
        break;
      default:
        content = baseItem();
    }

    return (
      <li className={className} style={style} {...other}>
        {content}
      </li>
    )
  }
}

/**
* ListLabel
* Properties: className, style
* Event Properties: null
*/

export class ListLabel extends Component {
  static uiName = 'ListLabel'

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }
  render() {
    const {
      className,
      style,
      children,
      ...other
    } = this.props;

    const cls = classnames('list-block-label', className);

    return (
      <div className={cls}>{children}</div>
    );
  }
}
