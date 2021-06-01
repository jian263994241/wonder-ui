/**
 * title: 响应的栅格
 * desc: 使用 `Row` 上的 `rowCols` prop 设置均分的栅格。 `Col` 上的 `cols` prop 可以单独设置以覆盖`rowCols`
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
      <Row rowCols={{ sm: 2, md: 1, lg: 5 }}>
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
