
## Accordion

自定义折叠面板

### 基本使用

```js
const accordion = require('../src/Accordion');
const {Accordion, AccordionItem, AccordionToggle, AccordionContent} = accordion;

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

```
