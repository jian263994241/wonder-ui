import React, {Component} from 'react';
import {Page, PageContent, Link} from '../../src/CreateApp';
import Preloader, {showPreloader, hidePreloader} from '../../src/Preloader';


export default class Welcome extends Component {

  onRefresh = (scroller)=>{
    setTimeout(()=>{
      scroller.finishPullToRefresh()
    }, 2000)
  }

  preloader = ()=>{
    showPreloader();

    setTimeout(()=>{
      hidePreloader();
    }, 2000)
  }

  render() {

    return (
      <Page>
        <PageContent pullToRefresh onRefresh={this.onRefresh}>
          <ul>
            <li><Link to="/citys">省市区选择器</Link></li>
            <li><Link to="/picker">时间选择器</Link></li>
            <li><Link to="/countdown">短信倒计时</Link></li>
            <li><Link to="/keyboard">键盘</Link></li>
            <li><Link to="/popup">弹窗</Link></li>
            <li><Link to="/dialog">对话</Link></li>
            <li><a onClick={this.preloader}>Preloader</a></li>
          </ul>
          {/* <Preloader text="123" visible innerStyle={{width: '80px'}}/> */}
        </PageContent>
      </Page>
    )
  }
}
