import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {HashRouter, MemoryRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import SlidePage from './SlidePage'
import initFastClicks from '../utils/fastclick'

export default class App extends Component {

  static uiName = 'App'

  static defaultProps = {
    fastclick: true
  }

  static propTypes = {
    type: PropTypes.string,
    fastclick: PropTypes.bool,
    fastclickConfig: PropTypes.object
  }

  componentDidMount() {
    const {fastclick, fastclickConfig} = this.props;
    if(fastclick){
      initFastClicks(fastclickConfig);
    }
  }

  render() {
    const {
      className,
      children,
      fastclick,
      fastclickConfig,
      ...rest
    } = this.props;

    const cls = classnames('views', className);

    return (
      <div className={cls}>
        {children}
      </div>
    );
  }
}
