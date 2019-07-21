import React, {Component} from 'react';
import {Page, Link} from '@wonder-ui/core';
import Button, {ButtonsRow} from '@wonder-ui/components/Button';
import {BlockTitle} from '@wonder-ui/components/ContentBlock';

export default class ButtonsDemo extends Component {

  render (){
    console.log('button render');
    
    return (
      <Page>
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
      </Page>
    )
  }
}
