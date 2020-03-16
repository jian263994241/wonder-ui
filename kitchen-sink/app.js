import React from 'react';
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
        { path: 'accordion', async: ()=> import('./pages/Accordion') },
        { path: 'block', async: ()=> import('./pages/Block') },
        { path: 'button', async: ()=> import('./pages/Button') },
        { path: 'checkable-group', async: ()=> import('./pages/CheckableGroup') },
        { path: 'date-picker', async: ()=> import('./pages/DatePicker') },
        { path: 'dialog', async: ()=> import('./pages/Dialog') },
        { path: 'drawer', async: ()=> import('./pages/Drawer') },
        { path: 'flex', async: ()=> import('./pages/Flex') },
        { path: 'form', async: ()=> import('./pages/Form') },
        { path: 'header-bar', async: ()=> import('./pages/HeaderBar') },
        { path: 'list-view', async: ()=> import('./pages/ListView') },
        { path: 'list', async: ()=> import('./pages/List') },
        { path: 'picker', async: ()=> import('./pages/Picker') },
        { path: 'preloader', async: ()=> import('./pages/Preloader') },
        { path: 'route-transition', async: ()=> import('./pages/routeTransition') },
        { path: 'searchbar', async: ()=> import('./pages/SearchBar') },
        { path: 'tag', async: ()=> import('./pages/Tag') },
        { path: 'theme', async: ()=> import('./pages/Theme') },
        { path: 'toolbar', async: ()=> import('./pages/ToolBar') },
        { path: 'typography', async: ()=> import('./pages/Typography') },
      ]
    },
  ]
}


function MyApp() {

  const [theme, setTheme] = React.useState({});
  const [animation, setAnimation] = React.useState('slide');
  
  window.setTheme = (theme = {})=>{
    setTheme(theme);
  }

  window._animation = animation;

  window.setTransitionType = (type = 'slide')=>{
    setAnimation(type)
  }

  return (
    <App theme={theme} {...params}>
      <View noMatch={<NoMatch/>} animation={animation}/>
    </App>
  )
}



render( <MyApp/>, document.getElementById('root') );
