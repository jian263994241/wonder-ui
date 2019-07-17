import React, { Component, Children } from 'react';
import { WUI_page, WUI_pageContent } from './styles';
import appContext from '../app/appContext';
import Utils from '../../utils/utils';
import getStyledComponent from '../style/getStyledComponent';

export default class Page extends Component {

  static defaultProps = {
    pageContent: true,
    styledComponents: {
      root: undefined, 
      content: undefined
    }
  }

  static contextType = appContext;

  componentDidMount() {
    const app = this.context;
    const props = this.props;
    app.emit('pageInit', app, props);
  }

  componentWillUnmount(){
    const app = this.context;
    const props = this.props;
    app.emit('pageRemove', app, props);
  }

  render(){
    const { pageContent, styledComponents, children } = this.props;
    const childrenArray = Children.toArray(children);
    const slots = Utils.slot(childrenArray); 
    const WUI_page_ = getStyledComponent(WUI_page, styledComponents.root);
    const WUI_pageContent_ = getStyledComponent(WUI_pageContent, styledComponents.content);
    
    return (
      <WUI_page_>
        { slots['pageContentBefore'] }
        {
          pageContent ? (
            <WUI_pageContent_>{ slots.main }</WUI_pageContent_>
          ) : slots.main
        }
        { slots['pageContentAfter'] }
      </WUI_page_>
    )
  }
}
