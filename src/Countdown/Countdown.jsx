import React, {Component, createElement} from 'react';
import PropTypes from 'prop-types';


export default class Countdown extends Component{

  static propTypes = {
    secondsResidue: PropTypes.number,
    defaultText: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    text: PropTypes.string,
    onStart: PropTypes.func.isRequired,
    runOnMount: PropTypes.bool
  }

  static defaultProps = {
    secondsResidue: 60,
    component: 'div',
    defaultText: '发送验证码',
    text: '%s秒后重新发送'
  }

  state = {
    process: false,
    secondsResidue: 0
  }

  componentWillMount() {
    const {secondsResidue} = this.props;
    this.setState({secondsResidue});
  }

  componentDidMount() {
    const {runOnMount} = this.props;
    if(runOnMount){
      this.clickHandler();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = ()=>{
    const {secondsResidue} = this.props;
    this.setState((prevState) => {
      if(prevState.secondsResidue <= 0){
        clearInterval(this.interval);
        return {
          process: false,
          secondsResidue
        };
      }
      return {
        secondsResidue: prevState.secondsResidue - 1
      };
    });
  }

  clickHandler = ()=>{
    const {onStart} = this.props;
    if(!this.state.process){
      onStart(()=>{
        this.interval = setInterval(() => this.tick(), 1000);
        this.setState({ process: true });
      });
    }
  }

  render() {
    const {
      defaultText,
      text,
      component,
      onStart,
      secondsResidue,
      children,
      onClick,
      runOnMount,
      ...rest
    } = this.props;

    const content = this.state.process? text.replace(/%s/, this.state.secondsResidue) : defaultText;

    return createElement(component, {onClick: this.clickHandler, ...rest}, content);
  }
}
