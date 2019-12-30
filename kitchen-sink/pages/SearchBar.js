import React from 'react';
import { Page, ContentBlock, SearchBar, Button } from '@wonder-ui/core';

export default function SearchBarExamples(props) {

  return (
    <Page
      name="SearchBar"
      navbar
    >
      
      <SearchBar placeholder="Default"/>

      <br/>

      <SearchBar 
        placeholder="Custom extra button" 
        extra={<Button variant="text" color="primary" size="small">筛选</Button>}
      />

    </Page>
  )
}