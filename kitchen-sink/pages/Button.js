import React from 'react';
import { Page, Block } from '@wonder-ui/core';



const Row = (props)=>(
  <Block blank={1} space={1} {...props}/>
);

export default function ButtonPage(props){
  return (
    <Page name="按钮" navbar>
      <Row>
      
      </Row>
    </Page>
  )
}