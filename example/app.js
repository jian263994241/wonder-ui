import React, {Component} from 'react';
import {render} from 'react-dom';
import {Views, View, Route, Pages, Page, PageContent, Link, Redirect, PopupRoute} from '../src/CreateApp';

import Welcome from './mod/Welcome';
import Citys from './mod/Citys';
import Picker from './mod/Picker';
import Countdown from './mod/Countdown';
import Keyboard from './mod/Keyboard';
import Popup from './mod/Popup';
import Dialog from './mod/Dialog';
import PopupPage from './mod/PopupPage';

class Demos extends Component {

  render(){
    return (
      <Views>
        <View>
          <Pages>
            <Route path="/" exact component={Welcome}/>
            <Route path="/citys" component={Citys}/>
            <Route path="/picker" component={Picker}/>
            <Route path="/countdown" component={Countdown}/>
            <Route path="/keyboard" component={Keyboard}/>
            <Route path="/popup" component={Popup}/>
            <Route path="/dialog" component={Dialog}/>

          </Pages>

        </View>
      </Views>
    )
  }
}


render(
  <Demos/>,
  document.querySelector('.root')
)
