import React from 'react';
import PropTypes from 'prop-types';
import repeat from './repeat';
import { 
  WUI_skeleton, 
  WUI_skeleton_header, 
  WUI_skeleton_content,
  WUI_skeleton_paragraph
} from './styles';
/**
 * 在需要等待加载内容的位置提供一个占位图形组合。
 * @visibleName Skeleton骨架屏
 */
const Skeleton = React.forwardRef((props, ref)=>{
  const {
    active,
    avatar,
    paragraph,
    title,
    loading,
    children,
    paragraphProps={}
  } = props;

  if(!loading){
    return children;
  }
  
  return (
    <WUI_skeleton>
      <WUI_skeleton_header>
        123
      </WUI_skeleton_header>
      <WUI_skeleton_content>
        <WUI_skeleton_paragraph>
          {repeat(<li/>, paragraphProps.rows || 3)}
        </WUI_skeleton_paragraph>
      </WUI_skeleton_content>
    </WUI_skeleton>
  )
});

Skeleton.defaultProps = {
  loading: true,
  paragraphProps: {
    rows: 3
  }
};

Skeleton.propTypes = {
  /**
   * 是否展示动画效果
   */
  active: PropTypes.bool,
  /**
   * 是否显示头像占位图
   */
  avatar: PropTypes.bool,
  /**
   * 是否显示段落占位图
   */
  paragraph: PropTypes.bool,
  /**
   * 是否显示标题占位图
   */
  title: PropTypes.bool,
  /**
   * 为 `true` 时，显示占位图。反之则直接展示子组件
   */
  loading: PropTypes.bool,
};


export default Skeleton;