import React, { Component, Children } from 'react';
import { WUI_page, WUI_pageContent } from './styles';
import appContext from '../app/appContext';
import Utils from '../../utils/utils';
import styledComponents from '../style/styledComponents';

export default class Page extends Component {

  static styledComponents = {
    Root: WUI_page,
    PageContent: WUI_pageContent
  }

  static defaultProps = {
    pageContent: true,
    styledComponents: {}
  }

  static contextType = appContext;

  _mounted = false;

  cached = {
    // scrollTop,
    // children
  }

  componentWillMount() {
    const app = this.context;
    const cacheKey = this.props.cacheKey;
    this.cached = cacheKey ? app.getCache(cacheKey, {}) : {} ;
    this.contentRef = React.createRef();
  }
  

  componentDidMount() {
    const app = this.context;
    const props = this.props;
    this._mounted = true;
    if(this.contentRef.current){
      this.contentRef.current.scrollTop = this.cached.scrollTop || 0;
    }

    app.emit('pageInit', props, app.history);
  }

  shouldComponentUpdate(){
    return this._mounted;
  }

  componentWillUnmount(){
    const app = this.context;
    const props = this.props;
    const cacheKey = this.props.cacheKey;

    if(cacheKey){
      this.cached.children = this.slots.main;
      app.updateCache(cacheKey, this.cached);
    }

    this._mounted = false;
    app.emit('pageRemove', props, app.history);
  }

  handleScroll = (e)=>{
    this.cached.scrollTop = e.currentTarget.scrollTop; 
  }

  render(){
    const { pageContent, children } = this.props;
    const childrenArray = Children.toArray(children);
    const slots = this.slots = Utils.slot(childrenArray); 
    const { Root, PageContent } = styledComponents(this);

    if(this.cached.children) {
      slots.main = this.cached.children;
    }
    
    return (
      <Root>
        { slots['pageContentBefore'] }
        {
          pageContent ? (
            <PageContent 
              onScroll={this.handleScroll} 
              ref={this.contentRef}
            >{ slots.main }</PageContent>
          ) : slots.main
        }
        { slots['pageContentAfter'] }
      </Root>
    )
  }
}
