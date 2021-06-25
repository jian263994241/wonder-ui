/**
 * title: 图标
 * inline: true
 */

import * as icons from '@wonder-ui/icons';
import * as React from 'react';
import SourceCode from 'dumi-theme-default/src/builtins/SourceCode';
import { Col, InputBase, Popover, Row, styled } from '@wonder-ui/core';
import { DelayedRender } from '@wonder-ui/utils';
import { useBoolean } from '@wonder-ui/hooks';

const StyledRow = styled(Row)({
  '.col': {
    textAlign: 'center'
  },
  '.icon': {
    cursor: 'pointer',
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
    color: '#6c757d',
    fontSize: 12,
    textAlign: 'center'
  }
});

const IconItem: React.FC<any> = ({ Icon }) => {
  const [visible, actions] = useBoolean(false);
  const [anchorPosition, setAnchorPosition] = React.useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const actionRef = React.useRef<any>();

  const clickHandler = React.useCallback((e) => {
    setAnchorPosition({
      top: e.clientY,
      left: e.clientX
    });

    actions.setTrue();
  }, []);

  return (
    <React.Fragment>
      <Col className="col">
        <div className="icon" onClick={clickHandler}>
          <Icon fontSize="large" />
        </div>
        <InputBase
          className="name"
          value={Icon.displayName}
          actionRef={actionRef}
          onClick={() => {
            actionRef.current.focus({ cursor: 'all' });
          }}
          readOnly
          borderless
        />
      </Col>
      <Popover
        visible={visible}
        anchorReference="anchorPosition"
        anchorPosition={anchorPosition}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        onClose={() => actions.setFalse()}
      >
        <SourceCode
          lang="tsx"
          code={`import { ${Icon.displayName} } from '@wonder-ui/icons'  `}
        />
      </Popover>
    </React.Fragment>
  );
};

export default () => {
  return (
    <StyledRow rowCols={{ xs: 2, sm: 3, md: 4 }} gutter={[2, 2]}>
      {(Object.keys(icons) as Array<keyof typeof icons>).map((key, index) => {
        const Icon = icons[key];
        return (
          <DelayedRender key={key}>
            <IconItem Icon={Icon} />
          </DelayedRender>
        );
      })}
    </StyledRow>
  );
};
