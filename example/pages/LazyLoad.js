import React, {Component} from 'react'

import {Page, PageContent, Buttons, Block, Navbar, Grid, LazyLoad} from 'kui'

export default class LazyLoadPage extends Component {

  render() {
    return (
      <Page title="懒加载" navbarFixed>
        <Navbar title="懒加载" back/>
        <PageContent>
          <LazyLoad height={762} offsetVertical={300}>
            <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
          </LazyLoad>
          <div className="filler" />
          <LazyLoad height={683} offsetTop={200}>
            <img src='http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg' />
          </LazyLoad>
          <div className="filler" />
          <LazyLoad height={480} offsetHorizontal={50}>
            <img src='http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif' />
          </LazyLoad>
          <div className="filler" />
          <LazyLoad
            height={720}
            onContentVisible={() => console.log('look ma I have been lazyloaded!')}
          >
            <img src='http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg' />
          </LazyLoad>
        </PageContent>
      </Page>
    );
  }
}
