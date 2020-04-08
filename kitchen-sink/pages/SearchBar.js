import React from 'react';
import { Page, ContentBlock, SearchBar, Button } from '@wonder-ui/core';

export default function SearchBarExamples(props) {
  const [reslut, setReslut] = React.useState();

  return (
    <Page
      name="SearchBar"
      navbar
    >
      
      <SearchBar 
        placeholder="请输入名字" 
        onSearch={value=> setReslut(value)}
      />

      <br/>

      <SearchBar 
        placeholder="Custom extra button" 
        extra={<Button variant="text" color="primary" size="small">筛选</Button>}
        onSearch={value=> setReslut(value)}
      />

      {
        reslut && (
          <ContentBlock>
            <p>Seach by: {reslut}</p>
            ...
          </ContentBlock>
        )
      }
    </Page>
  )
}