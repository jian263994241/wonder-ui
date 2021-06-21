/**
 * title: 图标
 * inline: true
 */
import { Typography, Row, Col, styled } from '@wonder-ui/core';
import * as icons from '@wonder-ui/icons';

const StyledRow = styled(Row)({
  '.col': {
    textAlign: 'center'
  },
  '.icon': {
    boxSizing: 'border-box',
    background: '#f8f9fa',
    color: '#444444',
    borderRadius: '0.25rem',
    padding: '1.5rem 1rem',
    marginBottom: '0.5rem',
    transition: 'all 300ms'
  },
  '.icon:hover': {
    background: '#e3e5e7',
    color: '#000'
  },
  '.name': {
    color: '#6c757d'
  }
});

export default () => (
  <StyledRow rowCols={{ xs: 2, sm: 3, md: 4 }} gutter={[2, 2]}>
    {(Object.keys(icons) as Array<keyof typeof icons>).map((key, index) => {
      const Icon = icons[key];
      return (
        <Col className="col" key={index}>
          <div className="icon">
            <Icon key={index} fontSize="large" />
          </div>
          <Typography className="name" noWrap variant="body2">
            {Icon.displayName}
          </Typography>
        </Col>
      );
    })}
  </StyledRow>
);
