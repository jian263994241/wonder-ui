import React from 'react';
import PropTypes from 'prop-types';
import EmptyIcon from './EmptyIcon';
import styled from 'styled-components';

const Wrap = styled.div `
  margin: 8px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`

const Description = styled.p  `
  color: rgba(0,0,0,0.38);
  line-height: 1;
  padding: 0;
  margin: 0;
`
/**
 * @visibleName Empty 空状态
 */
const Empty = React.forwardRef((props, ref)=>{
  const { 
    description = '暂无数据',
    image: Image = EmptyIcon,
    imageStyle,
    children,
    ...rest
  } = props;
  
  return (
    <Wrap ref={ref} {...rest}>
      <Image style={imageStyle}/>
      <Description>{description}</Description>
    </Wrap>
  )
});

Empty.propTypes = {
  /**
   * 自定义描述内容
   */
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  image: PropTypes.element,
  imageStyle: PropTypes.object,
};

export default Empty;