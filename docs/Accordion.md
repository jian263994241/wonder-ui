# <Accordion/>

折叠面板

```js
import React, {Component} from 'react';
import {Accordion, AccordionItem, AccordionToggle, AccordionContent} from 'wonder-ui/Accordion';

class Example extends Component {

  render(){
    return (
      <Accordion>
        <AccordionItem>
          <AccordionToggle>Item 1</AccordionToggle>
          <AccordionContent>Item Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionToggle>Item 2</AccordionToggle>
          <AccordionContent>Item Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
}

```

## Props

### <Accordion/>

- component `string|func` default : 'div'
- defaultActiveIndex  `number` default: null 默认展开

### <AccordionItem/>

- component `string|func` default : 'div'
- activeClass `string`   default : 'active'
- onAccordionOpen `func`
- onAccordionClose `func`

### <AccordionToggle/>

- component `string|func` default : 'div'

### <AccordionContent/>

- component `string|func` default : 'div'
