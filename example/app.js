
import React, {Component} from 'react'
import {render} from 'react-dom'
import {RouterDOM, Pages, App, AppRoute} from 'kui'


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
import SortableList from './mod/SortableList'


render((
  <App>
    <AppRoute exact path="/" component={IndexPage}/>
    <AppRoute path="/swipeable" component={Swipeable}/>
    <AppRoute path="/ListView" component={ListView}/>
    <AppRoute path="/MediaLists" component={MediaLists}/>
    <AppRoute path="/AccordionList" component={AccordionList}/>
    <AppRoute path="/VirtualList" component={VirtualList}/>
    <AppRoute path="/SortableList" component={SortableList}/>
    <AppRoute path="/Formelements" component={Formelements}/>
    <AppRoute path="/CheckboxesRadios" component={CheckboxesRadios}/>
    <AppRoute path="/Buttons" component={Buttons}/>
    <AppRoute path="/Grid" component={Grid}/>
    <AppRoute path="/Icons" component={Icons}/>
    <AppRoute path="/LazyLoad" component={LazyLoad}/>
    <AppRoute path="/Tab/Index" component={Tab}/>
    <AppRoute path="/Tab/Animation" component={TabAnimation}/>
    <AppRoute path="/Tab/Static" component={TabStatic}/>
    <AppRoute path="/PullToRefresh" component={PullToRefresh}/>
    <AppRoute path="/Modals" component={Modals}/>
    <AppRoute path="/Preloader" component={Preloader}/>
    <AppRoute path="/Picker" component={Picker}/>
    <AppRoute path="/InfiniteScroll" component={InfiniteScroll}/>
    <AppRoute path="/Keyboard" component={Keyboard}/>
  </App>
), document.querySelector('.root'));
