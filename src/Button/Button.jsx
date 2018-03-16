import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import {StyledButton} from './Styled';

export default class Button extends PureComponent {

  static propTypes = {

    /**
     * 主题颜色
     */
    theme: PropTypes.shape({
      /**
       * blue, red, white, black, lightblue, yellow, orange, pink, green, gray
       */
      color: PropTypes.oneOf(['blue', 'red', 'white', 'black', 'lightblue', 'yellow', 'orange', 'pink', 'green', 'gray', 'default'])
    }),

    /**
     * 填充按钮色
     */
    fill: PropTypes.bool,

    /**
     * 圆角按钮
     */
    round: PropTypes.bool,

    /**
     * 激活状态
     */
    active: PropTypes.bool,

    /**
     * 按钮大小, 默认小
     */
    big: PropTypes.bool,


    /**
     * 改变喧嚷的 node
     */

   as: PropTypes.oneOfType([
     PropTypes.func,
     PropTypes.string
   ])
  }

  static defaultProps = {
    theme: {color: 'default'},
    fill: undefined,
    round: undefined,
    active: undefined,
    big: undefined,
  }

  render(){

    return <StyledButton {...this.props}/>
  }
}
