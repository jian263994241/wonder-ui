import React, {Component} from 'react'
import {Menu, Row, Col} from 'antd'
import { RouterDOM } from 'kui'


const { Link } = RouterDOM;

export default class MainContent extends Component {

  render() {


    return (
      <div className="main-wrapper">
        <Row>
          <Col lg={4} md={6} sm={24} xs={24}>
            <Menu className="aside-container"></Menu>
          </Col>
          <Col lg={20} md={18} sm={24} xs={24} className="main-container">
            
          </Col>
        </Row>
      </div>
    );
  }
}
