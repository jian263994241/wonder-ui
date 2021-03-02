/**
 * title: 基础栅格
 * desc: 使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列`Col`必须放在 `Row` 内。
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
          '&:nth-of-type(odd)': {
            background: '#0586e9'
          }
        }
      }}
    >
      <Row>
        <Col cols={true}>1 of 2</Col>
        <Col cols={true}>2 of 2</Col>
      </Row>
      <Row>
        <Col cols={{ sm: true }}>1 of 3</Col>
        <Col cols={{ sm: true }}>2 of 3</Col>
        <Col cols={{ sm: true }}>3 of 3</Col>
      </Row>
    </div>
  );
}
