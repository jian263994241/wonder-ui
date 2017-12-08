import React, {Component} from 'react';
import {Page, PageContent, Link} from '../../src/CreateApp';

export default class Welcome extends Component {


  render() {

    return (
      <Page>
        <PageContent>
          <Link to="/citys">省市区选择器</Link>,
          <Link to="/picker">时间选择器</Link>,
          <Link to="/countdown">短信倒计时</Link>,
          <Link to="/keyboard">键盘</Link>,
          <Link to="/popup">弹窗</Link>,
          <Link to="/dialog">对话</Link>,
        </PageContent>
      </Page>
    )
  }
}
