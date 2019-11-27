import React, {Component, Children, cloneElement} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const width = ({width}) => width ;
const gutter = ({width, gutter}) => `calc((100% - ${gutter}px*${100/parseFloat(width)-1}) / ${100/parseFloat(width)})`

export const StyledCol = styled.div `
  width: ${width}%;
  width: ${gutter};
  box-sizing: border-box;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  align-items: flex-start;
`

StyledRow.defaultProps = {
  gutter: 8
};

StyledRow.propTypes = {
  gutter: PropTypes.number.isRequired
};
