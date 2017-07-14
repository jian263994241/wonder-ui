import React, {Component} from 'react'
import {Route} from 'react-router-dom'

//包装Route,为了可以传递参数

export default class Pages extends Component {

  static uiName = 'Pages'

  render() {

    const {component: Component, ...rest}  = this.props;
    return (
      <Route {...rest} render={(props)=> (
          <Component {...props}/>
      )}/>
    );
  }
}
