/**
 * title: 基础用法
 * desc: 使用`overlay`自定义内容
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  jsx,
  Container,
  DropdownMenu,
  DropdownMenuItem
} from '@wonder-ui/core';

export default function Example() {
  return (
    <Container size="sm">
      <DropdownMenu>
        <DropdownMenuItem arrow overlay={<div>全部商品 ... </div>}>
          全部商品
        </DropdownMenuItem>
        <DropdownMenuItem arrow overlay={<div>好评排序 ...</div>}>
          好评排序
        </DropdownMenuItem>
      </DropdownMenu>
    </Container>
  );
}
