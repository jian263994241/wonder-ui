import React, {Component} from 'react';
import {render} from 'react-dom';
import {View, App } from '@wonder-ui/core';

const params = {
  on: {
    pageInit: (name, props)=>{
      if(name){
        document.title = name;
      }
    }
  },
  routes: [
    {
      path: '/', 
      exact: true,
      redirect: '/index'
    },
    {
      path: '/index', 
      component: require('./pages/Welcome'),
      children: [
        {
          path: 'citys', 
          async: ()=>import('./pages/Citys')
        },
        {
          path: 'picker', 
          async: ()=>import('./pages/Picker')
        },
      ]
    },
    
    
    {
      path: '/countdown', 
      async: ()=>import('./pages/Countdown')
    },
    {
      path: '/keyboard', 
      async: ()=> import('./pages/Keyboard')
    },
    {
      path: '/popup', 
      async: () =>import('./pages/Popup')
    },
    {
      path: '/dialog', 
      async: () => import('./pages/Dialog')
    },
    {
      path: '/accordion', 
      async: () => import('./pages/Accordion')
    },
    {
      path: '/buttons', 
      async: () => import('./pages/Buttons')
    },
    {
      path: '/tabs', 
      async: () => import('./pages/Tabs')
    },
    {
      path: '/list', 
      async: () => import('./pages/List')
    },
    {
      path: '/media-list', 
      async: () => import('./pages/MediaList')
    },
    {
      path: '/swipe-out', 
      async: () => import('./pages/SwipeOut')
    },
    {
      path: '/CheckboxesRadios', 
      async: ()=> import('./pages/CheckboxesRadios')
    },
    {
      path: '/inputs', 
      async: ()=>import('./pages/Inputs')
    },
    {
      path: '/grid', 
      async: ()=>import('./pages/Grid')
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


const rootElement = document.getElementById('root');

rootElement.style.height = "100%";


render( <MyApp/>, rootElement )
