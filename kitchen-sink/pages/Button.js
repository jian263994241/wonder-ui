import React from 'react';
import { Page, Button, ContentBlock, styled } from '@wonder-ui/core';

const ButtonDemo = styled(Button)({
  marginBottom: 10,
  marginLeft: props => (props.fullWidth || props.full) ? 0: 10,
  '&:first-child': {
    marginLeft: 0
  }
});


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
        <ButtonDemo full>full</ButtonDemo>
        <ButtonDemo fullWidth>fullWidth</ButtonDemo>
      </ContentBlock>
      
      <ContentBlock header="variant">
        <ButtonDemo>default</ButtonDemo>
        <ButtonDemo variant="text">text</ButtonDemo>
        <ButtonDemo variant="outlined">outlined</ButtonDemo>
        <ButtonDemo variant="contained">contained</ButtonDemo>
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
        <div>
          <ButtonDemo disabled>default</ButtonDemo>
          <ButtonDemo disabled color="primary">primary</ButtonDemo>
          <ButtonDemo disabled color="secondary">secondary</ButtonDemo>
        </div>
        <div>
          <ButtonDemo disabled variant="outlined">default</ButtonDemo>
          <ButtonDemo disabled color="primary" variant="outlined">primary</ButtonDemo>
          <ButtonDemo disabled color="secondary" variant="outlined">secondary</ButtonDemo>
        </div>
        <div>
          <ButtonDemo disabled variant="text">default</ButtonDemo>
          <ButtonDemo disabled color="primary" variant="text">primary</ButtonDemo>
          <ButtonDemo disabled color="secondary" variant="text">secondary</ButtonDemo>
        </div>
      </ContentBlock>
    </Page>
  )
}