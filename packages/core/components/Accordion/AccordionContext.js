import React from 'react';

const warningFunc = () => {
  console.warn('Can not find AccordionContext. Please make sure you wrap AccordionPanel under Accordion.');
};

const AccordionContext = React.createContext({
  accordion: false,
  activeKey: undefined,
  disableTranstion: false,
  onChange: warningFunc,
});

export default AccordionContext;