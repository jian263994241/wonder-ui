import React, {Component} from 'react';
import {render} from 'react-dom';
import {Views, View, Route, Pages, Page, PageContent, Link} from '../../src/Minimal';
import {MemoryRouter} from 'react-router-dom';

class PageA extends Component {

  render(){
    return (
      <Page>
        <PageContent scrollView={false}>
          <h1><Link to="/b">b</Link></h1>
          <img src="https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=3195e9b79616fdfac76cc0ee848e8cea/cc11728b4710b9125e86e462c8fdfc03934522e2.jpg" alt=""/>
          
        </PageContent>
      </Page>
    )
  }
}

class PageB extends Component {

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        img: (
          <div>
            <img src="https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5d35836e761ed21b66c928e59d6fddae/b21bb051f8198618ecdbfd1841ed2e738ad4e68a.jpg" alt=""/>
            12312321
            <img src="https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5d35836e761ed21b66c928e59d6fddae/b21bb051f8198618ecdbfd1841ed2e738ad4e68a.jpg" alt=""/>
            <img src="https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5d35836e761ed21b66c928e59d6fddae/b21bb051f8198618ecdbfd1841ed2e738ad4e68a.jpg" alt=""/>
            <img src="https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5d35836e761ed21b66c928e59d6fddae/b21bb051f8198618ecdbfd1841ed2e738ad4e68a.jpg" alt=""/>
          </div>
        )
      })
    }, 1000)
  }

  state = {
    img: null
  }

  render(){
    return (
      <Page>
        <PageContent>
          <h1><Link to="/">a</Link></h1>
          {
            this.state.img
          }
        </PageContent>

      </Page>
    )
  }
}

export default class Example extends Component {

  render(){
    return (
      <Views>
        <View>
          <Pages>
            <Route path="/" exact component={PageA}/>
            <Route path="/b" component={PageB}/>
          </Pages>
        </View>
      </Views>
    )
  }
}


render(
  <Example/>,
  document.querySelector('.root')
)
