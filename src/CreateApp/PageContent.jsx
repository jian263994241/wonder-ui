import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScrollView from '../ScrollView';
import {StylePageContent} from './Styled';

export default class PageContent extends Component {

  static propTypes = {
    scrollView: PropTypes.bool
  }

  static defaultProps = {
    scrollView: true
  }

  render(){

    const {
      scrollView,
      ...rest
    } = this.props;

    return scrollView ? (
      <ScrollView {...rest}/>
    ) : (
      <StylePageContent {...rest}/>
    )
  }
}
