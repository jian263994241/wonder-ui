import React, {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mounted} from '../../../utils/mix'
import {Link} from 'react-router-dom'
import $ from 'dom7'

import CheckboxItem from './CheckboxItem';
import RadioItem from './RadioItem';
import AccordionItem from './AccordionItem';
import MediaItem from './MediaItem';
/**
* ListItem
* Properties: title, subtitle, text, divider, className, style, badge, badgeColor, after
* Event Properties: null
*/

export default class ListItem extends Component {

  static uiName = 'ListItem'

  static propTypes = {
    checkbox: PropTypes.bool,
    radio: PropTypes.bool,
    accordion: PropTypes.bool
  }

  render (){
    const {
      accordion,
      checkbox,
      radio,
      ...rest
    } = this.props;

    let content, type;

    if(accordion) type = 'accordion';
    if(checkbox) type = 'checkbox';
    if(radio) type = 'radio';

    switch (type) {
      case 'accordion':
        content = <AccordionItem {...this.props}/>;
        break;
      case 'checkbox':
        content = <CheckboxItem {...this.props}/>;
        break;
      case 'radio':
        content = <RadioItem {...this.props}/>;
        break;
      default:
        content = <MediaItem {...this.props}/>;
    }

    return content;
  }
}
