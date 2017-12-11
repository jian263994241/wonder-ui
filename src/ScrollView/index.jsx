import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DOMScroller from 'zscroller/lib/DOMScroller';
import {StylePreloader} from '../Preloader/Styled';
import {Container, PullToRefreshContent, PullToRefreshLayer, PullToRefreshArrow} from './Styled';

export default class ScrollView extends Component {

  static propsTypes = {
    scrollbars: PropTypes.bool,
    scrollingX: PropTypes.bool,
    scrollingY: PropTypes.bool,
    locking: PropTypes.bool,
    onScroll: PropTypes.func,
    pullToRefresh: PropTypes.bool,
    onRefresh: PropTypes.func,
  }

  static defaultProps = {
    scrollbars: false,
    scrollingX: false,
    scrollingY: true,
    locking: true
  }

  zscroller = null;

  state = {
    stage : null
  }

  componentDidMount(){
    const {scrollbars, scrollingX, scrollingY, locking, onScroll, pullToRefresh} = this.props;
    this.zscroller =  new DOMScroller(this.refs.root, {
      animationDuration: 200,
      scrollbars,
      scrollingX,
      scrollingY,
      locking,
      onScroll,
    });

    if(pullToRefresh){
      this.pullToRefreshInit();
    }

  }

  pullToRefreshInit = ()=>{
    const scroller = this.zscroller.scroller;
    const {onRefresh} = this.props;

    scroller.activatePullToRefresh(50, ()=>{
      //start
      this.setState({ stage: 'pull-up' })
    }, ()=>{
      //reset
      this.setState({ stage: null })
    }, ()=>{
      //end
      this.setState({ stage: 'refreshing' });

      onRefresh && onRefresh(scroller);

    })
  }

  renderPullToRefresh = ()=>{
    const {
      scrollbars,
      scrollingX,
      scrollingY,
      locking,
      innerStyle,
      children,
      ...rest
    } = this.props

    return (
      <PullToRefreshContent stage={this.state.stage} {...rest}>
        <div ref="root" style={innerStyle}>
          <PullToRefreshLayer>
            <StylePreloader/>
            <PullToRefreshArrow/>
          </PullToRefreshLayer>
          {children}
        </div>
      </PullToRefreshContent>
    )
  }

  renderBase = ()=>{
    const {
      scrollbars,
      scrollingX,
      scrollingY,
      locking,
      innerStyle,
      children,
      ...rest
    } = this.props;
    return (
      <Container {...rest}>
        <div ref="root" style={innerStyle}>
          {children}
        </div>
      </Container>
    )
  }


  componentWillUnmount(){
    this.zscroller.destroy();
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
    return this.props.pullToRefresh? this.renderPullToRefresh(): this.renderBase()
  }
}
