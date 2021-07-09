/**
 * title: 基本使用
 * desc: 使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列`Col`必须放在 `Row` 内。
 */
import { Row, Col, styled } from '@wonder-ui/core';

const Container = styled('div')`
  .WuiCol-root:nth-of-type(odd) .demo-block {
    background: #0586e9;
  }
`;

const Block = styled('div', { target: 'demo-block' })`
  background: #0092ff;
  padding: 16px;
  color: #fff;
  text-align: center;
`;

export default () => (
  <Container>
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
  </Container>
);
