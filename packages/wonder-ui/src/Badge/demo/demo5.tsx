/**
 * title: 角标
 * desc:
 */

/** @jsx jsx */
import { jsx, Badge, Space, styled } from '@wonder-ui/core';

const Wrapper = styled('div')`
  display: inline-block;
  position: relative;
`;

const Block = styled('div')`
  width: 42px;
  height: 42px;
  border-radius: 2px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
`;

export default function Example() {
  return (
    <Space wrap size="large">
      <Wrapper>
        <Block></Block>
        <Badge color="danger" sup></Badge>
      </Wrapper>
      <Wrapper>
        <Block></Block>
        <Badge text="+99" color="danger" rounded sup></Badge>
      </Wrapper>
    </Space>
  );
}
