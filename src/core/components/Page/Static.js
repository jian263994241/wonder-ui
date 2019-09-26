import React from 'react';

export default class Static extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.shouldUpdate || nextProps.shouldUpdate){
      return true;
    }
    return false;
  }

  render(){
    return this.props.children;
  }
}