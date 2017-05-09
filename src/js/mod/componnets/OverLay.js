import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import $ from '../utils/dom'

export default class OverLay extends Component {

  static uiName = 'OverLay';

  static propTypes = {
    opened: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    opened: false
  }

  state = {
    opened: false
  }

  componentDidMount() {
    const {opened} = this.props;
    this.setState({opened});
  }

  componentWillReceiveProps(nextProps) {
    const {opened} = nextProps;
    this.setState({opened});
  }

  render() {

    const {
      opened,
      onTouchMove,
      className,
      ...other
    } = this.props;

    const preventScrolling = () =>{
      return false;
    };

    const cls = classnames(className, {'modal-overlay-visible': this.state.opened});

    return (
      <div className={cls} ref="OverLay" onTouchMove={preventScrolling} {...other}></div>
    );
  }
}
