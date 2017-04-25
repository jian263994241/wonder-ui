
import React, {Component} from 'react'
import {render} from 'react-dom'
import {RouterDOM} from 'kui'


import IndexPage from './pages/IndexPage'
import ListView from './pages/ListView'
import MediaLists from './pages/MediaLists'
import Swipeable from './pages/Swipeable'
import AccordionList from './pages/AccordionList'
import VirtualList from './pages/VirtualList'
import Formelements from './pages/Formelements'
import CheckboxesRadios from './pages/CheckboxesRadios'
import Buttons from './pages/Buttons'
import Grid from './pages/Grid'
import Icons from './pages/Icons'
import LazyLoad from './pages/LazyLoad'
import Tab from './pages/Tab'
import TabAnimation from './pages/TabAnimation'
import TabStatic from './pages/TabStatic'

const {HashRouter, MemoryRouter, Route, Link} = RouterDOM;

const Router = HashRouter;

const App = ()=>(
  <Router>
    <div className="pages">
      <Route exact path="/" component={IndexPage}/>
      <Route path="/swipeable" component={Swipeable}/>
      <Route path="/ListView" component={ListView}/>
      <Route path="/MediaLists" component={MediaLists}/>
      <Route path="/AccordionList" component={AccordionList}/>
      <Route path="/VirtualList" component={VirtualList}/>
      <Route path="/Formelements" component={Formelements}/>
      <Route path="/CheckboxesRadios" component={CheckboxesRadios}/>
      <Route path="/Buttons" component={Buttons}/>
      <Route path="/Grid" component={Grid}/>
      <Route path="/Icons" component={Icons}/>
      <Route path="/LazyLoad" component={LazyLoad}/>
      <Route path="/Tab" component={Tab}/>
      <Route path="/Tab/Animation" component={TabAnimation}/>
      <Route path="/Tab/Static" component={TabStatic}/>
    </div>
  </Router>
);



render(<App/>, document.querySelector('.root'));
