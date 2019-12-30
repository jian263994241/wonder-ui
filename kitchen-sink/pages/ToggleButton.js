import React from 'react';
import { Page, Block, ToggleButton, ToggleButtonGroup, ContentBlock } from '@wonder-ui/core';
import styled from 'styled-components';

const Title = styled.div `
  font-size: 18px;
  margin: 5px 0 0 8px;
`

const Row = (props)=>(
  <Block blank={1} space={1} {...props}/>
);

export default function ToggleButtonExamples() {

  const [selected, setSelected] = React.useState(false);

  return (
    <Page name="ToggleButton" navbar>
      <Title>Button</Title>
      <Row>
        <ToggleButton selected={selected} onClick={()=> setSelected(!selected)}>Toggle</ToggleButton>
      </Row>
      <Title>Button Group</Title>
      <Row>
        <ToggleButtonGroup
          exclusive
          spacing
          size="small"
          value="1"
          source={[
            {label: '全部', value: ''},
            {label: '未绑定', value: '0'},
            {label: '已绑定', value: '1'},
          ]}
        />
      </Row>
    </Page>
  )
}