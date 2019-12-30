import React from 'react';
import { Page, Button, LcnPicker, ContentBlock } from '@wonder-ui/core';


const ExtraButton = props => {
  const {extra='请选择', ...rest} = props;

  return (
    <Button {...rest}>{extra}</Button>
  )
}



export default function PickerExamples() {
  
  return (
    <Page name="Picker" navbar>
      <ContentBlock header={<span>Button&Picker</span>}>
        <LcnPicker><ExtraButton/></LcnPicker>
        
      </ContentBlock>
    </Page>
  )
}