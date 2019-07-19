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
    styledComponents: {},
    store: {
      pageInit: ()=>{},
      pageRemove: ()=>{},
    },
    onScroll: ()=>{}
  }

  static contextType = appContext;

  _mounted = false;

  cached = {
    // scrollTop,
    // children
    // data
  }

  componentWillMount() {
    const app = this.context;
    const { cacheKey } = this.props;
    this.cached = cacheKey ? app.getCache(cacheKey, {}) : {} ;
    this.contentRef = React.createRef();
  }
  

  componentDidMount() {
    const app = this.context;
    const { store } = this.props;

    this._mounted = true;
    if(this.contentRef.current){
      this.contentRef.current.scrollTop = this.cached.scrollTop || 0;
    }

    store.pageInit && store.pageInit(this.cached.data);

    app.emit('pageInit', this.props, app.history);
  }

  shouldComponentUpdate(){
    return this._mounted;
  }

  componentWillUnmount(){
    const app = this.context;
    const { store, cacheKey } = this.props;

    if(cacheKey){
      this.cached.children = this.slots.main;
      if(store.pageRemove) {
        this.cached.data = store.pageRemove()
      }
      app.updateCache(cacheKey, this.cached);
    }

    this._mounted = false;
    app.emit('pageRemove',  this.props, app.history);
  }

  handleScroll = (e)=>{
    const { onScroll } = this.props;
    this.cached.scrollTop = e.currentTarget.scrollTop; 
    onScroll(e);
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
