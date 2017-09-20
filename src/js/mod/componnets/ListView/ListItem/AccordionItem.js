import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class AccordionItem extends Component {

  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    media: PropTypes.any,
    onAccordionOpened: PropTypes.func,
    onAccordionClosed: PropTypes.func
  }

  static contextTypes = {
    currentActiveKey: PropTypes.string,
  }

  expanded = false;

  componentDidMount() {
    const content = this.refs.content;
    content.style.height = '0px';
  }

  componentDidUpdate(prevProps, prevState, prevContext){
    const {onAccordionOpen, onAccordionClose, itemKey} = this.props;
    this.expanded = (this.context.currentActiveKey === itemKey);
    const content = this.refs.content;
    if(this.expanded){
      content.style.height = content.scrollHeight + 'px';
      onAccordionOpen && onAccordionOpen();
    }else{
      content.style.height = '0px';
      onAccordionClose && onAccordionClose();
    }
  }

  render() {

    const {
      accordion,
      className,
      title,
      media,
      itemKey,
      onAccordionOpened,
      onAccordionClosed,
      children,
      group,
      ...rest
    } = this.props;

    const currentActiveKey = this.context.currentActiveKey;

    const cls = classnames({
      'accordion-item': true,
      'accordion-item-expanded': currentActiveKey === itemKey
    }, className);

    const transitionEnd = ()=>{
      if(this.expanded){
        onAccordionOpened && onAccordionOpened();
      }else{
        onAccordionClosed && onAccordionClosed();
      }
    }

    const clickHandler = ()=>{
      if(currentActiveKey === itemKey){
        group.setState({activeKey: ''});
      }else{
        group.setState({activeKey: itemKey});
      }    
    };

    return (
      <li className={cls} ref="accordionItem">
        <a className="item-content item-link" onClick={clickHandler}>
          {media && <div className="item-media">{media}</div>}
          <div className="item-inner">
            <div className="item-title">{title}</div>
          </div>
        </a>
        <div className="accordion-item-content" onTransitionEnd={transitionEnd} ref="content"> {children} </div>
      </li>
    );
  }
}
