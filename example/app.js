import React, {Component} from 'react';
import {render} from 'react-dom';
import {Views,View, Pages} from '../src/Core';

import Welcome from './mod/Welcome';
import Citys from './mod/Citys';
import Picker from './mod/Picker';
import Countdown from './mod/Countdown';
import Keyboard from './mod/Keyboard';
import Popup from './mod/Popup';
import Dialog from './mod/Dialog';
import PopupPage from './mod/PopupPage';
import Accordion from './mod/Accordion';
import Buttons from './mod/Buttons';
import Tabs from './mod/Tabs';
import List from './mod/List';
import MediaList from './mod/MediaList';
import SwipeOut from './mod/SwipeOut';
import CheckboxesRadios from './mod/CheckboxesRadios';

class App extends Component {

  render(){
    return (
      <Views onRouteChange={(location, action)=>console.log(location, action)}>
        <Views>
          <View>
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
              ]}
            />
          </View>

        </Views>
      </Views>
    )
  }
}


render(
  <App/>,
  document.querySelector('.root')
)
