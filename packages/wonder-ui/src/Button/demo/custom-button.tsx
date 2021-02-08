/**
 * title: 自定义按钮
 * desc:  用 `ButtonBase` 基础样式组件扩展按钮, 可以用`styled`扩展出新的样式组件,也可以直接用`jsx`复写样式
 *
 */
/** @jsx jsx */
import { ButtonBase, styled, jsx } from '@wonder-ui/core';

const Button = styled(ButtonBase)({
  color: '#fff',
  backgroundColor: '#0d6efd',
  borderColor: '#0d6efd',
  fontSize: 14,
  padding: '.375rem .75rem',
  borderRadius: '.25rem',
  '&.state-active': {
    opacity: 0.8
  }
});

export default function Example() {
  return <Button css={{ fontSize: 20 }}>自定义按钮</Button>;
}
