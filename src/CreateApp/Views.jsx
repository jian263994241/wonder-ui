import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleViews} from './Styled';
import createHistory from 'history/createHashHistory';
import Router from 'react-router-dom/Router';

export default class Views extends Component {

  static propTypes = {
    basename: PropTypes.string,
    getUserConfirmation: PropTypes.func,
    hashType: PropTypes.oneOf([ 'hashbang', 'noslash', 'slash' ]),
    children: PropTypes.node,
    history: PropTypes.object,
    statusbarStyle: PropTypes.object,
  }

  static defaultProps = {
    hashType: 'hashbang'
  }

  constructor(props){
    super(props);

    this.history = props.history || createHistory({
      basename: props.basename,
      hashType: props.hashType,
      getUserConfirmation: props.getUserConfirmation
    });

  }

  render(){
    const {
      basename,
      hashType,
      getUserConfirmation,
      history,
      statusbarStyle,
      ...rest
    } = this.props;

    const Fragment = React.Fragment || 'div';

    return (
      <Fragment>
        <div className="statusbar-overlay" style={statusbarStyle}></div>
        <Router history={this.history}>
          <StyleViews {...rest}/>
        </Router>
      </Fragment>
    )
  }
}
