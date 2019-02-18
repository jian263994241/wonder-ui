import React, {Component} from 'react';
import styled, {injectGlobal, css} from 'styled-components';

export const StyledAccordion = styled.div `
  box-sizing:border-box;
`
export const StyledAccordionItem = styled.div `
  box-sizing:border-box;
`

export const StyledAccordionToggle = styled.div `
  box-sizing:border-box;
`

export const StyledContent = styled.div `
  position: relative;
  overflow: hidden;
  box-sizing:border-box;
  height: 0;
  transition: all 300ms ease;
`
