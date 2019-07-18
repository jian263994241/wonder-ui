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

  componentDidMount() {
    const app = this.context;
    const props = this.props;
    app.emit('pageInit', props, app.history);
  }

  componentWillUnmount(){
    const app = this.context;
    const props = this.props;
    app.emit('pageRemove', props, app.history);
  }

  render(){
    const { pageContent, children } = this.props;
    const childrenArray = Children.toArray(children);
    const slots = Utils.slot(childrenArray); 
    
    const { Root, PageContent } = styledComponents(this);
    
    return (
      <Root>
        { slots['pageContentBefore'] }
        {
          pageContent ? (
            <PageContent>{ slots.main }</PageContent>
          ) : slots.main
        }
        { slots['pageContentAfter'] }
      </Root>
    )
  }
}
