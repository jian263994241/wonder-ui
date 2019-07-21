import React, { Component, Children } from 'react';
import { WUI_page_root, WUI_page_content } from './styles';
import appContext from '../app/appContext';
import Utils from '../../utils/utils';


const Page = React.memo(({classes = {}, pageContent, children })=>{
  const childrenArray = Children.toArray(children);
  const slots = Utils.slot(childrenArray); 
  
  return (
    <WUI_page_root css={classes.root}>
      { slots['pageContentBefore'] }
      {
        pageContent ? (
          <WUI_page_content 
            css={classes.content}
          >{ slots.main }</WUI_page_content>
        ) : slots.main
      }
      { slots['pageContentAfter'] }
    </WUI_page_root>
  )

})

Page.PageContent = WUI_page_content;


export default Page;