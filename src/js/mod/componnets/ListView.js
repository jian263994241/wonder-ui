import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mounted} from '../utils/mix'
import {Link} from '../utils/Router'
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
    accordion: PropTypes.bool
  }

  render() {
    const {
      mediaList,
      accordion,
      inset,
      tabletInset,
      label,
      className,
      style,
      children,
      ...other
    } = this.props;

    const cls = classnames('list-block', (mediaList ? 'media-list': ''), (inset ? 'inset': ''), (tabletInset ? 'tablet-inset': ''), (accordion ? 'accordion-list': ''), className);

    const IndexClild = React.Children.toArray(children)[0];

    let childrenWrap = children, blockLabel;

    if(IndexClild && IndexClild.type.uiName === 'ListItem') {
      childrenWrap = (
        <ul>{children}</ul>
      )
    }

    if(label){
      blockLabel = (
        <div className="list-block-label">{label}</div>
      )
    }

    return (
      <div className={cls} style={style} {...other}>
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
    img: PropTypes.element,
    accordion: PropTypes.bool,
    expanded: PropTypes.bool,
    onAccordionOpen: PropTypes.func,
    onAccordionOpened: PropTypes.func,
    onAccordionClose: PropTypes.func,
    onAccordionClosed: PropTypes.func,
    to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
      img,
      to,
      className,
      style,
      children,
      ...other
    } = this.props;


    let content, itemMeida, itemAfter, itemTitle, itemTitleRow, type;


    if(subtitle || text) type = 'mediaItem';
    if(divider) type = 'divider';
    if(accordion) type = 'accordion';

    const badgeElement = ()=>{
      if(!badge) return null;
      const badgeCss = classnames('badge', (badgeColor? `bg-${badgeColor}`: ''));
      return (
        <span className={badgeCss}>{badge}</span>
      );
    }

    itemMeida = mounted(img, <div className="item-media"/>);
    itemTitle = mounted(title, <div className="item-title"/>);
    itemAfter = mounted(after || badgeElement(), <div className="item-after"/>);

    const Div = (props)=>{
      const { ...other } = props;

      if(to){
        return <Link to={to} {...other}/>;
      }else{
        return <div {...other}/>;
      }
    };

    const baseItem = ()=>{
      const itemCss = classnames('item-content', (link?'item-link':''));
      return (
        <Div className={itemCss}>
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
        <Div className={itemCss}>
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
