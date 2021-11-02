/**
 * title: 图标
 * inline: true
 */

import * as icons from '@wonder-ui/icons';
import { Search } from '@wonder-ui/icons';
import * as React from 'react';
import SourceCode from 'dumi-theme-default/src/builtins/SourceCode';
import {
  Button,
  ButtonGroup,
  Col,
  Empty,
  Input,
  Popover,
  Row,
  Space,
  TabContext,
  TabPane,
  styled
} from '@wonder-ui/core';
import { findAll } from '@wonder-ui/utils';
import { useDebounce, useToggle, useInViewport } from '@wonder-ui/hooks';

const { outlinedIcons, filledIcons } = (() => {
  const outlinedIcons: string[] = [],
    filledIcons: string[] = [];

  Object.keys(icons).forEach((iconName) => {
    if (iconName.match(/Fill/g)) {
      filledIcons.push(iconName);
    } else {
      outlinedIcons.push(iconName);
    }
  });

  return { outlinedIcons, filledIcons };
})();

const StyledRow = styled(Row)({
  '.col': {
    textAlign: 'center',
    height: 125
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

const IconItem: React.FC<any> = ({ Icon, onOpen }) => {
  const rootRef = React.useRef<any>();
  const _visible = useInViewport(rootRef);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (_visible) {
      setVisible(true);
    }
  }, [_visible]);

  const clickHandler = React.useCallback((e) => {
    onOpen({
      anchorPosition: {
        top: e.clientY,
        left: e.clientX
      },
      displayName: Icon.displayName
    });
  }, []);

  return (
    <Col className="col" ref={rootRef}>
      {visible && (
        <>
          <div className="icon" onClick={clickHandler}>
            <Icon fontSize="large" />
          </div>
          <div className="name">{Icon.displayName}</div>
        </>
      )}
    </Col>
  );
};

export default () => {
  const [tabIndex, { toggle }] = useToggle(0, [0, 1]);
  const [popoverState, setPopoverState] = React.useState<any>({});
  const [_searchText, setSearchText] = React.useState<string>();
  const [searchResult, setSearchResult] = React.useState<Array<string>>([]);

  const searchText = useDebounce(_searchText, 1000);

  const handleOpen = (state: any) => {
    setPopoverState(state);

    setTimeout(() => {
      setPopoverState((prev: any) => ({
        ...prev,
        visible: true
      }));
    }, 0);
  };

  const handleChange = (e: any) => {
    const value = e.target.value;

    setSearchText(value);
  };

  const searching = searchText && searchText != '';

  React.useEffect(() => {
    const iconSource = tabIndex === 0 ? outlinedIcons : filledIcons;

    if (searchText && searching) {
      const result = findAll(iconSource, (item) => {
        return !!item
          .toLocaleLowerCase()
          .match(new RegExp(searchText.toLocaleLowerCase()));
      });

      setSearchResult(result);
    }
  }, [searching, searchText, tabIndex]);

  return (
    <React.Fragment>
      <Space direction="vertical" gap={20}>
        <Space verticalAlign="stretch">
          <ButtonGroup ButtonProps={{ variant: 'outlined' }}>
            <Button
              variant={tabIndex === 0 ? 'contained' : 'outlined'}
              onClick={() => toggle(0)}
            >
              Outlined
            </Button>
            <Button
              variant={tabIndex === 1 ? 'contained' : 'outlined'}
              onClick={() => toggle(1)}
            >
              Filled
            </Button>
          </ButtonGroup>

          <Input
            allowClear
            style={{ height: '100%' }}
            placeholder="搜索图标"
            prefix={<Search color="action" />}
            onChange={handleChange}
            value={_searchText}
          />
        </Space>

        {searching &&
          (searchResult && searchResult.length > 0 ? (
            <StyledRow rowCols={{ xs: 2, sm: 3, md: 4 }} gutter={[2, 2]}>
              {searchResult.map((key, index) => {
                //@ts-expect-error
                const Icon = icons[key];
                return <IconItem Icon={Icon} key={key} onOpen={handleOpen} />;
              })}
            </StyledRow>
          ) : (
            <Empty />
          ))}

        <div
          style={{
            display: searching ? 'none' : 'block'
          }}
        >
          <TabContext value={tabIndex}>
            <TabPane value={0}>
              <StyledRow rowCols={{ xs: 2, sm: 3, md: 4 }} gutter={[2, 2]}>
                {outlinedIcons.map((key, index) => {
                  //@ts-expect-error
                  const Icon = icons[key];
                  return <IconItem Icon={Icon} key={key} onOpen={handleOpen} />;
                })}
              </StyledRow>
            </TabPane>
            <TabPane value={1}>
              <StyledRow rowCols={{ xs: 2, sm: 3, md: 4 }} gutter={[2, 2]}>
                {filledIcons.map((key, index) => {
                  //@ts-expect-error
                  const Icon = icons[key];
                  return <IconItem Icon={Icon} key={key} onOpen={handleOpen} />;
                })}
              </StyledRow>
            </TabPane>
          </TabContext>
        </div>
      </Space>
      <Popover
        visible={popoverState.visible}
        anchorReference="anchorPosition"
        anchorPosition={popoverState.anchorPosition}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        onClose={() => {
          setPopoverState((prev: any) => ({
            ...prev,
            visible: false
          }));
        }}
      >
        <SourceCode
          lang="tsx"
          code={`import { ${popoverState.displayName} } from '@wonder-ui/icons';

<${popoverState.displayName} /> `}
        />
      </Popover>
    </React.Fragment>
  );
};
