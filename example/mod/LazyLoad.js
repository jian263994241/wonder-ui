import React, {Component} from 'react'

import {Page, PageContent, Buttons, Bars, Grid, LazyLoad} from 'kui'


const {SubNavBar, Navbar} = Bars;

export default class LazyLoadPage extends Component {

  render() {
    return (
      <Page title="懒加载">
        <Navbar title="懒加载" backText/>
        <PageContent>
          <LazyLoad height={762} offsetVertical={300}>
            <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493116001431&di=3f98372310ecd81fcb3a520481b9f3dc&imgtype=0&src=http%3A%2F%2Fwww.mengtu.cc%2Fuploads%2Fallimg%2F140902%2F1-140Z2205916.jpg' />
          </LazyLoad>
          <div className="filler" />
          <LazyLoad height={683} offsetTop={200}>
            <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493116073367&di=9f37830830348795993db7d70826cae8&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2FepLXNKP9iMdhTHJY93ao5w%3D%3D%2F1927259165638052571.jpg' />
          </LazyLoad>
          <div className="filler" />
          <LazyLoad height={480} offsetHorizontal={50}>
            <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493116073367&di=765774cc08e41119a8caf4fa5f1cf9f3&imgtype=0&src=http%3A%2F%2F5.26923.com%2Fdownload%2Fpic%2F000%2F325%2F2b005fd2bbc9b998ec3d21387d5145ec.jpg' />
          </LazyLoad>
          <div className="filler" />
          <LazyLoad
            height={720}
            onContentVisible={() => console.log('look ma I have been lazyloaded!')}
          >
            <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493116073365&di=558d506279738445d3e327cfa58e2e35&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F006pSeBggy71JcaRJit65%26690' />
          </LazyLoad>
        </PageContent>
      </Page>
    );
  }
}
