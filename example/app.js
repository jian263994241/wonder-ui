
import React, {Component} from 'react'
import {render} from 'react-dom'
import {RouterDOM} from 'kui'


import IndexPage from './pages/IndexPage'
import ListView from './pages/ListView'
import MediaLists from './pages/MediaLists'
import Swipeable from './pages/Swipeable'
import AccordionList from './pages/AccordionList'

const {HashRouter, MemoryRouter, Route, Link} = RouterDOM;

const Router = HashRouter;

const App = ()=>(
  <Router>
    <div className="pages">
      <Route exact path="/" component={IndexPage}/>
      <Route path="/swipeable" component={Swipeable}/>
      <Route exact path="/ListView" component={ListView}/>
      <Route exact path="/MediaLists" component={MediaLists}/>
      <Route exact path="/AccordionList" component={AccordionList}/>
    </div>
  </Router>
);



render(<App/>, document.querySelector('.root'));
