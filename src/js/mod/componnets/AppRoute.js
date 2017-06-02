import React, {Component} from 'react'
import {Route} from 'react-router-dom'

export default class AppRoute extends Component {
  
  static uiName = 'AppRoute'

  render() {

    const {component: Component, ...other}  = this.props;

    return (
      <Route {...other} render={props=>(<Component {...props} app={other.app}/>)}/>
    );
  }
}
