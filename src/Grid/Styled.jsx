import React, {Component, Children, cloneElement} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import createTag from '../utils/createTag';

const width = ({width}) => width ;
const gutter = ({width, gutter}) => `calc((100% - ${gutter}px*${100/parseFloat(width)-1}) / ${100/parseFloat(width)})`

export const StyledCol = styled(createTag({propsToOmit:['width', 'gutter']})) `
  width: ${width}%;
  width: ${gutter};
`;

StyledCol.propTypes = {
  width: PropTypes.number.isRequired
}

export const StyledRow = styled(
  createTag({
    propsToOmit:['width', 'gutter'],
    propsToNested: ['gutter']
  })
)`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  align-items: flex-start;
  ${StyledCol} {
    box-sizing: border-box;
  }
`

StyledRow.defaultProps = {
  gutter: 15
};

StyledRow.propTypes = {
  gutter: PropTypes.number.isRequired
};
