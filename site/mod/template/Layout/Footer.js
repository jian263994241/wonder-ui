import React, {Component} from 'react'
import {Row, Col} from 'antd'
import { RouterDOM } from 'kui'


const { Link } = RouterDOM;

export default class Footer extends Component {

  render() {

    const style = {
      padding:'10px', textAlign: 'center'
    }

    return (
      <footer id="footer" style={style}>{'© 2017 99BILL.'}</footer>
    );
  }
}
