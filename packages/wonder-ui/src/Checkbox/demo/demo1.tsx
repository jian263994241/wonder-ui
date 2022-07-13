import { Checkbox, ContentBlock, Space } from '@wonder-ui/core';
import { useSelections } from '@wonder-ui/hooks';
import React from 'react';
import { EmojiSmile, EmojiSmileUpsideDown } from '@wonder-ui/icons';

const items = ['Apple', 'Orange', 'Banana'];

export default () => {
  const { allSelected, toggleAll, isSelected, select, unSelect, selected } =
    useSelections(items);

  return (
    <div>
      <ContentBlock title="基础用法">
        <Space direction="vertical">
          <Checkbox />

          <Checkbox>有描述的复选框</Checkbox>
        </Space>
      </ContentBlock>

      <ContentBlock title="默认选中">
        <Space direction="vertical">
          <Checkbox defaultChecked>默认选中</Checkbox>
        </Space>
      </ContentBlock>

      <ContentBlock title="全选和半选">
        <Space direction="vertical">
          <Checkbox
            checked={allSelected}
            indeterminate={selected.length > 0}
            onChange={() => toggleAll()}
          >
            全选
          </Checkbox>
          {items.map((item, index) => (
            <Checkbox
              key={index}
              checked={isSelected(item)}
              onChange={(e) => {
                if (e.target.checked) {
                  select(item);
                } else {
                  unSelect(item);
                }
              }}
            >
              {item}
            </Checkbox>
          ))}
        </Space>
      </ContentBlock>

      <ContentBlock title="禁用状态">
        <Space direction="vertical">
          <Checkbox disabled>禁用状态</Checkbox>
          <Checkbox disabled defaultChecked>
            禁用状态
          </Checkbox>
        </Space>
      </ContentBlock>

      <ContentBlock title="自定义大小">
        <Checkbox
          style={
            {
              fontSize: 14,
              '--wui-checkbox-icon-size': '18px',
              '--wui-checkbox-gap': '6px'
            } as React.CSSProperties
          }
        >
          小号的复选框
        </Checkbox>
      </ContentBlock>

      <ContentBlock title="自定义图标">
        <Checkbox
          icon={(checked) =>
            checked ? <EmojiSmile /> : <EmojiSmileUpsideDown />
          }
        >
          自定义图标
        </Checkbox>
      </ContentBlock>
    </div>
  );
};
