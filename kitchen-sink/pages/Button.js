import React from 'react';
import { Page, Block, Button } from '@wonder-ui/core';
import styled from 'styled-components';

const FullButton = styled(Button) `
  & + & {
    margin-top: 10px;
  }
`



const Row = (props)=>(
  <Block blank={1} space={1} {...props}/>
);

export default function ButtonPage(props){
  return (
    <Page name="Button" navbar>
      <Row>
      
      </Row>
    </Page>
  )
}