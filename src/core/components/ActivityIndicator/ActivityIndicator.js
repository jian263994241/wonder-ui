import React from 'react';
import PropTypes from 'prop-types';
import { idxx } from '../../utils/helpers';
import styled, { css, keyframes } from 'styled-components';
import Indicator from './Indicator';

const spin = keyframes `
  100% {
      transform: rotate(360deg);
  }
`;

const Text = styled.span `
  color: rgba(0,0,0,0.38);
  margin-left: 3px;
`;  

const Wrapper = styled.div(props=>{

  const { size, animating = true } = props;

  let ani, box;

  box = css `
    width: 34px;
    height: 34px;
  `

  if(size == 'small'){
    box = css `
      width: 22px;
      height: 22px;
    `
  }

  if(size == 'large'){
    box = css `
      width: 46px;
      height: 46px;
    `
  }

  if(animating){
    ani = css `animation: ${spin} 1s steps(12, end) infinite;`
  }

  return css `
    text-align: center;
    svg {
      display: inline-block;
      vertical-align: middle;
      ${ani}
      ${box}
    }
  `
});

/**
 * @visibleName Indicator 活动指示器
 */
const ActivityIndicator = React.forwardRef((props, ref)=>{
  const {
    id: inputId, 
    animating = true,
    size = 'small',
    text,
    className,
    ...rest
  } = props;

  const id = React.useMemo(()=> ( inputId || idxx()), [id]);

  return (
    <Wrapper size={size} animating={animating} className={className}>
      <Indicator {...rest}/>
      {
        text && ( <Text>{text}</Text>)
      }
    </Wrapper>
  )
})

ActivityIndicator.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string,
}

export default ActivityIndicator;