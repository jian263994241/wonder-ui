/**
 * title: 设置一列宽度
 * desc: 使用 `Row` 上的 `rowCols` prop 设置均分的栅格。 `Col` 上的 `cols` prop 可以单独设置以覆盖`rowCols`
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
    <Row rowCols={4}>
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
    <Row rowCols={5}>
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

    <Row rowCols={3}>
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
