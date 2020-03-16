import React from 'react';
import { Page, Accordion, AccordionPanel, List, ListItem, ContentBlock } from '@wonder-ui/core';

export default function AccordionExamples(props) {

  return (
    <Page name="Accordion" navbar >
      <ContentBlock>
        <Accordion disableTranstion>
          <AccordionPanel
            header={ <a>点击展开</a> }
          >
            <div> 无UI </div>
          </AccordionPanel>
        </Accordion>
      </ContentBlock>
      <List renderHeader="AccordionList">
        <Accordion accordion defaultActiveKey="key1">
          <AccordionPanel
            itemKey="key1"
            header={
              <ListItem>Title 1</ListItem>
            }
          >
            <ListItem>
              内容 1
            </ListItem>
          </AccordionPanel>
          <AccordionPanel
            itemKey="key2"
            header={
              <ListItem>Title 2</ListItem>
            }
          >
            <ListItem>
              内容 2
            </ListItem>
          </AccordionPanel>
        </Accordion>
      </List>
    </Page>
  )
}