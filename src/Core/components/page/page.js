import React, { Component, Fragment } from 'react';
import { WUI_page, WUI_pageContent } from './styles';
import appContext from '../app/appContext';

export default class Page extends Component {

  static defaultProps = {
    pageContent: true,
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

    const { pageContent, children } = this.props;

    const ContentElement = pageContent ? WUI_pageContent: Fragment;

    return (
      <WUI_page>
        <ContentElement>
          { children }
        </ContentElement>
      </WUI_page>
    )
  }
}
