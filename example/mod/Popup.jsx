import React, {Component, createElement} from 'react';
import {Page, PageContent, Link, Route} from '../../src/Core';

import PopupPage from './PopupPage';



export default class PopupDemo extends Component {


  render(){

    return (
      <Page>
        <PageContent>
          <Link to="/popup/popup-page">打开Pop页面</Link>
        </PageContent>



      </Page>
    )
  }
}
