import React, {Component} from 'react';
import {Page, Link} from '@wonder-ui/core';
import {Accordion, AccordionItem, AccordionToggle, AccordionContent} from '@wonder-ui/components/Accordion';

export default class AccordionDemo extends Component {

  render (){

    return (
      <Page>
        <Accordion>
          <AccordionItem
            activeClass="active1"
            className="item1"
            onAccordionOpen={()=>console.log('Accordion active1')}
            onAccordionClose={()=>console.log('Accordion close1')}
          >
            <AccordionToggle>
              Item 1
            </AccordionToggle>
            <AccordionContent>
              Item Content1
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionToggle>
              Item 2
            </AccordionToggle>
            <AccordionContent>
              Item Content2
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Page>
    )
  }
}
