import React, {Component, createElement} from 'react';
import PropTypes from 'prop-types';
import createTag from '../utils/createTag';

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
    as: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ])
  }

  static defaultProps = {
    secondsResidue: 60,
    as: 'div',
    defaultText: '获取验证码',
    text: '获取验证码(%s)'
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

    const Wrapper = createTag();

    return (
      <Wrapper onClick={this.clickHandler} {...rest} >{content}</Wrapper>
    )

  }
}
