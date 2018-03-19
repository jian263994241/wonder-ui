import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import addClass from 'dom-helpers/class/addClass';
import removeClass from 'dom-helpers/class/removeClass';
import hasClass from 'dom-helpers/class/removeClass';
import {StyledToggle, StyledToggleIcon} from './Styled';

export default class Toggle extends PureComponent {

  render(){

    const {theme, ...rest} = this.props;

    return(
      <StyledToggle theme={theme}>
        <input type="checkbox" {...rest}/>
        <StyledToggleIcon/>
      </StyledToggle>
    )
  }
}
