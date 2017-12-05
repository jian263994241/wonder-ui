import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DOMScroller from 'zscroller/lib/DOMScroller';
import './Styled';

export default class ScrollView extends Component {

  static propsTypes = {
    scrollbars: PropTypes.bool,
    scrollingX: PropTypes.bool,
    scrollingY: PropTypes.bool,
    locking: PropTypes.bool,
    onScroll: PropTypes.func
  }

  static defaultProps = {
    scrollbars: false,
    scrollingX: false,
    scrollingY: true,
    locking: true
  }

  zscroller = null;

  componentDidMount(){
    const {scrollbars, scrollingX, scrollingY, locking, onScroll} = this.props;
    this.zscroller =  new DOMScroller(this.refs.root, {
      animationDuration: 200,
      scrollbars,
      scrollingX,
      scrollingY,
      locking,
      onScroll,
    });
  }

  componentWillUnmount(){
    this.destroy();
  }

  scrollTop = (animate = false)=>{
    this.zscroller.scroller.scrollTo(0, 0, animate);
  }

  scrollTo = (...arg)=>{
    this.zscroller.scroller.scrollTo(...arg);
  }

  destroy = ()=>{
    if(this.zscroller){
      this.zscroller.destroy();
    }
  }

  render(){

    const {
      style,
      scrollbars,
      scrollingX,
      scrollingY,
      locking,
      innerStyle,
      children,
      ...rest
    } = this.props

    const defaultStyle = {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
    }

    const containerStyle = {
      width: '100%',
      overflow: 'auto'
    }

    return (
      <div style={{...defaultStyle, ...style}} {...rest}>
        <div ref="root" style={{...containerStyle, ...innerStyle}}>{children}</div>
      </div>
    )
  }
}
