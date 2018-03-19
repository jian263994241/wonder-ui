import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyledLIstItemDivider
} from './Styled';



export default function ListItemDivider({text}){

  return (
    <StyledLIstItemDivider>{text}</StyledLIstItemDivider>
  )
};
