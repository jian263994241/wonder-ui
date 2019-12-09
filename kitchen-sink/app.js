import React, {Component} from 'react';
import {render} from 'react-dom';
import { View, App } from '@wonder-ui/core';

import IndexPage from './pages/IndexPage';

const params = {
  //events bus
  on: {
    routeChange(props){
      // console.log('Route change');
    }
  },
  routes: [
    {
      path: '/',
      component: IndexPage,
      children: [
        { path: 'about', async: ()=> import('./pages/About') },
        { path: 'button', async: ()=> import('./pages/Button') },
      ]
    },
    {
      path: '/404',
      async: ()=> import('./pages/NoMatch')
    },
  ]
}

class MyApp extends Component {

  render(){

    return (
      <App {...params}>
        <View />
      </App>
    )
  }
}



render( <MyApp/>, document.getElementById('root') );
