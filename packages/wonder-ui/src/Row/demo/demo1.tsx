/**
 * title: 基础栅格
 * desc: 使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列`Col`必须放在 `Row` 内。
 */

/** @jsx jsx */
import { jsx, Row, Col, styled } from '@wonder-ui/core';

const Block = styled('div')({
  background: '#0092ff',
  padding: '16px 0',
  color: '#fff',
  textAlign: 'center'
});

export default function Example() {
  return (
    <Row>
      <Col>
        <Block>col-4</Block>
      </Col>

      <Col cols={4}>
        <Block>col-4</Block>
      </Col>

      <Col cols={4}>
        <Block>col-4</Block>
      </Col>
    </Row>
  );
}
