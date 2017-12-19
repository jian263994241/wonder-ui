import React, {Component} from 'react';
import {Page, PageContent, Link} from '../../src/CreateApp';
import Accordion from '../../src/Accordion/Accordion';
import AccordionItem from '../../src/Accordion/AccordionItem';
import AccordionToggle from '../../src/Accordion/AccordionToggle';
import AccordionContent from '../../src/Accordion/AccordionContent';

export default class AccordionDemo extends Component {

  render (){

    return (
      <Page>
        <PageContent>
          <Accordion component="ul">
            <AccordionItem
              component="li"
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
            <AccordionItem component="li">
              <AccordionToggle>
                Item 2
              </AccordionToggle>
              <AccordionContent>
                Item Content2
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageContent>
      </Page>
    )
  }
}
