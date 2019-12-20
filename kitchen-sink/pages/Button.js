import React from 'react';
import { Page, Block, Button } from '@wonder-ui/core';
import styled from 'styled-components';

const ButtonDemo = styled(Button) `
  && {
    margin-bottom: 10px;
  }
  & + & {
    margin-left: ${props=> (props.full || props.fullWidth) ? 0 : 10}px;
  }
`

const Title = styled.div `
  font-size: 18px;
  margin: 5px 0 0 8px;
`

const Row = (props)=>(
  <Block blank={1} space={1} {...props}/>
);

export default function ButtonExamples(props){
  return (
    <Page name="Button" navbar>
      <Title>size</Title>
      <Row>
        <ButtonDemo>default</ButtonDemo>
        <ButtonDemo size="small">small</ButtonDemo>
        <ButtonDemo size="medium">medium</ButtonDemo>
        <ButtonDemo size="large">large</ButtonDemo>
      </Row>
      
      <Title>full</Title>
      <Row>
        <ButtonDemo full>full</ButtonDemo>
        <ButtonDemo fullWidth>fullWidth</ButtonDemo>
      </Row>
      
      <Title>variant</Title>
      <Row>
        <ButtonDemo>default</ButtonDemo>
        <ButtonDemo variant="text">text</ButtonDemo>
        <ButtonDemo variant="outlined">outlined</ButtonDemo>
        <ButtonDemo variant="contained">contained</ButtonDemo>
      </Row>

      <Title>color</Title>
      <Row>
        <ButtonDemo>default</ButtonDemo>
        <ButtonDemo color="primary">primary</ButtonDemo>
        <ButtonDemo color="secondary">secondary</ButtonDemo>
      </Row>
      <Row>
        <ButtonDemo variant="outlined">default</ButtonDemo>
        <ButtonDemo color="primary" variant="outlined">primary</ButtonDemo>
        <ButtonDemo color="secondary" variant="outlined">secondary</ButtonDemo>
      </Row>
      <Row>
        <ButtonDemo variant="text">default</ButtonDemo>
        <ButtonDemo color="primary" variant="text">primary</ButtonDemo>
        <ButtonDemo color="secondary" variant="text">secondary</ButtonDemo>
      </Row>
      <Title>disabled</Title>
      <Row>
        <ButtonDemo disabled>default</ButtonDemo>
        <ButtonDemo disabled color="primary">primary</ButtonDemo>
        <ButtonDemo disabled color="secondary">secondary</ButtonDemo>
      </Row>
      <Row>
        <ButtonDemo disabled variant="outlined">default</ButtonDemo>
        <ButtonDemo disabled color="primary" variant="outlined">primary</ButtonDemo>
        <ButtonDemo disabled color="secondary" variant="outlined">secondary</ButtonDemo>
      </Row>
      <Row>
        <ButtonDemo disabled variant="text">default</ButtonDemo>
        <ButtonDemo disabled color="primary" variant="text">primary</ButtonDemo>
        <ButtonDemo disabled color="secondary" variant="text">secondary</ButtonDemo>
      </Row>
    </Page>
  )
}