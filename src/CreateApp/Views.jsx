import React, {Component, Children, createElement} from 'react';
import PropTypes from 'prop-types';
import {StyleViews, StyleView} from './Styled';
import HashRouter from 'react-router-dom/HashRouter';

export default class Views extends Component {

  static propTypes = {
    statusbar: PropTypes.bool,
    statusbarStyle: PropTypes.object,
    routerConf: PropTypes.object,
    router: PropTypes.func,
    onRouteChange: PropTypes.func
  }

  static defaultProps = {
    statusbar: false,
    routerConf: {
      hashType: 'hashbang',
      basename: '',
      getUserConfirmation: null
    },
    router: HashRouter,
    onRouteChange: val=>val
  }

  static View = val => val;

  componentDidMount(){
    const history = this.refs.router.history;
    this._unlisten = history.listen(this.props.onRouteChange);
  }

  componentWillUnMount(){
    this._unlisten();
  }

  render(){
    const {
      statusbar,
      statusbarStyle,
      router,
      routerConf,
      children,
      onRouteChange,
      ...rest
    } = this.props;

    const Fragment = React.Fragment || 'div';
    const Router = router || Fragment;

    const $children = Children.toArray(children);
    const main = $children.length === 1 ? true: false;

    return (
      <Fragment>
        {statusbar && (
          <div className="statusbar-overlay" style={statusbarStyle}></div>
        )}
        <Router {...routerConf} ref="router">
          <StyleViews {...rest}>
            {
              $children.map(({props}, i)=>{
                return createElement(StyleView, {main, key: `view_${i}`, ...props});
              })
            }
          </StyleViews>
        </Router>
      </Fragment>
    )
  }
}
