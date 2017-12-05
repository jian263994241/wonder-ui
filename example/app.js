import React, {Component} from 'react';
import {render} from 'react-dom';
import {Views, View, Route, Pages, Page, PageContent, Link, Redirect} from '../src/Minimal';

import Welcome from './mod/Welcome';
import Citys from './mod/Citys';
import Picker from './mod/Picker';
import Countdown from './mod/Countdown';
import Keyboard from './mod/Keyboard';

class Demos extends Component {

  render(){
    return (
      <Views>
        <View>
          <Pages>
            <Route path="/" exact component={()=><Redirect to="/welcome"/>}/>
            <Route path="/welcome" component={Welcome}/>
            <Route path="/citys" component={Citys}/>
            <Route path="/picker" component={Picker}/>
            <Route path="/countdown" component={Countdown}/>
            <Route path="/keyboard" component={Keyboard}/>
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
