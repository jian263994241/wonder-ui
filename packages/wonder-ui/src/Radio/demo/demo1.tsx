import { Radio, ContentBlock, Space } from '@wonder-ui/core';
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
          <Radio />

          <Radio>有描述的单选框</Radio>
        </Space>
      </ContentBlock>

      <ContentBlock title="禁用状态">
        <Space direction="vertical">
          <Radio disabled>禁用状态</Radio>
          <Radio disabled defaultChecked>
            禁用状态
          </Radio>
        </Space>
      </ContentBlock>

      <ContentBlock title="自定义大小">
        <Radio
          style={
            {
              fontSize: 14,
              '--wui-radio-icon-size': '18px',
              '--wui-radio-gap': '6px'
            } as React.CSSProperties
          }
        >
          小号的单选框
        </Radio>
      </ContentBlock>

      <ContentBlock title="自定义图标">
        <Radio
          icon={(checked) =>
            checked ? <EmojiSmile /> : <EmojiSmileUpsideDown />
          }
        >
          自定义图标
        </Radio>
      </ContentBlock>
    </div>
  );
};
