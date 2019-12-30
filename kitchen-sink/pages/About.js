import React from 'react';
import { Page, ContentBlock } from '@wonder-ui/core';

export default function About(props) {

  return (
    <Page
      name="关于"
      navbar
    >
      <ContentBlock>
        <p>
          基于React Hook(react@16.8)写的移动H5框架, 适用于微信, App内嵌页面, web浏览器
        </p>
      </ContentBlock>
    </Page>
  )
}