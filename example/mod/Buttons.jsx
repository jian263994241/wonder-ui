import React, {Component} from 'react';
import {Page, PageContent, Link} from '../../src/CreateApp';
import Button, {ButtonsRow} from '../../src/Button';
import {BlockTitle} from '../../src/ContentBlock';

export default class ButtonsDemo extends Component {

  render (){

    return (
      <Page>
        <PageContent>
          <BlockTitle>按钮</BlockTitle>

          <Button>123</Button>
          <Button fill>123</Button>
          <Button fill big>123</Button>

          <BlockTitle>按钮组</BlockTitle>

          <ButtonsRow round>
            <Button>Tab 1</Button>
            <Button>Tab 2</Button>
            <Button>Tab 3</Button>
          </ButtonsRow>
          <br/>
          <ButtonsRow>
            <Button>Tab 1</Button>
            <Button>Tab 2</Button>
            <Button>Tab 3</Button>
          </ButtonsRow>

        </PageContent>
      </Page>
    )
  }
}
