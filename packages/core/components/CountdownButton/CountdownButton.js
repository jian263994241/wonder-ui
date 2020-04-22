import React from 'react';
import PropTypes from 'prop-types';

/**
 * 活动注册等短信验证码场景, 发送短信按钮
 * @visibleName CountdownButton 短信倒计时
 */
export default function CountdownButton(props){
  const {
    defaultText,
    defaultTextRe,
    onStart,
    onClick,
    totail = 60,
    text,
    runOnMount,
    render,
    ...rest
  } = props;
  const [isProcess, setProcess] = React.useState(false);
  const [initialled, setInitialled] = React.useState(false);
  const secondsResidue = React.useRef(totail);
  const [, forceUpdate] = React.useState();
  const interval = React.useRef(null);

  const tick = ()=>{
    if(secondsResidue.current <= 0){
      clearInterval(interval.current);
      setProcess(false);
    } else {
      secondsResidue.current = secondsResidue.current - 1;
      forceUpdate(Date.now());
    }
  };
  
  const clickHandler = (e)=>{
    if(onClick){
      onClick(e);
    }

    if(!isProcess && onStart){
      onStart(()=>{
        secondsResidue.current = totail;
        interval.current = setInterval(tick, 1000);
        setProcess(true);
        setInitialled(true);
      });
    }
  };
  
  React.useEffect(()=>{
    if(runOnMount){
      clickHandler();
    }
    return ()=>{
      clearInterval(interval.current);
    }
  }, []);

  const content = React.useMemo(()=>{
    if(isProcess){
      return text.replace(/%s/, secondsResidue.current);
    }
    return initialled ? defaultTextRe : defaultText;
  }, [isProcess, initialled, secondsResidue.current]);

  const Comp = render ? render: ({content, ...props})=> <a {...props}>{content}</a>

  return (
    <Comp 
      {...rest} 
      onClick={clickHandler} 
      disabled={isProcess} 
      content={content}
    />
  )
}

CountdownButton.defaultProps = {
  totail: 60,
  defaultText: '获取验证码',
  defaultTextRe: '重新发送',
  text: '%ss'
};

CountdownButton.displayName = 'CountdownButton';

CountdownButton.propTypes = {
  /**
   * 倒计时的秒数
   */
  totail: PropTypes.number,
  /**
   * 初始状态文本
   */
  defaultText: PropTypes.string,
  /**
   * 初始状态文本
   */
  defaultTextRe: PropTypes.string,
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
   * 改变渲染的 node
   */
  render: PropTypes.func
};