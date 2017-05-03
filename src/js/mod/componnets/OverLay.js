import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import $ from '../utils/dom'

export default class OverLay extends Component {

  static uiName = 'OverLay';

  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: true
  }
  
  state = {
    show: true
  }

  componentDidMount() {
    const {show} = this.props;
    this.setState({show}, ()=>{
      $(this.refs.OverLay).addClass('modal-overlay-visible');
    });
  }

  componentWillReceiveProps(nextProps) {
    const {show} = nextProps;
    this.setState({show});
  }

  render() {

    const {
      show
    } = this.state;

    const cls = classnames('modal-overlay');

    return (
      <div className={cls} ref="OverLay"></div>
    );
  }
}
