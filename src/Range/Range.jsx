import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';

import {StyledInputWrap} from '../Input/Styled';

import {
  StyledRangeSlider,
  StyledRangebar,
  StyledRangeKnobWrap,
   StyledRangeKnob,
   StyledRangeKnobLabel,
} from './Styled';


export default class Range extends PureComponent {

  render(){
    return (
      <StyledInputWrap>
        <StyledRangeSlider>
          <input type="range" defaultValue="50" min="0" max="100" step="1"/>
          <StyledRangebar><div></div></StyledRangebar>
          <StyledRangeKnobWrap>
            <StyledRangeKnob></StyledRangeKnob>
            <StyledRangeKnobLabel>123</StyledRangeKnobLabel>
          </StyledRangeKnobWrap>
        </StyledRangeSlider>
      </StyledInputWrap>
    )
  }
}
