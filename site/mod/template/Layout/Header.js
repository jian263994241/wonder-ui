import React, {Component} from 'react'
import { Menu, Row, Col} from 'antd'
import { RouterDOM } from 'kui'


const { Link, NavLink } = RouterDOM;

export default class CustomHeader extends Component {

  render() {

    return (
      <header id="header" className="home-nav-white clearfix">
        <Row>
          <Col lg={4} md={5} sm={24} xs={24}>
            <Link to="/" id="logo">
              <img alt="logo" src={__inline('/site/style/logo.svg')} />
              <span>Moblie UI</span>
            </Link>
          </Col>
          <Col lg={20} md={19} sm={0} xs={0}>
            <Menu mode="horizontal" id="nav">
              <Menu.Item key="1">
                <NavLink activeClassName="active" to="/">首页</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink activeClassName="active" to="/components">组件</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink activeClassName="active" to="/">下载</NavLink>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    );
  }
}
