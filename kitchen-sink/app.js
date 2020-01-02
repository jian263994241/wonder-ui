import React, {Component} from 'react';
import {render} from 'react-dom';
import { View, App } from '@wonder-ui/core';

import IndexPage from './pages/IndexPage';
import NoMatch from './pages/NoMatch';

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
        { path: 'drawer', async: ()=> import('./pages/Drawer') },
        { path: 'preloader', async: ()=> import('./pages/Preloader') },
        { path: 'dialog', async: ()=> import('./pages/Dialog') },
        { path: 'picker', async: ()=> import('./pages/Picker') },
        { path: 'date-picker', async: ()=> import('./pages/DatePicker') },
        { path: 'lcn-picker', async: ()=> import('./pages/LcnPicker') },
        { path: 'typography', async: ()=> import('./pages/Typography') },
        { path: 'toolbar', async: ()=> import('./pages/ToolBar') },
        { path: 'tag', async: ()=> import('./pages/Tag') },
        { path: 'searchbar', async: ()=> import('./pages/SearchBar') },
        { path: 'list', async: ()=> import('./pages/List') },
        { path: 'list-view', async: ()=> import('./pages/ListView') },
        { path: 'checkable-group', async: ()=> import('./pages/CheckableGroup') },
      ]
    },
  ]
}

class MyApp extends Component {

  render(){

    return (
      <App {...params}>
        <View/>
      </App>
    )
  }
}



render( <MyApp/>, document.getElementById('root') );
