import React from 'react';
import { Page, Button, DatePicker, ContentBlock } from '@wonder-ui/core';


const ExtraButton = props => {
  const {extra='请选择', ...rest} = props;
  return (
    <Button {...rest}>{extra}</Button>
  )
}



export default function PickerExamples() {
  
  return (
    <Page name="DatePicker" navbar>
      <ContentBlock header={<span>Button&Picker</span>}>
        <DatePicker><ExtraButton/></DatePicker>
        
      </ContentBlock>
    </Page>
  )
}