
import React, {Component} from 'react'
import {render} from 'react-dom'
import {RouterDOM, Pages, App} from 'kui'


import IndexPage from './mod/IndexPage'
import ListView from './mod/ListView'
import MediaLists from './mod/MediaLists'
import Swipeable from './mod/Swipeable'
import AccordionList from './mod/AccordionList'
import VirtualList from './mod/VirtualList'
import Formelements from './mod/Formelements'
import CheckboxesRadios from './mod/CheckboxesRadios'
import Buttons from './mod/Buttons'
import Grid from './mod/Grid'
import Icons from './mod/Icons'
import LazyLoad from './mod/LazyLoad'
import Tab from './mod/Tab'
import TabAnimation from './mod/TabAnimation'
import TabStatic from './mod/TabStatic'
import PullToRefresh from './mod/PullToRefresh'
import Modals from './mod/Modals'
import Preloader from './mod/Preloader'
import InfiniteScroll from './mod/InfiniteScroll'
import Picker from './mod/Picker'
import Keyboard from './mod/Keyboard'
const {Route, Link, Redirect} = RouterDOM;

render((
  <App type="hash">
    <Pages>
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
      <Route path="/Tab/Index" component={Tab}/>
      <Route path="/Tab/Animation" component={TabAnimation}/>
      <Route path="/Tab/Static" component={TabStatic}/>
      <Route path="/PullToRefresh" component={PullToRefresh}/>
      <Route path="/Modals" component={Modals}/>
      <Route path="/Preloader" component={Preloader}/>
      <Route path="/Picker" component={Picker}/>
      <Route path="/InfiniteScroll" component={InfiniteScroll}/>
      <Route path="/Keyboard" component={Keyboard}/>
    </Pages>
  </App>
), document.querySelector('.root'));
