/**
 * title: 均分的栅格
 * desc: 使用 `Row` 上的 `rowCols` prop 设置均分的栅格。 `Col` 上的 `cols` prop 可以单独设置以覆盖`rowCols`
 */

/** @jsx jsx */
import { jsx, Row, Col } from '@wonder-ui/core';

export default function Example() {
  return (
    <div
      css={{
        '.WuiContainer-root + .WuiContainer-root': {
          marginTop: 1
        },
        '.WuiCol-root': {
          background: '#0092ff',
          paddingTop: 16,
          paddingBottom: 16,
          color: '#fff',
          textAlign: 'center',
          '&:nth-child(odd)': {
            background: '#0586e9'
          }
        }
      }}
    >
      <Row rowCols={4}>
        <Col>1 of 4</Col>
        <Col>2 of 4</Col>
        <Col>3 of 4</Col>
      </Row>
      <Row rowCols={3}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>4 of 3</Col>
      </Row>

      <Row rowCols={3}>
        <Col>1 of 3</Col>
        <Col cols={8}>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>4 of 3</Col>
      </Row>
    </div>
  );
}
