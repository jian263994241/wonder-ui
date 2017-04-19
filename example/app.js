
import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router} from 'kui'


import IndexPage from './pages/IndexPage'
import Swipeable from './pages/Swipeable'

const {HashRouter, Route, Link} = Router;

const App = ()=>(
  <HashRouter>
    <div className="pages">
      <Route exact path="/" component={IndexPage}/>
      <Route path="/swipeable" component={Swipeable}/>
    </div>
  </HashRouter>
);



render(<App/>, document.querySelector('.root'));
