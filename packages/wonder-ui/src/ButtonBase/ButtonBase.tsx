import * as React from 'react';
import { useTouchFeedback, useForkRef } from '@wonder-ui/hooks';
import useThemeProps from '../styles/useThemeProps';
import styled from '../styles/styled';

const ButtonRoot = styled.button({
  display: 'inline-block',
  position: 'relative',
  textAlign: 'center',
  // Remove grey highlight
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent', // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 'none',
  border: '1px solid transparent',
  margin: 0, // Remove the margin in Safari
  borderRadius: 0,
  padding: 0, // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none', // Reset
  textDecoration: 'none',
  fontSize: 'inherit',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.
  },
  '&[disabled]': {
    pointerEvents: 'none', // Disable link interactions
    cursor: 'not-allowed'
  }
});

export interface ButtonBaseProps {
  /**
   * @description 点击时的状态样式名
   * @default state-active
   */
  activeClassName?: string;
  /**
   * 子节点
   */
  children?: React.ReactNode;
  /**
   * 样式名
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 相当于 a 链接的 href 属性，component = a 存在时生效
   */
  href?: string;
  /**
   * 相当于 a 链接的 target 属性，href 存在时生效
   */
  target?: string;
  /**
   * 获取element
   */
  ref?: React.Ref<any>;
  /**
   * @description 渲染的节点类型
   * @default button
   */
  component?: string;
  /**
   * 点击按钮时的回调
   */
  onClick?: (event: React.SyntheticEvent) => void;
}

const ButtonBase: React.FC<ButtonBaseProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiButtonBase' });
    const {
      component = 'button',
      activeClassName = 'state-active',
      href,
      ...rest
    } = props;

    const elementRef = useTouchFeedback({ activeClassName });
    const handleRef = useForkRef(elementRef, ref);

    return <ButtonRoot as={component} href={href} ref={handleRef} {...rest} />;
  }
);

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;
