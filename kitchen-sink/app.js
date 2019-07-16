import React, {Component} from 'react';
import {render} from 'react-dom';
import {View, App} from '@wonder-ui/core';

const params = {
  on: {
    pageInit: (app, props)=>{
      if(props.name){
        document.title = props.name;
      }
    }
  },
  routes: [
    {
      path: '/', 
      exact: true,
      // redirect: '/index'
      redirect: (history, resolve, reject)=>{
        resolve('/index')
      }
    },
    {
      path: '/index', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/Welcome'))
      }
    },
    {
      path: '/citys', 
      async: (history, resolve, reject)=>{
        setTimeout(()=>{
          resolve(import('./pages/Citys'))
        }, 1000)
      }
    },
    {
      path: '/picker', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/Picker'))
      }
    },
    {
      path: '/countdown', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/Countdown'))
      }
    },
    {
      path: '/keyboard', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/Keyboard'))
      }
    },
    {
      path: '/popup', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/Popup'))
      }
    },
    {
      path: '/dialog', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/Dialog'))
      }
    },
    {
      path: '/accordion', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/Accordion'))
      }
    },
    {
      path: '/buttons', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/Buttons'))
      }
    },
    {
      path: '/tabs', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/Tabs'))
      }
    },
    {
      path: '/list', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/List'))
      }
    },
    {
      path: '/media-list', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/MediaList'))
      }
    },
    {
      path: '/swipe-out', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/SwipeOut'))
      }
    },
    {
      path: '/CheckboxesRadios', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/CheckboxesRadios'))
      }
    },
    {
      path: '/inputs', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/Inputs'))
      }
    },
    {
      path: '/grid', 
      async: (history, resolve, reject)=>{
        resolve(import('./pages/Grid'))
      }
    },
  ]
}

class MyApp extends Component {

  render(){
    return (
      <App params={params}>
        <View />
      </App>
    )
  }
}


const rootElement = document.getElementById('root');

rootElement.style.height = "100%";


render( <MyApp/>, rootElement )
