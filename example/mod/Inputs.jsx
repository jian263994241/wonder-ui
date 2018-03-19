import React, {Component} from 'react';
import {Page, PageContent, Link} from '../../src/Core';
import Button, {ButtonsRow} from '../../src/Button';
import {BlockTitle} from '../../src/ContentBlock';

import {List, ListItem, GroupTitle, ListItemDivider} from '../../src/ListView';
import Input from '../../src/Input';
import Toggle from '../../src/Toggle';

const svgXml = `
<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="29" height="29">
<defs>
  <style/>
</defs>
<path d="M512 960C265.6 960 64 758.4 64 512S265.6 64 512 64s448 201.6 448 448-201.6 448-448 448zm0-64c211.2 0 384-172.8 384-384S723.2 128 512 128 128 300.8 128 512s172.8 384 384 384zM345.6 662.4c3.2 3.2 6.4 6.4 6.4 9.6 41.6 41.6 99.2 67.2 160 67.2s118.4-22.4 160-67.2c3.2-3.2 6.4-6.4 6.4-9.6 12.8-12.8 9.6-32-3.2-44.8-12.8-12.8-32-9.6-44.8 3.2l-6.4 6.4C595.2 656 553.6 672 512 672s-83.2-16-112-48l-6.4-6.4c-12.8-12.8-32-12.8-44.8-3.2-12.8 12.8-16 35.2-3.2 48zM352 352c19.2 0 32 12.8 32 32v32c0 19.2-12.8 32-32 32s-32-12.8-32-32v-32c0-19.2 12.8-32 32-32zm320 0c19.2 0 32 12.8 32 32v32c0 19.2-12.8 32-32 32s-32-12.8-32-32v-32c0-19.2 12.8-32 32-32z"/>
</svg>
`

const Icon = <div dangerouslySetInnerHTML={{__html: svgXml}}/>;

export default class Inputs extends Component {

  render (){

    return (
      <Page>
        <PageContent>
          <BlockTitle>Data list, with icons</BlockTitle>
          <List>
            <ListItem title="限制四字" media={Icon} label>
              <Input placeholder="123"></Input>
            </ListItem>
            <ListItem title="密码" media={Icon} label>
              <Input placeholder="123" type="password"></Input>
            </ListItem>

          </List>

          <BlockTitle>2</BlockTitle>
          <List>
            <ListItem>
              <Input placeholder="123" info="提示报错"></Input>
            </ListItem>
            <ListItem>
              <Input placeholder="123"info="提示报错"></Input>
            </ListItem>
            <ListItem after={<Toggle/>}></ListItem>
          </List>

          <BlockTitle>Inset</BlockTitle>
          <List inset>
            <ListItem title="限制四字" label>
              <Input placeholder="123"></Input>
            </ListItem>
            <ListItem title="限制四字" label>
              <Input placeholder="123"></Input>
            </ListItem>
          </List>


        </PageContent>
      </Page>
    )
  }
}
