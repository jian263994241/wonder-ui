import React, {Component} from 'react';
import {render} from 'react-dom';
import {View, Pages} from '~/src/Core';

import Welcome from './pages/Welcome';
import Citys from './pages/Citys';
import Picker from './pages/Picker';
import Countdown from './pages/Countdown';
import Keyboard from './pages/Keyboard';
import Popup from './pages/Popup';
import Dialog from './pages/Dialog';
import PopupPage from './pages/PopupPage';
import Accordion from './pages/Accordion';
import Buttons from './pages/Buttons';
import Tabs from './pages/Tabs';
import List from './pages/List';
import MediaList from './pages/MediaList';
import SwipeOut from './pages/SwipeOut';
import CheckboxesRadios from './pages/CheckboxesRadios';
import Inputs from './pages/Inputs';
import Grid from './pages/Grid';

class App extends Component {

  render(){
    return (
      <View onRouteChange={(location, action)=>{
        // console.log(location, action)
      }}>
        <Pages
          routes={[
            {path: '/', component: Welcome},
            {path: '/citys', component: Citys},
            {path: '/picker', component: Picker},
            {path: '/countdown', component: Countdown},
            {path: '/keyboard', component: Keyboard},
            {path: '/popup', component: Popup},
            {path: '/dialog', component: Dialog},
            {path: '/accordion', component: Accordion},
            {path: '/buttons', component: Buttons},
            {path: '/tabs', component: Tabs},
            {path: '/list', component: List},
            {path: '/media-list', component: MediaList},
            {path: '/swipe-out', component: SwipeOut},
            {path: '/CheckboxesRadios', component: CheckboxesRadios},
            {path: '/inputs', component: Inputs},
            {path: '/grid', component: Grid},
          ]}
        />
      </View>
    )
  }
}


render(
  <App/>,
  document.getElementById('root')
)
