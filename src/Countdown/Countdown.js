import PropTypes from 'prop-types';
import React, {createElement, Component, Fragment} from 'react';

export default class Countdown extends Component{

  static propTypes = {

    /**
     * 倒计时的秒数
     */
    secondsResidue: PropTypes.number,

    /**
     * 初始状态文本
     */
    defaultText: PropTypes.string,

    /**
     * 初始状态文本
     */
    defaultText2: PropTypes.string,

    /**
     * 倒计时状态的文本
     */
    text: PropTypes.string,


    /**
     * 点击执行 done=>done()
     */

    onStart: PropTypes.func.isRequired,

    /**
     * DidMount时开始执行 onStart
     */
    runOnMount: PropTypes.bool,
    /**
     * 改变喧嚷的 node
     */
    render: PropTypes.func
  }

  static defaultProps = {
    secondsResidue: 60,
    defaultText: '获取验证码',
    defaultText2: '重新发送',
    text: '%ss'
  }

  state = {
    process: false,
    secondsResidue: 0,
    initial: true
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
        this.setState({ process: true, initial: false });
      });
    }
  }

  render() {
    const {
      children,
      component,
      defaultText2,
      defaultText,
      onClick,
      onStart,
      render,
      runOnMount,
      secondsResidue,
      text,
      ...rest
    } = this.props;

    const content = this.state.process ? text.replace(/%s/, this.state.secondsResidue) : this.state.initial ? defaultText : defaultText2;

    const Wrapper = render ? render : ({content, ...props})=> <a style={{wordBreak: 'keep-all'}} {...props}>{content}</a>;

    return (
      <Wrapper onClick={this.clickHandler} disabled={this.state.process} {...rest} content={content}/>
    )

  }
}
