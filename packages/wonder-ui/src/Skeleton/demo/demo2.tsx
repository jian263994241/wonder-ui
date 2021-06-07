/**
 * title: 显示头像
 */

/** @jsx jsx */
import { jsx, Skeleton, WhiteSpace } from '@wonder-ui/core';

export default function Example() {
  return (
    <div>
      <Skeleton avatar title />
      <WhiteSpace />
      <Skeleton avatar title />
    </div>
  );
}
