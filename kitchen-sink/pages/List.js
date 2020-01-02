import React from 'react';
import { Page, List, ListItem, Brief, CheckboxItem } from '@wonder-ui/core';

export default function About(props) {

  return (
    <Page name="List" navbar >
      <List 
        renderHeader={()=> '默认列表'}
        renderFooter={()=> '脚步'}
      >
        <ListItem>
          Title
          <Brief>描述.......</Brief>
        </ListItem>
      </List>

      <List renderHeader={()=> `带箭头的列表`}>
        <ListItem extra="horizontal" arrow="horizontal">Horizontal</ListItem>
        <ListItem extra="vertical" arrow="vertical">Vertical</ListItem>
        <ListItem extra="vertical-up" arrow="vertical-up">Vertical Up</ListItem>
      </List>

      <List renderHeader={()=> `超出内容`}>
        <ListItem>
          Title Title Title Title Title Title Title Title Title Title Title Title Title Title
        </ListItem>
        <ListItem wrap>
          Title Title Title Title Title Title Title Title Title Title Title Title Title Title
        </ListItem>
      </List>

      <List renderHeader={()=> `超出内容换行 - align`}>
        <ListItem wrap extra="align default" arrow="horizontal">
          Title Title Title Title Title Title Title Title Title Title Title Title Title Title
        </ListItem>
        <ListItem wrap extra="align top" align="top" arrow="horizontal">
          Title Title Title Title Title Title Title Title Title Title Title Title Title Title
        </ListItem>
      </List>

      <List renderHeader={()=> `CheckboxList`}>
        <CheckboxItem visible checked>checked</CheckboxItem>
        <CheckboxItem visible>unchecked</CheckboxItem>
        <CheckboxItem 
          visible 
          checked 
          position="right"
          renderIcon={({checked})=> <span>{checked ? '选中': '未选中'}</span>}
        >自定义</CheckboxItem>
      </List>
    </Page>
  )
}