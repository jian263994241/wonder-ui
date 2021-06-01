/**
 * title: 基础栅格
 * desc: 使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列`Col`必须放在 `Row` 内。
 */

/** @jsx jsx */
import { jsx, Row, Col, styled } from '@wonder-ui/core';

const Block = styled('div', { target: 'demo-block' })({
  background: '#0092ff',
  padding: 16,
  color: '#fff',
  textAlign: 'center'
});

export default function Example() {
  return (
    <div
      css={{
        '.WuiCol-root:nth-of-type(odd) .demo-block': {
          background: '#0586e9'
        }
      }}
    >
      <Row>
        <Col>
          <Block>1 of 2</Block>
        </Col>
        <Col>
          <Block>2 of 2</Block>
        </Col>
      </Row>
      <Row>
        <Col>
          <Block>1 of 4</Block>
        </Col>
        <Col>
          <Block>2 of 4</Block>
        </Col>
        <Col>
          <Block>3 of 4</Block>
        </Col>
        <Col>
          <Block>4 of 4</Block>
        </Col>
      </Row>
    </div>
  );
}
