import React from 'react';
import { Page, Block } from '@wonder-ui/core';

export default function About(props) {

  return (
    <Page
      name="关于"
      navbar
    >
      <Block blank={2} space={2}>
        <p>
          基于React Hook(react@16.8)写的移动H5框架, 适用于微信, App内嵌页面, web浏览器
        </p>
      </Block>
    </Page>
  )
}