import React, {Component} from 'react';
import styled, {injectGlobal, css} from 'styled-components';
import createTag from '../utils/createTag';

export const StyledAccordion = styled(createTag()) `
  box-sizing:border-box;
`
export const StyledAccordionItem = styled(createTag()) `
  box-sizing:border-box;
`

export const StyledAccordionToggle = styled(createTag()) `
  box-sizing:border-box;
`

export const StyledContent = styled.div `
  position: relative;
  overflow: hidden;
  box-sizing:border-box;
  height: 0;
  transition: all 300ms ease;
`
