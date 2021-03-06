import React from 'react';
import { Page, Button, ContentBlock, styled } from '@wonder-ui/core';
import {ArrowBackIosOutlined, Close} from '@wonder-ui/icons';

const ButtonDemo = styled(Button)(props=> ({
  marginLeft: (props.fullWidth || props.full) ? 0: 10,
  marginBottom: 10,
  '&:first-child': {
    marginLeft: 0
  }
}));

export default function ButtonExamples(props){

  return (
    <Page name="Button" navbar>
      <ContentBlock header="size">
        <ButtonDemo>default</ButtonDemo>
        <ButtonDemo size="small">small</ButtonDemo>
        <ButtonDemo size="medium">medium</ButtonDemo>
        <ButtonDemo size="large">large</ButtonDemo>
      </ContentBlock>
      
      <ContentBlock header="full">
        <ButtonDemo full 
        startIcon={<ArrowBackIosOutlined/>}
        endIcon={<Close/>}
        >full</ButtonDemo>
        <ButtonDemo fullWidth>fullWidth</ButtonDemo>
      </ContentBlock>
      
      <ContentBlock header="variant">
        <ButtonDemo>default</ButtonDemo>
        <ButtonDemo variant="text">text</ButtonDemo>
        <ButtonDemo variant="outlined">outlined</ButtonDemo>
        <ButtonDemo variant="contained">contained</ButtonDemo>
      </ContentBlock>

      <ContentBlock header="round">
        <div>
          <ButtonDemo variant="outlined" size="small" rounded>outlined</ButtonDemo>
          <ButtonDemo variant="outlined" rounded>outlined</ButtonDemo>
          <ButtonDemo variant="outlined" size="large"  rounded>outlined</ButtonDemo>
        </div>
        <div>
          <ButtonDemo variant="contained" size="small" rounded>contained</ButtonDemo>
          <ButtonDemo variant="contained" rounded>contained</ButtonDemo>
          <ButtonDemo variant="contained" size="large" rounded>contained</ButtonDemo>
        </div>
        
      </ContentBlock>

      <ContentBlock header="color">
        <div>
          <ButtonDemo>default</ButtonDemo>
          <ButtonDemo color="primary">primary</ButtonDemo>
          <ButtonDemo color="secondary">secondary</ButtonDemo>
        </div>
        <div>
          <ButtonDemo variant="outlined">default</ButtonDemo>
          <ButtonDemo color="primary" variant="outlined">primary</ButtonDemo>
          <ButtonDemo color="secondary" variant="outlined">secondary</ButtonDemo>
        </div>
        <div>
          <ButtonDemo variant="text">default</ButtonDemo>
          <ButtonDemo color="primary" variant="text">primary</ButtonDemo>
          <ButtonDemo color="secondary" variant="text">secondary</ButtonDemo>
        </div>
      </ContentBlock>
      
      <ContentBlock header="disabled">
        <ButtonDemo disabled>default</ButtonDemo>
        <ButtonDemo disabled variant="text">default</ButtonDemo>
      </ContentBlock>
    </Page>
  )
}