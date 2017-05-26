
import React, {Component} from 'react'
import {render} from 'react-dom'
import {RouterDOM} from 'kui'
import {Menu, Row, Col} from 'antd'

import Header from './mod/template/Layout/Header'
import Footer from './mod/template/Layout/Footer'
import MainContent from './mod/template/Content/MainContent'
import GettingStarted from './mod/pages/components/GettingStarted'

const {HashRouter: Router, Route, Link, Redirect} = RouterDOM;




const App = (
  <Router>
    <div className="page-wrapper">
      <Header></Header>
      <Route exact path="components/doc?" component={GettingStarted}></Route>
      <Redirect from="/components" to="/components/getting-started"></Redirect>
      <Footer></Footer>
    </div>
  </Router>
);

render(App, document.querySelector('#react-content'));
