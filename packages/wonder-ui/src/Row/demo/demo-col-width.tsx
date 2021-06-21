/**
 * title: Col宽度
 * desc: 使用`col={number}`您可以为列赋予其预设宽度
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
    <Row rowCols={6}>
      <Col>
        <Block>1 of 4</Block>
      </Col>
      <Col col={4}>
        <Block>2 of 4</Block>
      </Col>
      <Col>
        <Block>3 of 4</Block>
      </Col>
      <Col>
        <Block>4 of 4</Block>
      </Col>
    </Row>
    <Row rowCols={6}>
      <Col>
        <Block>1 of 4</Block>
      </Col>
      <Col offset={2}>
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
