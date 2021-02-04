/**
 * title: 自定义按钮
 * desc:  用 `ButtonBase` 基础样式组件扩展按钮
 *
 */
/** @jsx jsx */
import { ButtonBase, styled, jsx } from '../../index';

const Button = styled(ButtonBase)({
  color: '#fff',
  backgroundColor: '#0d6efd',
  borderColor: '#0d6efd',
  fontSize: 14,
  padding: '.375rem .75rem',
  borderRadius: '.25rem',
  '&.touch-active': {
    opacity: 0.8
  }
});

export default function Example() {
  return <Button>自定义按钮</Button>;
}
